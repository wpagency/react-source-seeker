
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg border border-primary/20",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-white/10",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-white/20 bg-transparent hover:bg-white/5 text-foreground",
        ghost: "hover:bg-accent/10 text-foreground hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-cosmic-gradient text-white shadow-cosmic hover:shadow-glow-lg transform hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-5 py-2.5 rounded-md",
        sm: "h-9 px-3 py-2 text-xs rounded-md",
        lg: "h-12 px-8 py-3 text-base rounded-md",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


