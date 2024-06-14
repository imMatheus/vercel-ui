import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const errorVariants = cva("p-3 rounded-md bg-red-500", {
  variants: {
    size: {
      small: "",
      medium: "",
      large: "",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface ErrorProps extends VariantProps<typeof errorVariants> {}

const Error: React.FC<ErrorProps> = ({ size = "medium" }) => {
  return <div className={cn(errorVariants({ size }))}>error lool</div>
}

export { Error }
