
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  divider?: boolean;
  spacing?: "small" | "medium" | "large";
}

export const Section = ({
  children,
  className,
  container = true,
  divider = false,
  spacing = "medium",
  ...props
}: SectionProps) => {
  // Mapping for different spacing options
  const spacingClasses = {
    small: "py-12 md:py-16",
    medium: "py-16 md:py-24 lg:py-32",
    large: "py-20 md:py-32 lg:py-40",
  };

  return (
    <section
      className={cn(
        "relative",
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {divider && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      )}
      
      {container ? (
        <div className="container mx-auto px-6 md:px-8 lg:px-10 relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
      
      {divider && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
      )}
    </section>
  );
};


