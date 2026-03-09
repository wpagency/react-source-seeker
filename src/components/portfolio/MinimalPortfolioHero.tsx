
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const MinimalPortfolioHero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-slate-950">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" />
      
      <motion.div 
        className="max-w-6xl mx-auto px-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tight cursor-pointer"
            variants={itemVariants}
            whileHover={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.5)",
                "0 0 40px rgba(255, 255, 255, 0.8)",
                "0 0 60px rgba(255, 255, 255, 0.6)"
              ],
              transition: { duration: 0.3 }
            }}
          >
            Our Work
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-white/70 mb-20 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Crafting digital experiences that transform businesses and captivate audiences
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};


