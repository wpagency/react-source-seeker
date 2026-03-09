
import { motion } from "framer-motion";

export const BorderEffect = () => (
  <motion.div
    className="absolute inset-0 rounded-md border border-white/20 opacity-0"
    whileHover={{ 
      opacity: 1,
      scale: 1.02,
      borderColor: "rgba(255, 255, 255, 0.4)"
    }}
    transition={{ duration: 0.3 }}
  />
);


