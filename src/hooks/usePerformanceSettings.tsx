
import { useState, useCallback } from 'react';

export interface PerformanceSettings {
  enableAnimations: boolean;
  enableParticles: boolean;
  enableGlowEffects: boolean;
  enableParallax: boolean;
  imageQuality: 'low' | 'medium' | 'high';
  reducedMotion: boolean;
  performanceMode: boolean;
}

export const usePerformanceSettings = (initialSettings: PerformanceSettings) => {
  const [settings, setSettings] = useState<PerformanceSettings>(initialSettings);

  const updateSettings = useCallback((newSettings: Partial<PerformanceSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  const enablePerformanceMode = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      performanceMode: true,
      enableParticles: false,
      enableGlowEffects: false,
      enableParallax: false,
      imageQuality: 'low'
    }));
  }, []);

  const enablePremiumMode = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      performanceMode: false,
      enableParticles: true,
      enableGlowEffects: true,
      enableParallax: true,
      imageQuality: 'high'
    }));
  }, []);

  return {
    settings,
    updateSettings,
    enablePerformanceMode,
    enablePremiumMode
  };
};


