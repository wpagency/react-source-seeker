import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
  type?: 'button' | 'submit' | 'reset';
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  rippleColor = 'rgba(255, 255, 255, 0.7)',
  rippleDuration = 0.8,
  type = 'button'
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const nextId = useRef(0);
  const { prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  
  // Disable ripple for reduced motion or low-end devices
  const isRippleDisabled = prefersReducedMotion || isLowEnd;
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isRippleDisabled) return;
    
    if (onClick) {
      onClick(e);
    }
    
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      
      // Calculate ripple position relative to button
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate ripple size (diagonal of the button to ensure it covers the entire button)
      const size = Math.max(rect.width, rect.height) * 2;
      
      // Add new ripple
      const id = nextId.current++;
      setRipples([...ripples, { id, x, y, size }]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(currentRipples => currentRipples.filter(ripple => ripple.id !== id));
      }, rippleDuration * 1000);
    }
  };
  
  return (
    <button
      ref={buttonRef}
      type={type}
      className={`ripple-button ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: disabled ? 'not-allowed' : 'pointer',
        outline: 'none',
        userSelect: 'none'
      }}
    >
      {/* Ripple effects */}
      <AnimatePresence>
        {!isRippleDisabled && ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            initial={{ 
              opacity: 0.5,
              scale: 0,
              x: ripple.x - ripple.size / 2,
              y: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size
            }}
            animate={{ 
              opacity: 0,
              scale: 1
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: rippleDuration }}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: rippleColor,
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Button content */}
      <span style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </span>
    </button>
  );
};

export default RippleButton;

