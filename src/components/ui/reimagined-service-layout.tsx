
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ReimaginedServiceLayoutProps {
  // Hero Section
  title: string;
  subtitle: string;
  description: string;
  heroMetric: string;
  heroMetricLabel: string;
  icon: React.ReactNode;
  
  // Problem & Solution
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  
  // Key Benefits
  benefits: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  
  // Process Steps
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  
  // Results/Proof
  results: {
    value: string;
    label: string;
  }[];
  
  // Testimonial
  testimonial: {
    content: string;
    author: string;
    role: string;
    company: string;
  };
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

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

export const ReimaginedServiceLayout: React.FC<ReimaginedServiceLayoutProps> = ({
  title,
  subtitle,
  description,
  heroMetric,
  heroMetricLabel,
  icon,
  problemTitle,
  problemDescription,
  solutionTitle,
  solutionDescription,
  benefits,
  processSteps,
  results,
  testimonial,
  ctaTitle,
  ctaDescription,
}) => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <motion.div 
          className="max-w-7xl mx-auto px-6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {icon}
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-400 font-semibold mb-6"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            
            <motion.p 
              className="text-xl text-white/70 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-white mr-4">{heroMetric}</div>
              <div className="text-white/70">{heroMetricLabel}</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem */}
            <motion.div 
              className="bg-red-500/5 backdrop-blur-sm border border-red-500/10 rounded-2xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-white mb-6">{problemTitle}</h2>
              <p className="text-xl text-white/70 leading-relaxed">{problemDescription}</p>
            </motion.div>
            
            {/* Solution */}
            <motion.div 
              className="bg-green-500/5 backdrop-blur-sm border border-green-500/10 rounded-2xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-white mb-6">{solutionTitle}</h2>
              <p className="text-xl text-white/70 leading-relaxed">{solutionDescription}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Benefits */}
      <section className="py-24">
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center text-white mb-16"
            variants={itemVariants}
          >
            Why Choose Our Approach
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center text-white mb-16"
            variants={itemVariants}
          >
            Our Proven Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results */}
      <section className="py-24">
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center text-white mb-16"
            variants={itemVariants}
          >
            Proven Results
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-white mb-2">{result.value}</div>
                <div className="text-white/70">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl text-white/90 mb-8 leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            
            <div>
              <div className="text-xl font-semibold text-white">{testimonial.author}</div>
              <div className="text-white/70">{testimonial.role}, {testimonial.company}</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {ctaTitle}
            </h2>
            
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl border-0 group"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};


