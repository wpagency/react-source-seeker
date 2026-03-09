
import React from "react";
import { motion } from "framer-motion";

export const AboutCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-12">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Ready to Experience the Difference?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Let's discuss how our proven approach and global network of specialists 
          can transform your digital presence and accelerate your business growth.
        </p>
        
        <motion.a
          href="mailto:hello@example.com.space?subject=Project%20Inquiry"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Your Project
        </motion.a>
      </div>
    </motion.div>
  );
};


