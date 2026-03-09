import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface ParallaxLayersProps {
  children: React.ReactNode[];
  className?: string;
  baseSpeed?: number;
  speedMultipliers?: number[];
  direction?: 'up' | 'down';
  disabled?: boolean;
}

const ParallaxLayers: React.FC<ParallaxLayersProps> = ({
  children,
  className = '',
  baseSpeed = 0.5,
  speedMultipliers,
  direction = 'up',
  disabled = false
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  
  // Disable parallax for reduced motion or low-end devices
  const isParallaxDisabled = prefersReducedMotion || isLowEnd || disabled;
  
  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  // Default multipliers if not provided
  const multipliers = speedMultipliers || 
    Array.from({ length: React.Children.count(children) }, (_, i) => 1 - (i * 0.2));
  
  // Direction factor
  const directionFactor = direction === 'down' ? 1 : -1;
  
  return (
    <div
      ref={containerRef}
      className={`parallax-layers ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {React.Children.map(children, (child, index) => {
        // Calculate transform based on scroll progress
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          isParallaxDisabled 
            ? [0, 0] 
            : [0, 100 * baseSpeed * multipliers[index] * directionFactor]
        );
        
        return (
          <motion.div
            className={`parallax-layer parallax-layer-${index + 1}`}
            style={{
              position: index === 0 ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              y,
              zIndex: React.Children.count(children) - index
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParallaxLayers;

