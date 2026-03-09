import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useStoryProgress, useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface StorySectionProps {
  children: React.ReactNode;
  index: number;
  threshold?: number;
  className?: string;
  id?: string;
}

const StorySection: React.FC<StorySectionProps> = ({
  children,
  index,
  threshold = 0.2,
  className = '',
  id
}) => {
  const [containerRef, progress] = useStoryProgress({ threshold });
  const controls = useAnimation();
  const [isActive, setIsActive] = useState(false);
  const { prefersReducedMotion } = useDeviceCapabilities();
  
  // Variants for animations
  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };
  
  useEffect(() => {
    // Activate section when progress is above threshold
    if (progress > threshold && !isActive) {
      controls.start('visible');
      setIsActive(true);
    } else if (progress < threshold && isActive) {
      // Optional: deactivate when scrolling back up
      // controls.start('hidden');
      // setIsActive(false);
    }
  }, [progress, threshold, isActive, controls]);
  
  return (
    <motion.section
      ref={containerRef}
      id={id}
      className={`story-section ${className} ${isActive ? 'active' : ''}`}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
      data-story-index={index}
      data-story-progress={progress.toFixed(2)}
    >
      {children}
    </motion.section>
  );
};

export default StorySection;

