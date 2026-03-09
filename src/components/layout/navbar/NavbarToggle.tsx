
import React from "react";
import { Menu, X } from "lucide-react";

interface NavbarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const NavbarToggle: React.FC<NavbarToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors"
      onClick={onToggle}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export default NavbarToggle;


