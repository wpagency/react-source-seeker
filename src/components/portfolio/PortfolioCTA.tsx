
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

export const PortfolioCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your project could be our next featured success story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl border-0 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/case-studies">
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Detailed Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};


