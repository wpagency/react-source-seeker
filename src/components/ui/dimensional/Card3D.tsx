import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  glare?: boolean;
  shadow?: boolean;
  disabled?: boolean;
}

const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  intensity = 15,
  perspective = 1000,
  glare = true,
  shadow = true,
  disabled = false
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { isTouch, prefersReducedMotion, isLowEnd } = useDeviceCapabilities();
  
  // Disable effect for touch devices, reduced motion preference, or if explicitly disabled
  const isEffectDisabled = isTouch || prefersReducedMotion || isLowEnd || disabled;
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isEffectDisabled || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (values from -0.5 to 0.5)
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Apply rotation based on mouse position and intensity
    setRotateY(xPos * intensity);
    setRotateX(-yPos * intensity);
    
    // Update glare position
    setGlarePosition({ x: xPos, y: yPos });
  };
  
  const handleMouseLeave = () => {
    if (isEffectDisabled) return;
    
    // Reset card position
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        position: 'relative',
        willChange: 'transform',
        transition: 'transform 0.1s ease',
        boxShadow: shadow && !isEffectDisabled ? '0 10px 30px -5px rgba(0, 0, 0, 0.3)' : undefined
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        boxShadow: shadow && !isEffectDisabled
          ? `0 ${10 + Math.abs(rotateX) / 2}px ${30 + Math.abs(rotateY)}px -5px rgba(0, 0, 0, ${0.3 + Math.abs(rotateY) / 100})`
          : undefined
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.5
      }}
    >
      <div className="card-3d-content" style={{ transform: 'translateZ(0px)' }}>
        {children}
      </div>
      
      {/* Glare effect */}
      {glare && !isEffectDisabled && (
        <motion.div
          className="card-3d-glare"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 9
          }}
          animate={{
            background: `radial-gradient(circle at ${50 + glarePosition.x * 100}% ${50 + glarePosition.y * 100}%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 60%)`
          }}
        />
      )}
    </motion.div>
  );
};

export default Card3D;

