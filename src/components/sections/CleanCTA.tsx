import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { StoryReveal } from "@/components/ui/interactive-story";
import { RippleButton } from "@/components/ui/micro-interactions";

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    text: "Fast turnaround without compromising quality"
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    text: "100% satisfaction guarantee on all projects"
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-400" />,
    text: "Ongoing support and strategic partnership"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-yellow-400" />,
    text: "Transparent process and clear communication"
  }
];

export const CleanCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <StoryReveal>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-xl glass">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Presence?</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/70 mb-10 text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Let's discuss how our proven approach can help transform your business with cutting-edge digital solutions tailored to your unique needs.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {benefits.map((benefit, index) => (
                  <StoryReveal key={index} delay={0.5 + index * 0.1} direction="up">
                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="text-white/80">{benefit.text}</span>
                    </div>
                  </StoryReveal>
                ))}
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a href="mailto:hello@example.com.space">
                  <RippleButton
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:bg-white/15 w-full sm:w-auto"
                    rippleColor="rgba(255, 255, 255, 0.3)"
                  >
                    <Mail className="w-5 h-5" />
                    hello@example.com.space
                  </RippleButton>
                </a>

                <Link to="/portfolio">
                  <RippleButton
                    className="px-10 py-5 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
                    rippleColor="rgba(255, 255, 255, 0.2)"
                  >
                    View Our Work
                  </RippleButton>
                </Link>
              </motion.div>
            </div>
          </StoryReveal>
        </div>
      </div>
    </section>
  );
};

