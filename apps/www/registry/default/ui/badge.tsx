import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full capitalize whitespace-nowrap",
  {
    variants: {
      variant: {
        gray: "bg-gray-700 text-white",
        "gray-subtle": "bg-gray-200 text-gray-1000",
        blue: "bg-blue-700 text-white",
        "blue-subtle": "bg-blue-200 text-blue-900",
        purple: "bg-purple-700 text-white",
        "purple-subtle": "bg-purple-200 text-purple-900",
        amber: "bg-amber-700 text-black",
        "amber-subtle": "bg-amber-200 text-amber-900",
        red: "bg-red-700 text-white",
        "red-subtle": "bg-red-200 text-red-900",
        pink: "bg-pink-700 text-white",
        "pink-subtle": "bg-pink-300 text-pink-900",
        green: "bg-green-700 text-white",
        "green-subtle": "bg-green-200 text-green-900",
        teal: "bg-teal-700 text-white",
        "teal-subtle": "bg-teal-300 text-teal-900",
        // TODO revisit this pink color
        trial: "bg-gradient-to-br from-blue-700 to-[#f81be6] text-white",
        turbo: "bg-gradient-to-br from-[#ff1e56] to-[#0096ff] text-white",
      },
      size: {
        sm: "px-1.5 h-5 text-[11px] gap-0.5 [&_svg]:w-[11px] [&_svg]:h-[11px]",
        md: "px-2.5 h-6 text-xs gap-1 [&_svg]:w-[14px] [&_svg]:h-[14px]",
        lg: "px-3 h-8 text-sm gap-1.5 [&_svg]:w-4 [&_svg]:h-4",
      },
    },
    defaultVariants: {
      variant: "gray",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
}

// TODO add icons
function Badge({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
