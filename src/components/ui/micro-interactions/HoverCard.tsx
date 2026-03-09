import React from 'react';
import { motion } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
  glowColor?: string;
  glowIntensity?: number;
  borderGlow?: boolean;
  disabled?: boolean;
}

const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className = '',
  hoverScale = 1.03,
  hoverY = -5,
  glowColor = 'rgba(14, 165, 233, 0.3)',
  glowIntensity = 0.3,
  borderGlow = false,
  disabled = false
}) => {
  const { prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  
  // Disable effects for reduced motion or low-end devices
  const isEffectDisabled = prefersReducedMotion || isLowEnd || disabled;
  
  // Parse color for glow effect
  const parseColor = (color: string) => {
    if (color.startsWith('rgba')) {
      return color;
    }
    if (color.startsWith('rgb')) {
      const rgb = color.match(/\d+/g);
      if (rgb && rgb.length === 3) {
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${glowIntensity})`;
      }
    }
    // Default fallback
    return `rgba(14, 165, 233, ${glowIntensity})`;
  };
  
  const parsedGlowColor = parseColor(glowColor);
  
  return (
    <motion.div
      className={`hover-card ${className}`}
      whileHover={isEffectDisabled ? {} : {
        scale: hoverScale,
        y: hoverY,
        boxShadow: `0 10px 30px -5px ${parsedGlowColor}`,
        borderColor: borderGlow ? glowColor : undefined
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      style={{
        position: 'relative',
        transition: 'border-color 0.3s ease'
      }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;

