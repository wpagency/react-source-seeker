
import React, { createContext, useContext, useState, useEffect } from "react";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import { useAnimationSettings, AnimationSettings } from "@/hooks/useAnimationSettings";
import { usePerformanceMonitoring, PerformanceData } from "@/hooks/usePerformanceMonitoring";

interface AnimationContextType {
  settings: AnimationSettings;
  performanceData?: PerformanceData;
  updateSettings: (newSettings: Partial<AnimationSettings>) => void;
  toggleAnimations: () => void;
  togglePremiumExperience: () => void;
  enableClientMeetingMode: () => void;
  animationsEnabled: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

// Default settings matching the actual AnimationSettings interface
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

export const EnhancedAnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  
  // Safe hook usage with proper error handling
  let deviceCapabilities;
  let animationHooks;
  let performanceData;

  try {
    deviceCapabilities = useDeviceDetection();
  } catch (error) {
    console.warn("Device detection hook failed, using defaults:", error);
    deviceCapabilities = { 
      isMobile: false, 
      isLowEndDevice: false, 
      hasTouch: false,
      isDesktop: true,
      cores: 4,
      memory: 8,
      isSlowConnection: false,
      prefersReducedMotion: false
    };
  }

  try {
    animationHooks = useAnimationSettings(deviceCapabilities);
  } catch (error) {
    console.warn("Animation settings hook failed, using defaults:", error);
    animationHooks = {
      settings: defaultSettings,
      updateSettings: () => {},
      toggleAnimations: () => {},
      togglePremiumExperience: () => {},
      enableClientMeetingMode: () => {}
    };
  }

  try {
    performanceData = usePerformanceMonitoring(animationHooks.settings, animationHooks.updateSettings);
  } catch (error) {
    console.warn("Performance monitoring hook failed:", error);
    performanceData = undefined;
  }

  useEffect(() => {
    // Simple timeout to ensure providers are ready
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contextValue: AnimationContextType = {
    settings: animationHooks.settings,
    performanceData,
    updateSettings: animationHooks.updateSettings,
    toggleAnimations: animationHooks.toggleAnimations,
    togglePremiumExperience: animationHooks.togglePremiumExperience,
    enableClientMeetingMode: animationHooks.enableClientMeetingMode,
    animationsEnabled: animationHooks.settings.enabled
  };

  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useEnhancedAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    console.warn("useEnhancedAnimation must be used within an EnhancedAnimationProvider, using defaults");
    return {
      settings: defaultSettings,
      performanceData: undefined,
      updateSettings: () => {},
      toggleAnimations: () => {},
      togglePremiumExperience: () => {},
      enableClientMeetingMode: () => {},
      animationsEnabled: true
    };
  }
  return context;
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    console.warn("useAnimation must be used within an EnhancedAnimationProvider, using defaults");
    return {
      animationsEnabled: true,
      toggleAnimations: () => {}
    };
  }
  return {
    animationsEnabled: context.settings.enabled,
    toggleAnimations: context.toggleAnimations
  };
};


