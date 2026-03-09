
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface EnhancedFooterLinksSectionProps {
  title: string;
  links: Array<{ name: string; href: string }>;
  colorGradient: string;
  hoverColor: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const EnhancedFooterLinksSection: React.FC<EnhancedFooterLinksSectionProps> = ({
  title,
  links,
  colorGradient,
  hoverColor
}) => {
  return (
    <motion.div variants={itemVariants}>
      <motion.h3 
        className="text-white font-semibold text-xl mb-6 relative"
        whileHover={{ x: 8, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {title}
        <motion.div
          className={`absolute -bottom-2 left-0 h-0.5 ${colorGradient} origin-left`}
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          whileHover={{ width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li 
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link 
              to={link.href}
              className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center group relative overflow-hidden"
            >
              <motion.span 
                className="group-hover:translate-x-2 transition-transform duration-200 relative z-10"
                whileHover={{ 
                  color: hoverColor,
                  textShadow: `0 0 8px ${hoverColor}30`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.span>
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-${hoverColor.replace('rgba(', '').replace(')', '').split(',')[0]}-500/5 to-transparent`}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                whileHover={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className={`w-4 h-4 ml-2 text-${hoverColor.includes('blue') ? 'blue' : hoverColor.includes('purple') ? 'purple' : 'pink'}-400`} />
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};


