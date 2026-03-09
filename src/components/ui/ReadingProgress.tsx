
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-green-400 to-blue-500"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default ReadingProgress;


