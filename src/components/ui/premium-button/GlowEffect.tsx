
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonVariantProps } from "./button-variants";

interface GlowEffectProps {
  variant?: ButtonVariantProps['variant'];
}

export const GlowEffect = ({ variant }: GlowEffectProps) => (
  <motion.div
    className={cn(
      "absolute -inset-[3px] rounded-lg opacity-0 blur-xl -z-10",
      variant === 'primary' ? "bg-primary/50" : 
      variant === 'gradient' ? "bg-gradient-to-r from-blue-600/50 to-purple-600/50" : 
      variant === 'cosmic' ? "bg-gradient-to-r from-cyan-600/50 to-blue-600/50" :
      variant === 'stellar' ? "bg-gradient-to-r from-purple-600/50 to-pink-600/50" :
      "bg-white/20"
    )}
    initial={{ opacity: 0 }}
    whileHover={{ 
      opacity: 0.9,
      scale: 1.08,
    }}
    transition={{ duration: 0.3 }}
  />
);


