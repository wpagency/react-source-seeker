
import { motion } from "framer-motion";

export const ShimmerEffect = () => (
  <motion.span 
    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
    style={{ backgroundSize: '200% 100%' }}
    initial={{ x: '-100%' }}
    animate={{
      x: '100%',
      transition: { 
        repeat: Infinity, 
        duration: 2.5,
        ease: "easeInOut",
        repeatType: "loop",
        repeatDelay: 3,
      }
    }}
  />
);


