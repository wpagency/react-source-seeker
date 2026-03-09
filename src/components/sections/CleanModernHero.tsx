import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const CleanModernHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Spring animations for smooth mouse following
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
      mouseX.set((x - 0.5) * 20);
      mouseY.set((y - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    >
      {/* Add a top border that matches the navbar bottom border for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10 opacity-0" />
      
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient layers */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                rgba(59, 130, 246, 0.15) 0%, 
                rgba(147, 51, 234, 0.1) 40%,
                transparent 70%),
              radial-gradient(600px circle at ${(1 - mousePosition.x) * 100}% ${(1 - mousePosition.y) * 100}%, 
                rgba(236, 72, 153, 0.1) 0%, 
                rgba(59, 130, 246, 0.05) 50%,
                transparent 80%)
            `,
            y: y3
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 border border-blue-500/20 rounded-full"
          style={{ y: y2 }}
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/5 w-48 h-48 border border-purple-500/20 rounded-2xl rotate-45"
          style={{ y: y1 }}
          animate={{ 
            rotate: [45, 405],
            y: [0, -30, 0],
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Premium particle system */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Enhanced grid with animation */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
          style={{ y: y3 }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-32 md:mt-16"
        style={{ y: y2, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforming<br />
            Ideas Into<br />
            Reality
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We turn ambitious visions into powerful digital realities. From startups to enterprises, we craft exceptional web experiences with cutting-edge technology.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

