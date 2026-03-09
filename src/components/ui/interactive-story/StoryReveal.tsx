import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useIntersectionObserver, useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface StoryRevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const StoryReveal: React.FC<StoryRevealProps> = ({
  children,
  delay = 0,
  threshold = 0.2,
  className = '',
  direction = 'up'
}) => {
  const controls = useAnimation();
  const [ref, isInView] = useIntersectionObserver({ threshold });
  const hasAnimated = useRef(false);
  const { prefersReducedMotion } = useDeviceCapabilities();
  
  // Set initial animation values based on direction
  const getInitialPosition = () => {
    if (prefersReducedMotion) return { x: 0, y: 0 };
    
    switch (direction) {
      case 'up': return { y: 20 };
      case 'down': return { y: -20 };
      case 'left': return { x: 20 };
      case 'right': return { x: -20 };
      default: return { y: 20 };
    }
  };
  
  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition()
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }
    }
  };
  
  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      controls.start('visible');
      hasAnimated.current = true;
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      className={`story-reveal ${className}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default StoryReveal;

