"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const CollapseGroup = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  { children: React.ReactNode }
>(({ children }, ref) => (
  <AccordionPrimitive.Root ref={ref} className="w-full" type="single">
    {children}
  </AccordionPrimitive.Root>
))
CollapseGroup.displayName = "CollapseGroup"

const Collapse = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    title: string
  }
>(({ className, title, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  >
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-6 text-2xl font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
      >
        {title}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    {/* <AccordionPrimitive.Content className="overflow-hidden text-sm transition-[height]"> */}
    <AccordionPrimitive.Content className="mb-4 overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      {props.children}
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
))
Collapse.displayName = "Collapse"

export { CollapseGroup, Collapse }
