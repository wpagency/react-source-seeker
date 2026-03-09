import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StoryProgressProps {
  totalSections: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

const StoryProgress: React.FC<StoryProgressProps> = ({
  totalSections,
  activeIndex,
  onDotClick,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show progress after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle dot click
  const handleClick = (index: number) => {
    if (onDotClick) {
      onDotClick(index);
    } else {
      // Default behavior: scroll to section
      const section = document.querySelector(`[data-story-index="${index}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <motion.div
      className={`story-progress ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '50%',
        right: '30px',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        zIndex: 50
      }}
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.button
          key={index}
          className={`story-progress-dot ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: activeIndex === index 
              ? 'rgba(14, 165, 233, 1)' 
              : 'rgba(255, 255, 255, 0.3)',
            scale: activeIndex === index ? 1.3 : 1
          }}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          {activeIndex === index && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                right: '-4px',
                bottom: '-4px',
                borderRadius: '50%',
                border: '1px solid rgba(14, 165, 233, 0.5)',
                zIndex: -1
              }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default StoryProgress;

