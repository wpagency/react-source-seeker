
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollToTopButtonProps {
  threshold?: number;
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ 
  threshold = 300,
  className = ""
}) => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setVisible(scrollTop > threshold);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ 
            duration: 0.3, 
            type: "spring",
            stiffness: 300,
            damping: 15 
          }}
          className={`fixed bottom-8 right-8 z-50 ${className}`}
        >
          <motion.button
            onClick={scrollToTop}
            className="relative p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-300 group overflow-hidden"
            aria-label="Scroll to top"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="289"
                initial={{ strokeDashoffset: 289 }}
                animate={{ 
                  strokeDashoffset: 289 - (scrollProgress / 100) * 289 
                }}
                transition={{ duration: 0.1 }}
              />
            </svg>
            
            <div className="relative z-10">
              <ArrowUp 
                className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform" 
                strokeWidth={2.5} 
              />
            </div>
            
            <motion.div
              className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;


