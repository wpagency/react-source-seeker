import React from "react";
import { Mail } from "lucide-react";

const NavbarCTAButton = () => {
  return (
    <div className="hidden lg:block">
      <a href="mailto:hello@example.com.space" className="flex items-center gap-2 px-4 py-2 text-white hover:text-blue-300 transition-colors">
        <Mail className="w-4 h-4" />
        <span>hello@example.com.space</span>
      </a>
    </div>
  );
};

export default NavbarCTAButton;

