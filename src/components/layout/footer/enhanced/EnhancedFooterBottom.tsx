
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { footerSections } from "./footerData";

export const EnhancedFooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-4"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <motion.p 
          className="text-white/60 text-sm hover:text-white/80 transition-colors"
          whileHover={{ 
            y: -1,
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
          }}
        >
          © {currentYear} Source Seeker.space. All rights reserved. Crafted with passion for digital excellence.
        </motion.p>
        
        <div className="flex items-center gap-2 text-white/40 text-xs">
          <motion.div 
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 0 rgba(34, 197, 94, 0)",
                "0 0 10px rgba(34, 197, 94, 0.5)",
                "0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            aria-hidden="true"
          />
          <motion.span
            whileHover={{ 
              color: "rgba(255, 255, 255, 0.7)",
              x: 2
            }}
            transition={{ duration: 0.3 }}
          >
            Crafting Digital Excellence
          </motion.span>
        </div>
      </motion.div>
      
      <div className="flex space-x-6">
        {footerSections.legal.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              to={link.href}
              className="text-white/60 hover:text-white text-sm transition-colors duration-200 relative group"
            >
              <motion.span
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {link.name}
              </motion.span>
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
              <motion.div
                className="absolute inset-0 bg-white/5 rounded opacity-0"
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


