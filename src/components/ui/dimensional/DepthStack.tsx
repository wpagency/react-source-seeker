import React from 'react';
import { motion } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface DepthStackProps {
  children: React.ReactNode[];
  className?: string;
  gap?: number;
  perspective?: number;
  disabled?: boolean;
}

const DepthStack: React.FC<DepthStackProps> = ({
  children,
  className = '',
  gap = 20,
  perspective = 1000,
  disabled = false
}) => {
  const { prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  
  // Disable effect for reduced motion preference or low-end devices
  const isEffectDisabled = prefersReducedMotion || isLowEnd || disabled;
  
  return (
    <div
      className={`depth-stack ${className}`}
      style={{
        position: 'relative',
        perspective: isEffectDisabled ? 'none' : `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
    >
      {React.Children.map(children, (child, index) => {
        const depth = isEffectDisabled ? 0 : (children.length - index - 1) * gap;
        
        return (
          <motion.div
            className="depth-stack-layer"
            style={{
              position: index === 0 ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              transformStyle: 'preserve-3d',
              zIndex: children.length - index
            }}
            animate={{
              z: -depth
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default DepthStack;

