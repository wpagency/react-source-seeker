
import { useState, useEffect } from 'react';
import { AnimationSettings } from './useAnimationSettings';

export interface PerformanceData {
  fps: number;
  memory: number;
  deviceType: 'high' | 'medium' | 'low';
  batteryLevel?: number;
  connectionSpeed?: string;
}

export const usePerformanceMonitoring = (settings: AnimationSettings, updateSettings: (newSettings: Partial<AnimationSettings>) => void) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const detectPerformance = () => {
      const cores = navigator.hardwareConcurrency || 4;
      const memory = (navigator as any).deviceMemory || 4;
      const connection = (navigator as any).connection;
      
      const deviceType: 'high' | 'medium' | 'low' = 
        cores >= 8 && memory >= 8 ? 'high' :
        cores >= 4 && memory >= 4 ? 'medium' : 'low';

      const perfData: PerformanceData = {
        fps: 60,
        memory: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
        deviceType,
        connectionSpeed: connection?.effectiveType || 'unknown'
      };

      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          perfData.batteryLevel = battery.level;
          setPerformanceData(perfData);
        });
      } else {
        setPerformanceData(perfData);
      }
    };

    detectPerformance();
  }, []);

  // Auto-optimization based on performance
  useEffect(() => {
    if (settings.autoOptimize && performanceData) {
      const needsOptimization = 
        performanceData.fps < 30 || 
        performanceData.deviceType === 'low' ||
        (performanceData.batteryLevel && performanceData.batteryLevel < 0.2);

      if (needsOptimization && !settings.performanceMode) {
        updateSettings({
          performanceMode: true,
          quality: 'low',
          threeDEffects: false,
          particleEffects: false
        });
      }
    }
  }, [performanceData, settings.autoOptimize, settings.performanceMode, updateSettings]);

  return performanceData;
};


