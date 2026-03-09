
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  message?: string;
  progress?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = "Loading Source Seeker...", 
  progress 
}) => {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center space-x-2"
        >
          <motion.span 
            className="text-4xl font-bold text-white"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(14, 165, 233, 0.5)",
                "0 0 20px rgba(14, 165, 233, 0.8)",
                "0 0 10px rgba(14, 165, 233, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            WP
          </motion.span>
          <motion.span 
            className="text-4xl font-light text-white/90"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Agency
          </motion.span>
          <motion.span 
            className="text-3xl font-bold text-primary"
            animate={{ 
              scale: [1, 1.1, 1],
              color: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--primary))"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            .xyz
          </motion.span>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex justify-center">
          <motion.div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-primary rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        {typeof progress === 'number' && (
          <div className="w-64 mx-auto">
            <div className="bg-secondary/30 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {Math.round(progress)}% complete
            </p>
          </div>
        )}

        {/* Loading Message */}
        <motion.p
          className="text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {message}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-sm text-primary/70 font-medium"
        >
          Elite Digital Solutions
        </motion.p>
      </div>
    </div>
  );
};


