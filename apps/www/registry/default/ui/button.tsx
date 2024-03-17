import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva("transition-colors font-medium", {
  variants: {
    variant: {
      default: "bg-gray-1000 text-background-100 hover:bg-gray-1000/90",
      error: "bg-red-800 hover:bg-destructive/90",
      warning: "bg-amber-800 text-destructive-foreground hover:bg-amber-800/90",
      outline:
        "border border-input bg-background-200 hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      sm: "h-8 px-3 rounded-md text-sm",
      small: "h-8 px-3 rounded-md text-sm",
      md: "h-10 px-4 rounded-md text-sm",
      medium: "h-10 px-4 rounded-md text-sm",
      lg: "h-12 px-5 rounded-lg text-base",
      large: "h-12 px-5 rounded-lg text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
