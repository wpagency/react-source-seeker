import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Monitor, 
  Search, 
  ShoppingCart, 
  Palette, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentHead } from "@/components/DocumentHead";
import UnifiedNavbar from "@/components/layout/navbar/UnifiedNavbar";
import { Footer } from "@/components/layout/Footer";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design",
      description: "Beautiful, conversion-focused websites that captivate your audience and drive results.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Ready", "User Experience Focus"],
      href: "/services/web-design",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "App Solutions",
      description: "Custom web and mobile applications tailored to your business needs.",
      features: ["Custom Development", "API Integration", "Scalable Architecture", "Ongoing Support"],
      href: "/services/app-solutions",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic to your website.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Performance Tracking"],
      href: "/services/seo",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Complete online store solutions that convert visitors into customers.",
      features: ["Payment Integration", "Inventory Management", "Mobile Commerce", "Analytics"],
      href: "/services/ecommerce",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "User experiences that delight and interfaces that convert.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      href: "/services/ux-design",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Consulting",
      description: "Strategic digital guidance to accelerate your business growth.",
      features: ["Digital Strategy", "Technology Audit", "Growth Planning", "Team Training"],
      href: "/services/consulting",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

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

  return (
    <>
      <DocumentHead 
        title="Our Services"
        description="Comprehensive digital solutions including web design, app development, SEO, e-commerce, UX/UI design, and consulting services."
        keywords="web design, app development, SEO, e-commerce, UX design, digital consulting, Source Seeker"
        ogTitle="Digital Services | Source Seeker.space"
        ogDescription="Transform your digital presence with our comprehensive suite of services designed to drive growth and success."
        structuredData={{
          "@type": "Service",
          "name": "Digital Agency Services",
          "provider": {
            "@type": "Organization",
            "name": "Source Seeker.space"
          },
          "serviceType": ["Web Design", "App Development", "SEO", "E-commerce", "UX Design", "Consulting"]
        }}
      />
      
      <div className="min-h-screen bg-slate-950">
        <UnifiedNavbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
          
          <motion.div 
            className="max-w-7xl mx-auto px-6 relative z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Our Services
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto"
                variants={itemVariants}
              >
                We provide comprehensive digital solutions that transform your business and accelerate growth. 
                From beautiful websites to powerful applications, we've got you covered.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-16"
                variants={itemVariants}
              >
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-white">Award-Winning Design</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-white">100% Satisfaction</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                  <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-white">Fast Delivery</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 shadow-xl"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/60">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.href}>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                Our team is ready to bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl border-0 group"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link to="/case-studies">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;


