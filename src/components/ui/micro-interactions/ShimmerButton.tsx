import React from 'react';
import { motion } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface ShimmerButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  shimmerColor?: string;
  shimmerDuration?: number;
  shimmerDelay?: number;
  type?: 'button' | 'submit' | 'reset';
  autoShimmer?: boolean;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  shimmerColor = 'rgba(255, 255, 255, 0.2)',
  shimmerDuration = 2.5,
  shimmerDelay = 3,
  type = 'button',
  autoShimmer = false
}) => {
  const { prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  
  // Disable shimmer for reduced motion or low-end devices
  const isShimmerDisabled = prefersReducedMotion || isLowEnd;
  
  return (
    <motion.button
      type={type}
      className={`shimmer-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: disabled ? 'not-allowed' : 'pointer',
        outline: 'none',
        userSelect: 'none'
      }}
    >
      {/* Shimmer effect */}
      {!isShimmerDisabled && (
        <motion.span
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: shimmerDuration,
            repeat: autoShimmer ? Infinity : 0,
            repeatType: 'loop',
            repeatDelay: shimmerDelay,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
      )}
      
      {/* Button content */}
      <span style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </span>
    </motion.button>
  );
};

export default ShimmerButton;

