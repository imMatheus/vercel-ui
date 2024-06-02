import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const gaugeVariants = cva("flex justify-center items-center relative", {
  variants: {
    size: {
      tiny: "[--circle-size-d:20px] [--stroke-width:15] [--text-size:0px] [--text-weight:0]",
      small:
        "[--circle-size-d:32px] [--stroke-width:10] [--text-size:11px] [--text-weight:500]",
      medium:
        "[--circle-size-d:64px] [--stroke-width:10] [--text-size:18px] [--text-weight:500]",
      large:
        "[--circle-size-d:128px] [--stroke-width:10] [--text-size:32px] [--text-weight:600]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

const sizes = {
  tiny: { circle: 20 },
  small: { circle: 32 },
  medium: { circle: 64 },
  large: { circle: 128 },
}
interface GaugeProps {
  size: keyof typeof sizes
  value: number
  showValue?: boolean
  colors?:
    | {
        primary: string
        secondary: string
      }
    | Partial<
        Record<
          | "0"
          | "10"
          | "20"
          | "30"
          | "40"
          | "50"
          | "60"
          | "70"
          | "80"
          | "90"
          | "100",
          string
        >
      >
}

// TODO fix the 0 value case
const Gauge: React.FC<GaugeProps> = ({
  size = "medium",
  value,
  showValue,
  colors,
}) => {
  const circleSize = 100

  const secondaryColor =
    colors && "secondary" in colors
      ? `hsl(${colors.secondary})`
      : "var(--ds-gray-alpha-400)"
  const primaryColor = colors
    ? "primary" in colors
      ? `hsl(${colors.primary})`
      : colors[`${Math.round(value / 10) * 10}` as keyof typeof colors]
      ? `hsl(${
          colors[`${Math.round(value / 10) * 10}` as keyof typeof colors]
        })`
      : `hsl(${
          colors[
            Object.keys(colors).reduce((prev, curr) =>
              Math.abs(Number(curr) - value) < Math.abs(Number(prev) - value)
                ? curr
                : prev
            ) as keyof typeof colors
          ]
        })`
    : value >= 68
    ? "hsl(var(--ds-green-700))"
    : value >= 34
    ? "hsl(var(--ds-amber-700))"
    : "hsl(var(--ds-red-800))"

  return (
    <div
      className={gaugeVariants({ size })}
      style={{
        // @ts-ignore
        "--circle-size": `${100}px`,
        "--circumference": `${2827433388230814}px`,
        "--percent-to-px": `${2.827433388230814}px`,
        "--gap-percent": `${5}`,
        "--offset-factor": `${0}`,
        "--secondary-color": `${secondaryColor}`,
        "--primary-color": `${primaryColor}`,
      }}
    >
      <svg
        fill="none"
        viewBox="0 0 100 100"
        height={sizes[size].circle}
        width={sizes[size].circle}
        stroke-width="2"
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
            "transition-all duration-1000 ease-in-out stroke-[var(--secondary-color)]",
            "[stroke-dasharray:calc(var(--stroke-percent)_*_var(--percent-to-px))_var(--circumference)]",
            "[transition-property:stroke-dasharray,tranform]",
            "[transform:rotate(calc(1turn_-_90deg_-(var(--gap-percent)_*_var(--percent-to-deg)_*_var(--offset-factor-secondary))))_scaleY(-1)]",
            "[transform-origin:calc(var(--circle-size)_/_2)_calc(var(--circle-size)_/_2)]"
          )}
          style={{
            opacity: 1,
            // @ts-ignore
            "--stroke-percent": Math.max(0, 100 - value - 10),
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
            "stroke-[var(--primary-color)] transition-all duration-1000 ease-in-out",
            "[stroke-dasharray:calc(var(--stroke-percent)_*_var(--percent-to-px))_var(--circumference)]",
            "[transition-property:stroke-dasharray,tranform]",
            "[transform:rotate(calc(-90deg_+_var(--gap-percent)_*_var(--offset-factor)_*_var(--percent-to-deg)))]",
            "[transform-origin:calc(var(--circle-size)_/_2)_calc(var(--circle-size)_/_2)]"
          )}
          style={{
            opacity: 1,
            // @ts-ignore
            "--stroke-percent": value,
            "--percent-to-deg": "3.6deg",
          }}
        ></circle>
      </svg>
      {showValue && size !== "tiny" && (
        <div className="absolute text-center">
          <p className="[font-size:var(--text-size)] [font-weight:var(--text-weight)]">
            {value}
          </p>
        </div>
      )}
    </div>
  )
}

export { Gauge }
