
import React from "react";
import { motion } from "framer-motion";
import { EnhancedFooterBackground } from "./enhanced/EnhancedFooterBackground";
import { EnhancedFooterBrand } from "./enhanced/EnhancedFooterBrand";
import { EnhancedFooterLinksSection } from "./enhanced/EnhancedFooterLinksSection";
import { EnhancedFooterNewsletter } from "./enhanced/EnhancedFooterNewsletter";
import { EnhancedFooterBottom } from "./enhanced/EnhancedFooterBottom";
import { footerSections } from "./enhanced/footerData";

const EnhancedFooter = () => {
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

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900 border-t border-white/10 overflow-hidden">
      <EnhancedFooterBackground />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            <EnhancedFooterBrand />

            <EnhancedFooterLinksSection
              title="Services"
              links={footerSections.services}
              colorGradient="bg-gradient-to-r from-blue-400 to-purple-400"
              hoverColor="rgba(96, 165, 250, 1)"
            />

            <EnhancedFooterLinksSection
              title="Company"
              links={footerSections.company}
              colorGradient="bg-gradient-to-r from-purple-400 to-pink-400"
              hoverColor="rgba(168, 85, 247, 1)"
            />

            <EnhancedFooterNewsletter />
          </motion.div>

          <EnhancedFooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;


