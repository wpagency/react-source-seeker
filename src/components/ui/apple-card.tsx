
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AppleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  hover?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  intensity?: "light" | "medium" | "strong";
  gradient?: boolean;
}

export const AppleCard = ({ 
  children, 
  className = "",
  hover = false,
  interactive = false,
  intensity = "medium",
  gradient = true,
  onClick,
  ...props
}: AppleCardProps) => {
  // Map intensity to opacity values
  const intensityMap = {
    light: "opacity-5",
    medium: "opacity-10",
    strong: "opacity-20"
  };
  
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden backdrop-blur-md bg-secondary/20 border border-white/10 p-6 transition-all duration-300",
        hover && "hover:shadow-glow hover:scale-[1.02]",
        interactive && "cursor-pointer",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {gradient && (
        <div className={cn(
          "absolute -inset-1 bg-cosmic-gradient blur-xl group-hover:opacity-20 transition-opacity duration-300", 
          intensityMap[intensity]
        )}></div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Create a motion version of AppleCard that can be used with motion props
export const MotionAppleCard = motion(AppleCard as React.FC<AppleCardProps>);

export default AppleCard;


