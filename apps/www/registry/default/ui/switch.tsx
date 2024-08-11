"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "flex group bg-background-100 p-1 [box-shadow:0_0_0_1px_var(--ds-gray-alpha-400)]",
  {
    variants: {
      size: {
        small: "h-8 rounded-md",
        medium: "h-10 rounded-md",
        large: "h-12 rounded-lg",
      },
    },
  }
)

const Switch = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof switchVariants>
>(({ className, size = "medium", ...props }, ref) => (
  <TabsPrimitive.Root defaultValue="list">
    <TabsPrimitive.List
      ref={ref}
      className={switchVariants({ size, className })}
      data-size={size}
      {...props}
    />
  </TabsPrimitive.Root>
))
Switch.displayName = "Switch"

const SwitchControl = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    label: string
  }
>(({ className, label, disabled, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    disabled={disabled}
    className={cn(
      "flex-1 cursor-pointer text-gray-900 transition-colors disabled:cursor-not-allowed data-[state=active]:bg-gray-100 data-[state=active]:text-gray-1000",
      !disabled && "hover:text-gray-1000",
      "group-data-[size=small]:rounded-sm group-data-[size=small]:px-3 group-data-[size=small]:text-sm",
      "group-data-[size=medium]:rounded-sm group-data-[size=medium]:px-3 group-data-[size=medium]:text-sm",
      "group-data-[size=large]:rounded-[4px] group-data-[size=large]:px-4 group-data-[size=large]:text-base",
      className
    )}
    {...props}
  >
    {label}
  </TabsPrimitive.Trigger>
))
SwitchControl.displayName = TabsPrimitive.Trigger.displayName

export { Switch, SwitchControl }
