
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Sparkles } from "lucide-react";

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

export const EnhancedFooterBrand: React.FC = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="lg:col-span-1"
    >
      <Link to="/" className="inline-block mb-6 group">
        <motion.div 
          className="flex items-baseline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span 
            className="text-3xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors"
            whileHover={{ 
              textShadow: "0 0 20px rgba(96, 165, 250, 0.5)" 
            }}
          >
            WP
          </motion.span>
          <motion.span 
            className="text-3xl font-light text-white/90 tracking-tight group-hover:text-blue-200 transition-colors"
            whileHover={{ 
              textShadow: "0 0 15px rgba(191, 219, 254, 0.3)" 
            }}
          >
            Agency
          </motion.span>
          <motion.span 
            className="text-blue-400 text-2xl font-bold ml-1 group-hover:text-blue-300 transition-colors"
            whileHover={{ 
              textShadow: "0 0 25px rgba(96, 165, 250, 0.7)",
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 0.3 }}
          >
            .xyz
          </motion.span>
          <motion.div
            className="ml-2"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        </motion.div>
      </Link>
      
      <motion.p 
        className="text-white/70 leading-relaxed mb-8 text-lg"
        whileHover={{ 
          color: "rgba(255, 255, 255, 0.85)",
          x: 5
        }}
        transition={{ duration: 0.3 }}
      >
        Crafting digital experiences that drive growth and deliver exceptional results for businesses worldwide.
      </motion.p>
      
      {/* Enhanced Contact Info */}
      <div className="space-y-4 mb-8">
        <motion.a 
          href="mailto:hello@example.com.space"
          className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group relative overflow-hidden"
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all relative overflow-hidden"
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, 5, -5, 0],
              boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          <div>
            <motion.div 
              className="text-xs text-white/50 group-hover:text-white/70 transition-colors"
              whileHover={{ y: -1 }}
            >
              New Projects
            </motion.div>
            <motion.span 
              className="group-hover:text-blue-300 transition-colors"
              whileHover={{ 
                textShadow: "0 0 10px rgba(96, 165, 250, 0.4)" 
              }}
            >
              hello@example.com.space
            </motion.span>
          </div>
        </motion.a>
        
        <motion.a 
          href="mailto:support@yourhandle.space"
          className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group relative overflow-hidden"
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-all relative overflow-hidden"
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, -5, 5, 0],
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-5 h-5 text-blue-400 group-hover:text-purple-300 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          <div>
            <motion.div 
              className="text-xs text-white/50 group-hover:text-white/70 transition-colors"
              whileHover={{ y: -1 }}
            >
              Help & Support
            </motion.div>
            <motion.span 
              className="group-hover:text-purple-300 transition-colors"
              whileHover={{ 
                textShadow: "0 0 10px rgba(168, 85, 247, 0.4)" 
              }}
            >
              support@yourhandle.space
            </motion.span>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};


