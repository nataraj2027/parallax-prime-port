import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cyberButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        neon: "btn-neon-cyan text-space-black font-semibold",
        purple: "btn-neon-purple text-space-black font-semibold",
        ghost: "glass-card text-foreground hover:bg-space-medium border border-space-light hover:border-neon-cyan",
        outline: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-space-black hover:shadow-neon-cyan",
        glass: "glass-card text-foreground hover:bg-gradient-primary hover:text-space-black"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
    },
  }
)

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(cyberButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CyberButton.displayName = "CyberButton"

export { CyberButton, cyberButtonVariants }