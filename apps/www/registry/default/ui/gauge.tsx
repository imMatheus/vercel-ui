import React from "react"

import { cn } from "@/lib/utils"

interface GaugeProps {
  size: "tiny" | "small" | "medium" | "large"
  value: number
}

const Gauge: React.FC<GaugeProps> = ({ size, value }) => {
  const circleSize = 100

  return (
    <div
      className="flex justify-center items-center relative"
      style={{
        // @ts-ignore
        "--circle-size": `${circleSize}px`,
        "--circumference": `${282}px`,
        "--percent-to-px": `${2.82}px`,
        "--gap-percent": `${5}`,
        "--offset-factor": `${0}`,
      }}
    >
      <svg
        fill="none"
        height="128"
        stroke-width="2"
        viewBox="0 0 100 100"
        width="128"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke-width="10"
          stroke-dashoffset="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={cn(
            "stroke-gray-alpha-400 transition-all duration-1000 ease-in-out",
            "[stroke-dasharray:calc(var(--stroke-percent)_*_var(--percent-to-px))_var(--circumference)]",
            "[transition-property:stroke-dasharray,tranform]",
            "[transform:rotate(calc(1turn_-_90deg_-(var(--gap-percent)_*_var(--percent-to-deg)_*_var(--offset-factor-secondary))))_scaleY(-1)]",
            "[transform-origin:calc(var(--circle-size)_/_2)_calc(var(--circle-size)_/_2)]"
          )}
          style={{
            opacity: 1,
            // @ts-ignore
            "--stroke-percent": 40,
            "--percent-to-deg": "3.6deg",
            "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
          }}
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke-width="10"
          stroke-dashoffset="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-geist-progress-circle-fg=""
          className={cn(
            "stroke-amber-700 transition-all duration-1000 ease-in-out",
            "[stroke-dasharray:calc(var(--stroke-percent)_*_var(--percent-to-px))_var(--circumference)]",
            "[transition-property:stroke-dasharray,tranform]",
            "[transform:rotate(calc(-90deg_+_var(--gap-percent)_*_var(--offset-factor)_*_var(--percent-to-deg)))]",
            "[transform-origin:calc(var(--circle-size)_/_2)_calc(var(--circle-size)_/_2)]"
          )}
          style={{
            opacity: 1,
            // @ts-ignore
            "--stroke-percent": 50,
            "--percent-to-deg": "3.6deg",
          }}
        ></circle>
      </svg>
    </div>
  )
}

export { Gauge }
