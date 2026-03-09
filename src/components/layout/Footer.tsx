
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Mail, ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "App Solutions", href: "/services/app-solutions" },
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "E-commerce", href: "/services/ecommerce" },
      { name: "UX/UI Design", href: "/services/ux-design" },
      { name: "Consulting", href: "/services/consulting" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookies Policy", href: "/cookies-policy" }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950/90 to-slate-900 border-t border-white/10 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
            
            {/* Enhanced Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link to="/" className="group inline-block">
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md opacity-50 -z-10"></div>
                  </div>
                  <div>
                    <span className="text-white font-bold text-2xl tracking-tight">
                      Source Seeker<span className="text-blue-400">.space</span>
                    </span>
                  </div>
                </motion.div>
              </Link>
              
              <p className="text-white/80 leading-relaxed mb-8 text-base max-w-md">
                Transforming ambitious visions into powerful digital realities. 
                We craft exceptional web experiences with cutting-edge technology.
              </p>
              
              {/* Enhanced Contact Info */}
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <div>hello@wpagency.xyz</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-400"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-200 flex items-center group py-1"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-200 flex items-center group py-1"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Legal
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-green-400"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-200 flex items-center group py-1"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Bottom Section */}
          <motion.div
            className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-white/60 text-sm">
                © {currentYear} Source Seeker.space. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Crafting Digital Excellence</span>
              </div>
            </div>
            
            <motion.p
              className="text-white/60 text-sm font-medium"
              animate={{
                textShadow: [
                  "0 0 5px rgba(59, 130, 246, 0.3)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 5px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Built with ♥ by{' '}
              <a href="https://wpagency.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                WP Agency
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export { Footer as FooterMain };
export default { Footer };


