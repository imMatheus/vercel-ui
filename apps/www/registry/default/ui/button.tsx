import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { Spinner } from "./spinner"

const buttonVariants = cva(
  "transition-colors select-none font-medium border border-transparent flex justify-center items-center gap-0.5 max-w-full disabled:bg-gray-100 disabled:text-gray-700 disabled:border-gray-400 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        // Vercel has some of these hard coded values in the specs, not sure why tbh. Could be worth looking at some point
        default: "bg-gray-1000 text-background-100 hover:bg-[#ccc]",
        secondary:
          "bg-background-100 border-gray-alpha-400 text-gray-1000 hover:bg-gray-alpha-200",
        tertiary:
          "bg-transparent border-transparent text-gray-1000 hover:bg-gray-alpha-200",
        error:
          "bg-red-800 border-red-800 hover:bg-red-900 hover:border-red-900",
        warning:
          "text-[#0a0a0a] bg-amber-800 border-amber-800 hover:bg-[#d27504] hover:border-[#d27504",
      },
      size: {
        tiny: "h-6 px-0.5 rounded-[4px] text-xs leading-4",
        sm: "h-8 px-1.5 rounded-md text-sm leading-5",
        small: "h-8 px-1.5 rounded-md text-sm leading-5",
        medium: "h-10 px-2.5 rounded-md text-sm leading-5",
        md: "h-10 px-2.5 rounded-md text-sm leading-5",
        large: "h-12 px-[14px] rounded-lg text-base leading-6",
        lg: "h-12 px-[14px] rounded-lg text-base leading-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "prefix">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  shape?: "square" | "circle" | "rounded"
  svgOnly?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  shadow?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      shape,
      svgOnly,
      prefix,
      suffix,
      shadow,
      loading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          (shape === "square" || shape === "circle") &&
            "aspect-square h-[unset]",
          (shape === "rounded" || shape === "circle") && "rounded-full",
          svgOnly && "aspect-square",
          shadow && "shadow-sm",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <Spinner size={size === "large" ? 24 : 16} /> : prefix}
        <span className="text-ellipsis px-1.5">{children}</span>
        {loading ? null : suffix}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
