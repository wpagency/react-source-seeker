
import React, { useEffect, useState } from 'react';
import { useEnhancedAnimation } from '@/components/layout/EnhancedAnimationProvider';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  cls: number;
  fid: number;
  fps: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);
  const { settings } = useEnhancedAnimation();

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime } as PerformanceMetrics));
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime } as PerformanceMetrics));
        }
        
        if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: (prev?.cls || 0) + (entry as any).value 
            } as PerformanceMetrics));
          }
        }
      });
    });

    // Observe performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });
    } catch (e) {
      console.log('Performance Observer not supported');
    }

    // FPS monitoring
    let frames = 0;
    let startTime = performance.now();
    
    const countFrames = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= startTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - startTime));
        setMetrics(prev => ({ ...prev, fps } as PerformanceMetrics));
        frames = 0;
        startTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setShowMetrics(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!showMetrics || !metrics) return null;

  const getScoreColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'text-green-400';
    if (value <= thresholds[1]) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-md rounded-lg p-4 text-white text-xs font-mono z-50 border border-white/20">
      <div className="mb-2 font-semibold">Performance Metrics</div>
      
      <div className="space-y-1">
        {metrics.fcp && (
          <div className={`${getScoreColor(metrics.fcp, [1500, 2500])}`}>
            FCP: {Math.round(metrics.fcp)}ms
          </div>
        )}
        
        {metrics.lcp && (
          <div className={`${getScoreColor(metrics.lcp, [2500, 4000])}`}>
            LCP: {Math.round(metrics.lcp)}ms
          </div>
        )}
        
        {metrics.cls !== undefined && (
          <div className={`${getScoreColor(metrics.cls, [0.1, 0.25])}`}>
            CLS: {metrics.cls.toFixed(3)}
          </div>
        )}
        
        <div className={`${getScoreColor(60 - metrics.fps, [10, 30])}`}>
          FPS: {metrics.fps}
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-white/20">
        <div className={`${settings.performanceMode ? 'text-green-400' : 'text-blue-400'}`}>
          Mode: {settings.performanceMode ? 'Performance' : 'Premium'}
        </div>
        <div className="text-gray-400">
          Quality: {settings.quality}
        </div>
      </div>
      
      <div className="mt-1 text-gray-500 text-[10px]">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};


