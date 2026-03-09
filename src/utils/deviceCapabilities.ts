
export const detectDeviceCapabilities = () => {
  // Server-side rendering safety
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return {
      deviceType: 'medium' as const,
      connectionType: 'fast' as const,
      reducedMotion: false,
      isMobile: false,
      isLowEndDevice: false
    };
  }

  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4;
  const connection = (navigator as any).connection;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Check for reduced motion preference
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Determine device capability
  let deviceType: 'low' | 'medium' | 'high' = 'medium';
  let isLowEndDevice = false;

  if (cores <= 2 || memory <= 2) {
    deviceType = 'low';
    isLowEndDevice = true;
  } else if (cores >= 8 && memory >= 8) {
    deviceType = 'high';
  }

  // Mobile devices are generally considered lower capability for complex animations
  if (isMobile && deviceType === 'medium') {
    deviceType = 'low';
    isLowEndDevice = true;
  }

  // Determine connection speed
  let connectionType: 'slow' | 'fast' = 'fast';
  if (connection) {
    if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
      connectionType = 'slow';
    } else if (connection.effectiveType === '3g') {
      connectionType = 'slow';
    }
  }

  return { 
    deviceType, 
    connectionType, 
    reducedMotion,
    isMobile,
    isLowEndDevice
  };
};

// Utility function to check if animations should be reduced
export const shouldReduceAnimations = () => {
  const capabilities = detectDeviceCapabilities();
  return capabilities.reducedMotion || capabilities.isLowEndDevice;
};

// Utility function to get performance settings
export const getPerformanceSettings = () => {
  const capabilities = detectDeviceCapabilities();
  
  return {
    enableParticles: capabilities.deviceType === 'high' && !capabilities.reducedMotion,
    enableComplexAnimations: capabilities.deviceType !== 'low' && !capabilities.reducedMotion,
    enableBlurEffects: capabilities.deviceType !== 'low',
    reduceMotion: capabilities.reducedMotion,
    maxParticles: capabilities.deviceType === 'high' ? 50 : capabilities.deviceType === 'medium' ? 20 : 5
  };
};


