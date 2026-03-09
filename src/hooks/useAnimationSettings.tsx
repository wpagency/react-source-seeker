
import { useState, useEffect, useCallback } from 'react';
import { DeviceCapabilities } from './useDeviceDetection';

export interface AnimationSettings {
  enabled: boolean;
  quality: 'low' | 'medium' | 'high';
  speed: number;
  smoothScroll: boolean;
  parallaxEffects: boolean;
  threeDEffects: boolean;
  glowEffects: boolean;
  particleEffects: boolean;
  performanceMode: boolean;
  reducedMotion: boolean;
  premiumExperience: boolean;
  clientMeetingMode: boolean;
  autoOptimize: boolean;
}

const defaultSettings: AnimationSettings = {
  enabled: true,
  quality: 'medium',
  speed: 1,
  smoothScroll: true,
  parallaxEffects: true,
  threeDEffects: true,
  glowEffects: true,
  particleEffects: true,
  performanceMode: false,
  reducedMotion: false,
  premiumExperience: true,
  clientMeetingMode: false,
  autoOptimize: true
};

export const useAnimationSettings = (deviceCapabilities: DeviceCapabilities) => {
  const [settings, setSettings] = useState<AnimationSettings>(defaultSettings);

  // Initialize settings based on device capabilities
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load saved settings
    const savedSettings = localStorage.getItem('Source Seeker-animation-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse saved animation settings');
      }
    }

    // Apply smart defaults based on device capabilities
    const smartDefaults: Partial<AnimationSettings> = {
      premiumExperience: deviceCapabilities.isDesktop && !deviceCapabilities.isSlowConnection,
      enabled: !deviceCapabilities.prefersReducedMotion && !(deviceCapabilities.isMobile && deviceCapabilities.isSlowConnection),
      quality: deviceCapabilities.cores >= 8 && deviceCapabilities.memory >= 8 ? 'high' : 
               deviceCapabilities.cores >= 4 ? 'medium' : 'low',
      threeDEffects: deviceCapabilities.isDesktop && deviceCapabilities.cores >= 4,
      particleEffects: deviceCapabilities.isDesktop && !deviceCapabilities.isSlowConnection,
      performanceMode: deviceCapabilities.isMobile || deviceCapabilities.cores <= 4 || deviceCapabilities.isSlowConnection,
      reducedMotion: deviceCapabilities.prefersReducedMotion
    };

    setSettings(prev => ({ ...prev, ...smartDefaults }));
  }, [deviceCapabilities]);

  // Save settings and apply CSS classes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('Source Seeker-animation-settings', JSON.stringify(settings));
    
    // Apply CSS classes based on settings
    document.body.classList.toggle('reduce-motion', !settings.enabled || settings.reducedMotion);
    document.body.classList.toggle('performance-mode', settings.performanceMode);
    document.body.classList.toggle('premium-experience', settings.premiumExperience);
    document.body.classList.toggle('client-meeting-mode', settings.clientMeetingMode);
    document.body.classList.toggle('low-quality', settings.quality === 'low');
    document.body.classList.toggle('high-quality', settings.quality === 'high');
  }, [settings]);

  const updateSettings = useCallback((newSettings: Partial<AnimationSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  const toggleAnimations = useCallback(() => {
    setSettings(prev => ({ ...prev, enabled: !prev.enabled }));
  }, []);

  const togglePremiumExperience = useCallback(() => {
    setSettings(prev => {
      const premiumExperience = !prev.premiumExperience;
      return {
        ...prev,
        premiumExperience,
        enabled: premiumExperience || prev.enabled,
        quality: premiumExperience ? 'high' : 'medium',
        threeDEffects: premiumExperience,
        glowEffects: premiumExperience,
        particleEffects: premiumExperience
      };
    });
  }, []);

  const enableClientMeetingMode = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      clientMeetingMode: true,
      performanceMode: false,
      quality: 'high',
      smoothScroll: true,
      speed: 0.8
    }));
  }, []);

  return {
    settings,
    updateSettings,
    toggleAnimations,
    togglePremiumExperience,
    enableClientMeetingMode
  };
};


