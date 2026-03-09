
import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Zap, Shield } from "lucide-react";
import { Section } from "@/components/ui/section";

const values = [
  {
    icon: <Heart className="w-8 h-8 text-green-400" />,
    title: "People First",
    description: "Every project starts with understanding your customers and their needs. We create experiences that genuinely connect."
  },
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: "Results That Matter",
    description: "Beautiful designs are just the beginning. We focus on metrics that impact your bottom line and business growth."
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: "Move Fast, Think Deep",
    description: "Quick execution backed by strategic thinking. We deliver fast without cutting corners on quality."
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
    title: "Built to Last",
    description: "We create solutions that scale with your business and stand the test of time."
  }
];

export const AboutValues = () => {
  return (
    <Section className="bg-gradient-to-b from-slate-900 to-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Drives Us
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          These aren't just words on a wall. They're the principles that guide every project, every decision, every line of code.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {value.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {value.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};


