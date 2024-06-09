"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

type Size = "medium" | "large"

const Toggle = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    size?: Size
  }
>(({ className, size = "medium", ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "focus-visible:ring-offset-background peer inline-flex shrink-0 cursor-pointer items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      {
        "h-[14px] w-[28px]": size === "medium",
        "h-[24px] w-[40px]": size === "large",
      },
      props.disabled
        ? "disabled:cursor-not-allowed disabled:border-accents-2 disabled:bg-accents-1"
        : "border-gray-alpha-400 data-[state=checked]:bg-success data-[state=unchecked]:bg-gray-100",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block rounded-full shadow-md ring-0 transition-transform data-[state=unchecked]:translate-x-0",
        {
          "h-[12px] w-[12px] data-[state=checked]:translate-x-[14px]":
            size === "medium",
          "h-[22px] w-[22px] data-[state=checked]:translate-x-[16px]":
            size === "large",
        },
        props.disabled
          ? "bg-gray-200"
          : "data-[state=checked]:bg-gray-1000 data-[state=unchecked]:bg-gray-700"
      )}
    />
  </SwitchPrimitives.Root>
))
Toggle.displayName = SwitchPrimitives.Root.displayName

export { Toggle }
