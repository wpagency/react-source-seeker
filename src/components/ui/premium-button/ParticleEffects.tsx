
import { motion } from "framer-motion";

export const ParticleEffects = () => (
  <motion.div
    className="absolute inset-0 opacity-0 group-hover:opacity-100"
    transition={{ duration: 0.3 }}
  >
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${15 + i * 8}%`,
          top: `${25 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -15, 0],
          opacity: [0, 1, 0],
          scale: [0, 1.2, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.div>
);


