import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { StoryReveal } from "@/components/ui/interactive-story";

export const BlogHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-36 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />
      
      {/* Add a top border that matches the navbar bottom border for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10 opacity-0" />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 6,
          }}
        />
      ))}

      <StoryReveal>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Insights &
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">
              Resources
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert insights on web development, digital marketing, and growth strategies that actually work.
          </p>
        </div>
      </StoryReveal>
    </section>
  );
};

