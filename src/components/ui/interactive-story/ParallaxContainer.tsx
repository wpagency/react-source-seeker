import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  overflow?: 'visible' | 'hidden';
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  overflow = 'hidden'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  const [containerHeight, setContainerHeight] = useState(0);
  
  // Disable parallax for reduced motion or low-end devices
  const isParallaxDisabled = prefersReducedMotion || isLowEnd;
  
  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  // Calculate parallax offset based on direction and speed
  const factor = direction === 'down' ? 1 : -1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isParallaxDisabled ? [0, 0] : [0, containerHeight * speed * factor]
  );
  
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div
      ref={containerRef}
      className={`parallax-container ${className}`}
      style={{
        position: 'relative',
        overflow: overflow
      }}
    >
      <motion.div
        style={{
          y,
          height: '100%',
          width: '100%'
        }}
        className="parallax-content"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;

