
import { motion } from "framer-motion";

export const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-md">
    <motion.div 
      className="w-5 h-5 border-t-2 border-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);


