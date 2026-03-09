import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NavbarBrand from "./NavbarBrand";
import NavbarDesktop from "./NavbarDesktop";
import NavbarCTAButton from "./NavbarCTAButton";
import NavbarToggle from "./NavbarToggle";
import NavbarMobile from "./NavbarMobile";

const UnifiedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      )}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Add a thin line at the bottom that's always present but only visible when scrolled */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-px bg-white/10 transition-opacity duration-300",
        isScrolled ? "opacity-100" : "opacity-0"
      )} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <NavbarBrand />
          
          <NavbarDesktop 
            activeDropdown={activeDropdown}
            onDropdownToggle={handleDropdownToggle}
          />

          <NavbarCTAButton />

          <NavbarToggle 
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
          />
        </div>

        <NavbarMobile 
          isOpen={isOpen}
          activeDropdown={activeDropdown}
          onDropdownToggle={handleDropdownToggle}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </motion.nav>
  );
};

export default UnifiedNavbar;

