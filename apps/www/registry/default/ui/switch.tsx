"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root>
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "rounded-md bg-background-100 p-1 [box-shadow:0_0_0_1px_var(--ds-gray-alpha-100)]",
        className
      )}
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
      "flex-1 cursor-pointer rounded-sm px-3 text-sm text-gray-900 transition-colors disabled:cursor-not-allowed data-[state=active]:bg-gray-100 data-[state=active]:text-gray-1000",
      !disabled && "hover:text-gray-1000",
      className
    )}
    {...props}
  >
    {label}
  </TabsPrimitive.Trigger>
))
SwitchControl.displayName = TabsPrimitive.Trigger.displayName

export { Switch, SwitchControl }
