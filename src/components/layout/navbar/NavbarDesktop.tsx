
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "./navData";

interface NavbarDesktopProps {
  activeDropdown: string | null;
  onDropdownToggle: (label: string) => void;
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ 
  activeDropdown, 
  onDropdownToggle 
}) => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex items-center space-x-8">
      {navLinks.map((item) => (
        <div key={item.name} className="relative group">
          {item.dropdown ? (
            <>
              <button
                className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors py-2"
                onClick={() => onDropdownToggle(item.name)}
              >
                <span>{item.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdown.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => onDropdownToggle("")}
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
              className={cn(
                "text-white/80 hover:text-white transition-colors relative",
                location.pathname === item.href && "text-white"
              )}
            >
              {item.name}
              {location.pathname === item.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarDesktop;


