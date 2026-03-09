
import { cva, type VariantProps } from "class-variance-authority";

export const premiumButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-3 px-8 py-3 rounded-md font-medium text-white overflow-hidden transition-all group",
  {
    variants: {
      variant: {
        primary: "bg-primary/90 z-0 shadow-md hover:shadow-lg border border-primary/20",
        gradient: "bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg border border-white/10",
        outlined: "border border-white/20 bg-white/5 hover:bg-white/10",
        nebula: "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:shadow-lg border border-white/10",
        ghost: "bg-transparent hover:bg-white/5",
        cosmic: "bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md hover:shadow-lg border border-white/10",
        stellar: "bg-gradient-to-r from-purple-600 to-pink-600 shadow-md hover:shadow-lg border border-white/10",
      },
      size: {
        xs: "text-xs py-1.5 px-3 rounded-md",
        sm: "text-sm py-2.5 px-5 rounded-md",
        default: "text-base py-3.5 px-7 rounded-md",
        lg: "text-lg py-4 px-8 rounded-md",
        xl: "text-xl py-5 px-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof premiumButtonVariants>;


