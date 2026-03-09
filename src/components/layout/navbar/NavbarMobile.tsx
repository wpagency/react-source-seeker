import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "./navData";

interface NavbarMobileProps {
  isOpen: boolean;
  activeDropdown: string | null;
  onDropdownToggle: (label: string) => void;
  onClose: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isOpen,
  activeDropdown,
  onDropdownToggle,
  onClose
}) => {
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="py-4 space-y-2 px-4">
            {navLinks.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-0 py-3 text-white/80 hover:text-white transition-colors"
                      onClick={() => onDropdownToggle(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="pl-4 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center justify-between py-2 text-white/70 hover:text-white transition-colors"
                              onClick={onClose}
                            >
                              <span>{child.name}</span>
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 text-white/80 hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10">
              <a href="mailto:hello@example.com.space" className="flex items-center gap-2 py-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                hello@example.com.space
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;

