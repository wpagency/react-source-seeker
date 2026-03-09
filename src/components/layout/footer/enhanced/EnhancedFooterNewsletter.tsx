
import React from "react";
import { motion } from "framer-motion";
import NewsletterSignup from "@/components/ui/NewsletterSignup";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const EnhancedFooterNewsletter: React.FC = () => {
  return (
    <motion.div variants={itemVariants}>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="relative overflow-hidden rounded-lg"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <NewsletterSignup 
          title="Stay Updated"
          description="Get the latest insights on digital trends and growth strategies."
          compact={true}
          className="h-full relative z-10"
        />
      </motion.div>
    </motion.div>
  );
};


