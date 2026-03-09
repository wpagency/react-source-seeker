import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Smartphone, Palette, Search, ShoppingCart, Users, ArrowRight } from "lucide-react";
import { HoverCard } from "@/components/ui/micro-interactions";
import { StoryReveal } from "@/components/ui/interactive-story";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites built with modern technology for speed, reliability, and exceptional user experience.",
    link: "/services/web-design",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences users love.",
    link: "/services/app-solutions",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and enhance brand perception.",
    link: "/services/ux-design",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce",
    description: "Complete online stores that drive sales, optimize conversions, and grow your business revenue.",
    link: "/services/ecommerce",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Marketing",
    description: "Data-driven strategies to increase visibility, attract qualified leads, and outrank competitors.",
    link: "/services/seo",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consulting",
    description: "Expert strategic guidance to help you make the right technology decisions for sustainable growth.",
    link: "/services/consulting",
    gradient: "from-teal-500 to-blue-500"
  }
];

export const StreamlinedServices: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <StoryReveal>
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">Premium Digital Solutions</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Exceptional Services
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tailored to Your Needs
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From concept to launch, we handle every aspect of your digital presence with precision and expertise.
              Each solution is custom-crafted to meet your unique business objectives.
            </p>
          </div>
        </StoryReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StoryReveal key={service.title} delay={index * 0.1}>
              <HoverCard
                className="group h-full"
                hoverScale={1.02}
                hoverY={-10}
                glowColor={`rgba(${service.gradient.includes('blue') ? '59, 130, 246' : service.gradient.includes('purple') ? '139, 92, 246' : service.gradient.includes('green') ? '34, 197, 94' : service.gradient.includes('orange') ? '249, 115, 22' : service.gradient.includes('indigo') ? '99, 102, 241' : '56, 189, 248'}, 0.3)`}
              >
                <Link
                  to={service.link}
                  className="block p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              </HoverCard>
            </StoryReveal>
          ))}
        </div>

        <StoryReveal delay={0.6}>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-blue-500/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
            >
              Explore All Services
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </div>
        </StoryReveal>
      </div>
    </section>
  );
};

