
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { usePerformanceMetrics, PerformanceMetrics } from '@/hooks/usePerformanceMetrics';
import { usePerformanceSettings, PerformanceSettings } from '@/hooks/usePerformanceSettings';
import { detectDeviceCapabilities } from '@/utils/deviceCapabilities';

interface PerformanceContextType {
  metrics: PerformanceMetrics;
  settings: PerformanceSettings;
  updateSettings: (newSettings: Partial<PerformanceSettings>) => void;
  enablePerformanceMode: () => void;
  enablePremiumMode: () => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

interface PerformanceProviderProps {
  children: ReactNode;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ children }) => {
  const metrics = usePerformanceMetrics();
  
  // Initialize settings based on device capabilities
  const { deviceType, connectionType } = detectDeviceCapabilities();
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof navigator !== 'undefined' && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  const shouldUsePerformanceMode = deviceType === 'low' || connectionType === 'slow' || prefersReducedMotion;

  const initialSettings: PerformanceSettings = {
    enableAnimations: !prefersReducedMotion,
    enableParticles: !shouldUsePerformanceMode,
    enableGlowEffects: !shouldUsePerformanceMode,
    enableParallax: deviceType !== 'low' && !isMobile,
    imageQuality: deviceType === 'high' ? 'high' : deviceType === 'low' ? 'low' : 'medium',
    reducedMotion: prefersReducedMotion,
    performanceMode: shouldUsePerformanceMode
  };

  const {
    settings,
    updateSettings,
    enablePerformanceMode,
    enablePremiumMode
  } = usePerformanceSettings(initialSettings);

  // Auto-adjust settings based on performance
  useEffect(() => {
    if (metrics.fps < 30 && !settings.performanceMode) {
      console.log('Low FPS detected, enabling performance mode');
      enablePerformanceMode();
    }
  }, [metrics.fps, settings.performanceMode, enablePerformanceMode]);

  // Enable performance mode on low battery
  useEffect(() => {
    if (metrics.isLowPowerMode && !settings.performanceMode) {
      enablePerformanceMode();
    }
  }, [metrics.isLowPowerMode, settings.performanceMode, enablePerformanceMode]);

  return (
    <PerformanceContext.Provider value={{
      metrics,
      settings,
      updateSettings,
      enablePerformanceMode,
      enablePremiumMode
    }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};


