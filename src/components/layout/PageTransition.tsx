
import React from "react";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageVariants } from "@/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-grow relative"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="relative z-10">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
    </LazyMotion>
  );
};

export default PageTransition;


