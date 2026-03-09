import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
  rotate?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  duration = 4,
  delay = 0,
  distance = 10,
  rotate = 0
}) => {
  const { prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  
  // Disable animation for reduced motion or low-end devices
  const isAnimationDisabled = prefersReducedMotion || isLowEnd;
  
  const floatingVariants: Variants = {
    animate: isAnimationDisabled
      ? {}
      : {
          y: [-distance, distance, -distance],
          rotate: rotate ? [-rotate, rotate, -rotate] : 0,
          transition: {
            duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay
          }
        }
  };
  
  return (
    <motion.div
      className={`floating-element ${className}`}
      variants={floatingVariants}
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;

