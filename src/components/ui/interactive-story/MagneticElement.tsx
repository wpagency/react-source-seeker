import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticEffect, useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface MagneticElementProps {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  damping?: number;
  className?: string;
  as?: React.ElementType;
}

const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  strength = 40,
  radius = 200,
  damping = 8,
  className = '',
  as = 'div'
}) => {
  const [elementRef, { x, y }] = useMagneticEffect<HTMLDivElement>({
    strength,
    radius,
    damping
  });
  
  const { isTouch, prefersReducedMotion } = useDeviceCapabilities();
  
  // Disable effect for touch devices and reduced motion preference
  const isEffectDisabled = isTouch || prefersReducedMotion;
  
  const Component = motion[as as keyof typeof motion] || motion.div;
  
  return (
    <Component
      ref={elementRef}
      className={`magnetic-effect ${className}`}
      style={{
        display: 'inline-block',
        transform: isEffectDisabled ? 'none' : undefined
      }}
      animate={{
        x: isEffectDisabled ? 0 : x,
        y: isEffectDisabled ? 0 : y
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      {children}
    </Component>
  );
};

export default MagneticElement;

