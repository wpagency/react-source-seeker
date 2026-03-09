
import { motion } from "framer-motion";

export const MagneticField = () => (
  <motion.div
    className="absolute -inset-2 border border-blue-400/0 rounded-lg"
    whileHover={{
      borderColor: "rgba(59, 130, 246, 0.3)",
      scale: 1.1,
    }}
    transition={{ duration: 0.3 }}
  />
);


