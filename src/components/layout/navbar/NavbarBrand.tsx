import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarBrand = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        className="flex items-baseline"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-2xl font-bold text-white">
          Source
        </span>
        <span className="text-2xl font-light text-white/90">
          Seeker
        </span>
        <span className="text-blue-400 text-xl font-bold">
          .
        </span>
      </motion.div>
    </Link>
  );
};

export default NavbarBrand;

