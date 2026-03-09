import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Award, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Card3D } from "@/components/ui/dimensional";
import { StoryReveal, FloatingElement } from "@/components/ui/interactive-story";
import { ShimmerButton } from "@/components/ui/micro-interactions";

const stats = [
  {
    number: "15+",
    label: "Years Experience",
    description: "Building digital excellence",
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20 to-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    number: "500+",
    label: "Projects Completed",
    description: "Across diverse industries",
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    color: "from-green-500/20 to-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Measured by retention",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500/20 to-yellow-500/10",
    borderColor: "border-yellow-500/20"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "For all our clients",
    icon: <Award className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/10",
    borderColor: "border-purple-500/20"
  }
];

export const CleanStats: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <StoryReveal>
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/80">Proven Results</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We measure our success by the results we deliver. These numbers represent real business growth for our clients.
            </p>
          </div>
        </StoryReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StoryReveal key={stat.label} delay={index * 0.1}>
              <Card3D
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 text-center h-full"
                intensity={10}
                glare={true}
              >
                <FloatingElement distance={8} duration={4 + index * 0.5}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 ${stat.borderColor}`}>
                    {stat.icon}
                  </div>
                </FloatingElement>
                
                <motion.div
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-white/60">
                  {stat.description}
                </p>
              </Card3D>
            </StoryReveal>
          ))}
        </div>
        
        <StoryReveal delay={0.6}>
          <div className="mt-16 text-center">
            <ShimmerButton
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              shimmerColor="rgba(255, 255, 255, 0.3)"
              autoShimmer={true}
              onClick={() => window.location.href = '/case-studies'}
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </ShimmerButton>
          </div>
        </StoryReveal>
      </div>
    </section>
  );
};

