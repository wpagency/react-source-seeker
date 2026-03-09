
import React from "react";
import { motion } from "framer-motion";

export const EnhancedFooterBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Interactive background glow that follows cursor */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      </motion.div>
      
      {/* Enhanced floating particles with staggered animations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-${1 + (i % 3)} h-${1 + (i % 3)} rounded-full`}
          style={{
            background: i % 3 === 0 ? 'rgba(14, 165, 233, 0.3)' : 
                       i % 3 === 1 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(236, 72, 153, 0.3)',
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
};


