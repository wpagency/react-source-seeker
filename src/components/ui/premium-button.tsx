
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { premiumButtonVariants, type ButtonVariantProps } from "./premium-button/button-variants";
import { ShimmerEffect } from "./premium-button/ShimmerEffect";
import { PulseEffect } from "./premium-button/PulseEffect";
import { ParticleEffects } from "./premium-button/ParticleEffects";
import { GlowEffect } from "./premium-button/GlowEffect";
import { LoadingSpinner } from "./premium-button/LoadingSpinner";
import { BorderEffect } from "./premium-button/BorderEffect";
import { MagneticField } from "./premium-button/MagneticField";

export interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean;
  isLoading?: boolean;
  glow?: boolean;
  shimmer?: boolean;
  pulse?: boolean;
  magnetic?: boolean;
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    isLoading = false,
    glow = false,
    shimmer = false,
    pulse = false,
    magnetic = false,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <motion.div
        className="relative"
        whileHover={{ 
          scale: magnetic ? 1.05 : 1.02, 
          y: magnetic ? -3 : -2 
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring", 
          stiffness: magnetic ? 500 : 400, 
          damping: magnetic ? 15 : 10 
        }}
      >
        <Comp
          className={cn(premiumButtonVariants({ variant, size, className }))}
          ref={ref}
          disabled={isLoading}
          {...props}
        >
          {isLoading && <LoadingSpinner />}
          {shimmer && <ShimmerEffect />}
          {pulse && <PulseEffect />}
          <ParticleEffects />
          <span className="relative z-10">{props.children}</span>
        </Comp>
        
        {glow && variant !== 'ghost' && <GlowEffect variant={variant} />}
        <BorderEffect />
        {magnetic && <MagneticField />}
      </motion.div>
    );
  }
);

PremiumButton.displayName = "PremiumButton";

export { PremiumButton, premiumButtonVariants };


