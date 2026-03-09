
import { motion } from "framer-motion";

export const PulseEffect = () => (
  <motion.span 
    className="absolute inset-0 rounded-md bg-white/10"
    animate={{
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);


