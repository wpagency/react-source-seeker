
import { Variants } from "framer-motion";

// Core animation variants for consistent experience
export const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 60,
    scale: 0.98
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -60,
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideInLeft: Variants = {
  initial: { 
    opacity: 0, 
    x: -40 
  },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 40 
  },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      duration: 0.4 
    }
  }
};

// Enhanced hover animations
export const hoverLift = {
  scale: 1.02,
  y: -5,
  transition: { 
    duration: 0.2, 
    ease: [0.22, 1, 0.36, 1]
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: { 
    duration: 0.2, 
    ease: [0.22, 1, 0.36, 1]
  }
};

export const magneticHover = {
  scale: 1.1,
  transition: { 
    duration: 0.3,
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};


