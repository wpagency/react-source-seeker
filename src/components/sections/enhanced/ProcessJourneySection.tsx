import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket, BarChart, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { StoryReveal, FloatingElement } from "@/components/ui/interactive-story";
import { Card3D } from "@/components/ui/dimensional";

export const ProcessJourneySection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discovery",
      description: "We dive deep into your business goals, audience needs, and competitive landscape to create a strategic foundation.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategy",
      description: "We craft a comprehensive roadmap tailored to your objectives, with clear milestones and measurable outcomes.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Creation",
      description: "Our expert team brings your vision to life using cutting-edge technology and premium design principles.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch",
      description: "We execute a flawless deployment with comprehensive testing and optimization for peak performance.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Growth",
      description: "We continuously analyze performance data to refine and enhance your digital presence for maximum impact.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-black to-slate-950 relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <StoryReveal>
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">Our Proven Process</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span> to Digital Excellence
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We've refined our approach over 15 years to ensure exceptional results for every client. Here's how we transform your vision into reality.
            </p>
          </div>
        </StoryReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StoryReveal key={index} delay={index * 0.1}>
              <Card3D
                className="h-full"
                intensity={8}
                glare={true}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <FloatingElement distance={5} duration={3 + index * 0.5}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                      {step.icon}
                    </div>
                  </FloatingElement>
                  
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card3D>
            </StoryReveal>
          ))}
        </div>
        
        <StoryReveal delay={0.6}>
          <div className="mt-16 text-center">
            <Link to="/about">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Our Approach
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </StoryReveal>
      </div>
    </Section>
  );
};

