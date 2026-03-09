
import React from "react";
import { motion } from "framer-motion";
import { Globe, Award } from "lucide-react";

export const AboutStory: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold">Our Philosophy</h2>
              </div>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  For 15 years, we've believed that the best digital solutions come from bringing 
                  together the right minds at the right time. That's why we operate as a distributed 
                  network of specialists rather than a traditional agency.
                </p>
                <p>
                  This approach allows us to handpick the perfect team for each project, drawing 
                  from our global network of designers, developers, strategists, and technologists 
                  who share our commitment to excellence.
                </p>
                <p>
                  Our work speaks for itself. Over the years, we've earned the trust of businesses 
                  across industries by consistently delivering solutions that don't just meet 
                  expectations – they exceed them.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold">Why We're Different</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">No Overhead, Maximum Value</h3>
                    <p className="text-white/70">Our distributed model eliminates traditional agency bloat while maintaining premium quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Curated Expertise</h3>
                    <p className="text-white/70">Every project gets a custom-assembled team of specialists chosen for their specific skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Proven Track Record</h3>
                    <p className="text-white/70">15 years of successful projects across industries speaks to our consistent excellence.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Strategic Partnership</h3>
                    <p className="text-white/70">We become invested partners in your success, not just another vendor.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


