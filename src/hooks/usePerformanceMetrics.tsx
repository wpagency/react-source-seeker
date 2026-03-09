
import { useState, useEffect } from 'react';

export interface PerformanceMetrics {
  fps: number;
  cls: number;
  lcp: number;
  fcp: number;
  deviceType: 'low' | 'medium' | 'high';
  connectionType: 'slow' | 'fast';
  batteryLevel?: number;
  isLowPowerMode?: boolean;
  memoryUsage?: number;
  renderTime?: number;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    cls: 0,
    lcp: 0,
    fcp: 0,
    deviceType: 'medium',
    connectionType: 'fast'
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof performance === 'undefined') return;

    let frameCount = 0;
    let startTime = performance.now();
    let clsValue = 0;
    let animationId: number;

    // Enhanced FPS monitoring with throttling
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= startTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - startTime));
        
        // Determine device capability based on FPS
        const deviceType = fps >= 50 ? 'high' : fps >= 30 ? 'medium' : 'low';
        
        setMetrics(prev => ({ 
          ...prev, 
          fps,
          deviceType,
          renderTime: currentTime - startTime
        }));
        
        frameCount = 0;
        startTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    // Enhanced Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
        
        if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        }
      });
    });

    // Connection speed detection
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      const connectionType = connection.effectiveType === '4g' || connection.effectiveType === '3g' ? 'fast' : 'slow';
      setMetrics(prev => ({ ...prev, connectionType }));
    }

    // Memory usage monitoring
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize;
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // Start monitoring
    animationId = requestAnimationFrame(measureFPS);
    
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });
    } catch (e) {
      console.log('Performance Observer not supported');
    }

    // Enhanced battery monitoring
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBatteryInfo = () => {
          setMetrics(prev => ({ 
            ...prev, 
            batteryLevel: battery.level,
            isLowPowerMode: battery.level < 0.2 || !battery.charging
          }));
        };

        updateBatteryInfo();
        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingchange', updateBatteryInfo);
      });
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      observer.disconnect();
    };
  }, []);

  return metrics;
};


