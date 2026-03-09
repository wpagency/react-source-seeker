
import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const AboutHero: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-300/30 mb-6">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">15 Years of Digital Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h1>
          
          <p className="text-xl text-white/80 leading-relaxed">
            We're not just another agency. We're a collective of passionate digital specialists 
            who have been transforming ambitious visions into powerful realities for over a decade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};


