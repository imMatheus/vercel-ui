"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    // maybe rethink the box shadow here
    className={cn(
      "flex w-full flex-nowrap items-baseline overflow-x-auto pb-[1px] [box-shadow:0_-1px_0_var(--accents-2)_inset]",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, disabled, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    disabled={disabled}
    className={cn(
      "group pr-6 text-gray-900 last:pr-0 disabled:cursor-not-allowed data-[state=active]:text-gray-1000",
      !disabled && "hover:text-gray-1000",
      className
    )}
    {...props}
  >
    <div className="mb-[-1px] border-b-2 border-b-transparent py-3 text-sm leading-5 group-first:pl-0.5 group-data-[state=active]:border-b-gray-1000 group-data-[state=active]:text-foreground group-data-[state=active]:shadow-sm">
      {children}
    </div>
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
