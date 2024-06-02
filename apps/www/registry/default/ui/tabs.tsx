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
      "flex flex-nowrap w-full items-baseline overflow-x-auto pb-[1px] [box-shadow:0_-1px_0_var(--accents-2)_inset]",
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
      "group pr-6 last:pr-0 text-gray-900 data-[state=active]:text-gray-1000 disabled:cursor-not-allowed",
      !disabled && "hover:text-gray-1000",
      className
    )}
    {...props}
  >
    <div className="border-b-2 leading-5 mb-[-1px] py-3 text-sm group-first:pl-0.5 border-b-transparent group-data-[state=active]:border-b-gray-1000 group-data-[state=active]:text-foreground group-data-[state=active]:shadow-sm">
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
