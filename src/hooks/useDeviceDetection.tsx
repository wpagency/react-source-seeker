
import { useState, useEffect } from 'react';

export interface DeviceCapabilities {
  isDesktop: boolean;
  isMobile: boolean;
  cores: number;
  memory: number;
  connectionSpeed: string;
  isSlowConnection: boolean;
  prefersReducedMotion: boolean;
}

export const useDeviceDetection = () => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isDesktop: true,
    isMobile: false,
    cores: 4,
    memory: 4,
    connectionSpeed: 'unknown',
    isSlowConnection: false,
    prefersReducedMotion: false
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isDesktop = window.innerWidth >= 1024;
    const isMobile = window.innerWidth < 768;
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;
    const connection = (navigator as any).connection;
    const isSlowConnection = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setCapabilities({
      isDesktop,
      isMobile,
      cores,
      memory,
      connectionSpeed: connection?.effectiveType || 'unknown',
      isSlowConnection,
      prefersReducedMotion
    });
  }, []);

  return capabilities;
};


