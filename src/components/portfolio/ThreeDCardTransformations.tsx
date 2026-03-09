
import React from "react";
import { motion } from "framer-motion";

interface TransformationItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ThreeDCardTransformationsProps {
  items: TransformationItem[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const ThreeDCardTransformations: React.FC<ThreeDCardTransformationsProps> = ({
  items
}) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            rotateX: 5,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors duration-300">
              {item.title}
            </h3>
            
            <div className="text-white/80">
              {item.content}
            </div>
          </div>
          
          {/* 3D depth effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  );
};


