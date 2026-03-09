
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, TrendingUp } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience."
  },
  {
    id: 2,
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that engage users and drive conversions."
  },
  {
    id: 3,
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    id: 4,
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Strategy",
    description: "Strategic planning and consulting to maximize your digital presence and growth."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const PortfolioServiceCards: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


