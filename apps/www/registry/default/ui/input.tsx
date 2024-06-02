import { forwardRef, useId } from "react"
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
  suffixStyling?: boolean
  label?: string
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
        "text-gray-700 [&>svg]:h-[var(--icon-size)] [&>svg]:w-[var(--icon-size)] px-3 shrink-0 flex items-center",
        prefixStyling && "bg-background-200"
      )}
    >
      {children}
    </span>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size,
      label,
      suffix,
      prefix,
      prefixStyling = true,
      suffixStyling = true,
      ...props
    },
    ref
  ) => {
    const id = useId()

    const input = (
      <div className={cn(inputVariants({ size, className }))}>
        {prefix && (
          <span
            className={cn(
              "text-gray-700 [&>svg]:h-[var(--icon-size)] [&>svg]:w-[var(--icon-size)] px-3 shrink-0 flex items-center",
              prefixStyling && "bg-background-200"
            )}
          >
            {prefix}
          </span>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            "bg-transparent placeholder:text-gray-700 outline-none disabled:bg-background-200 disabled:text-gray-700 disabled:placeholder:text-gray-500 disabled:cursor-not-allowed",
            ((prefix && prefixStyling) || !prefix) && "pl-3",
            ((suffix && suffixStyling) || !suffix) && "pr-3"
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <span
            className={cn(
              "text-gray-700 [&>svg]:h-[var(--icon-size)] [&>svg]:w-[var(--icon-size)] px-3 shrink-0 flex items-center",
              suffixStyling && "bg-background-200"
            )}
          >
            {suffix}
          </span>
        )}
      </div>
    )

    if (!label) return input

    return (
      <label htmlFor={id}>
        <div className="mb-2 text-xs text-gray-900">{label}</div>
        {input}
      </label>
    )
  }
)
Input.displayName = "Input"

export { Input }
