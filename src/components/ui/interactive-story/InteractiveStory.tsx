import React, { useState, useEffect } from 'react';
import StoryProgress from './StoryProgress';
import { useDeviceCapabilities } from '@/hooks/useInteractiveElements';

interface InteractiveStoryProps {
  children: React.ReactNode;
  showProgress?: boolean;
  className?: string;
}

const InteractiveStory: React.FC<InteractiveStoryProps> = ({
  children,
  showProgress = false,
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSections, setTotalSections] = useState(0);
  const { isLowEnd } = useDeviceCapabilities();
  
  useEffect(() => {
    // Count story sections
    const sections = document.querySelectorAll('[data-story-index]');
    setTotalSections(sections.length);
    
    const handleScroll = () => {
      // Find the section that is most visible in the viewport
      let maxVisibleSection = 0;
      let maxVisibleAmount = 0;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Get the visibility ratio
        const visibilityRatio = visibleHeight / windowHeight;
        
        if (visibilityRatio > maxVisibleAmount) {
          maxVisibleAmount = visibilityRatio;
          const index = parseInt(section.getAttribute('data-story-index') || '0', 10);
          maxVisibleSection = index;
        }
      });
      
      setActiveIndex(maxVisibleSection);
    };
    
    // Throttle scroll event for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  
  return (
    <div className={`interactive-story ${className}`}>
      {children}
      
      {showProgress && !isLowEnd && totalSections > 1 && (
        <StoryProgress
          totalSections={totalSections}
          activeIndex={activeIndex}
        />
      )}
    </div>
  );
};

export default InteractiveStory;

