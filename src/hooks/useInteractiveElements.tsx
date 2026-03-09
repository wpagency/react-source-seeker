import { useState, useEffect, useRef, RefObject } from 'react';

interface MagneticOptions {
  strength?: number;
  radius?: number;
  damping?: number;
}

interface ParallaxOptions {
  intensity?: number;
  reverse?: boolean;
}

interface StoryProgressOptions {
  threshold?: number;
  onProgress?: (progress: number) => void;
}

export const useMagneticEffect = <T extends HTMLElement>(
  options: MagneticOptions = {}
): [RefObject<T>, { x: number; y: number }] => {
  const {
    strength = 40,
    radius = 200,
    damping = 8
  } = options;
  
  const elementRef = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < radius) {
        const power = (radius - distance) / radius;
        targetX = distanceX * power * strength / 10;
        targetY = distanceY * power * strength / 10;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };
    
    const updatePosition = () => {
      currentX += (targetX - currentX) / damping;
      currentY += (targetY - currentY) / damping;
      
      if (Math.abs(currentX - targetX) < 0.01) currentX = targetX;
      if (Math.abs(currentY - targetY) < 0.01) currentY = targetY;
      
      setPosition({ x: currentX, y: currentY });
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [strength, radius, damping]);
  
  return [elementRef, position];
};

export const useParallaxEffect = <T extends HTMLElement>(
  options: ParallaxOptions = {}
): [RefObject<T>, { x: number; y: number }] => {
  const {
    intensity = 0.1,
    reverse = false
  } = options;
  
  const elementRef = useRef<T>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate position from center (values from -1 to 1)
      const xPos = (e.clientX - windowWidth / 2) / (windowWidth / 2);
      const yPos = (e.clientY - windowHeight / 2) / (windowHeight / 2);
      
      // Apply intensity and reverse if needed
      const factor = reverse ? -1 : 1;
      const xOffset = xPos * intensity * 100 * factor;
      const yOffset = yPos * intensity * 100 * factor;
      
      setOffset({ x: xOffset, y: yOffset });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, reverse]);
  
  return [elementRef, offset];
};

export const useStoryProgress = (
  options: StoryProgressOptions = {}
): [RefObject<HTMLDivElement>, number] => {
  const {
    threshold = 0.2,
    onProgress
  } = options;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Element is above viewport
      if (rect.bottom < 0) {
        setProgress(1);
        return;
      }
      
      // Element is below viewport
      if (rect.top > windowHeight) {
        setProgress(0);
        return;
      }
      
      // Element is partially visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const elementHeight = rect.height;
      
      // Calculate progress based on visible portion
      const currentProgress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
      setProgress(currentProgress);
      
      if (onProgress) {
        onProgress(currentProgress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, onProgress]);
  
  return [containerRef, progress];
};

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [options]);
  
  return [ref, isIntersecting];
};

export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState({
    isLowEnd: false,
    prefersReducedMotion: false,
    isMobile: false,
    isTouch: false
  });
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for mobile/touch device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Estimate if device is low-end
    const isLowEnd = 
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
      isMobile;
    
    setCapabilities({
      isLowEnd,
      prefersReducedMotion,
      isMobile,
      isTouch
    });
  }, []);
  
  return capabilities;
};

