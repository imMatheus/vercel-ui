import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "border flex border-gray-alpha-400 overflow-hidden bg-background-100 relative focus-within:shadow-input-ring transition-shadow duration-150",
  {
    variants: {
      size: {
        small: "h-8 text-sm rounded-md [--icon-size:14px]",
        medium: "h-10 text-sm rounded-md [--icon-size:16px]",
        large: "h-12 text-base rounded-lg [--icon-size:18px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
    VariantProps<typeof inputVariants> {
  prefix?: string | React.ReactNode
  suffix?: string | React.ReactNode
  prefixStyling?: boolean
}

const TextBox = ({
  prefixStyling,
  children,
}: {
  prefixStyling: boolean
  children: React.ReactNode
}) => {
  return (
    <span
      className={cn(
        "[&>svg]:h-[var(--icon-size)] text-gray-700 [&>svg]:w-[var(--icon-size)] px-3 shrink-0 flex items-center",
        prefixStyling && " bg-background-200"
      )}
    >
      {children}
    </span>
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, suffix, prefix, size, prefixStyling = true, ...props },
    ref
  ) => {
    return (
      <div className={cn(inputVariants({ size, className }))}>
        {prefix && <TextBox prefixStyling={prefixStyling}>{prefix}</TextBox>}
        <input
          type={type}
          className={cn(
            "bg-transparent placeholder:text-gray-700 outline-none",
            ((prefix && prefixStyling) || !prefix) && "pl-3",
            ((suffix && prefixStyling) || !suffix) && "pr-3"
          )}
          ref={ref}
          {...props}
        />
        {suffix && <TextBox prefixStyling={prefixStyling}>{suffix}</TextBox>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
