import { cn } from "@/lib/utils"

// Define breakpoints and their corresponding min-widths for media queries
const breakpoints = {
  sm: "640px", // Example breakpoint min-widths
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

type BreakPoint = keyof typeof breakpoints

type TextSize = keyof typeof textSizes

interface TextProps {
  children: React.ReactNode
  size?: TextSize | { [key in BreakPoint]?: TextSize }
  transform?: React.CSSProperties["textTransform"]
  align?: React.CSSProperties["textAlign"]
  color?: string // TODO get better TS type here
  truncate?: boolean | number
  monospace?: boolean
  className?: string
  // TODO add the "as" property
}

const Text: React.FC<TextProps> = ({
  children,
  size = 14,
  transform,
  align,
  color,
  truncate,
  monospace,
  className,
}) => {
  const isMediaSize = typeof size === "object"

  const style: React.CSSProperties = isMediaSize
    ? Object.entries(size).reduce((acc, [breakpoint, value]) => {
        acc[`--${breakpoint}-text-size`] = textSizes[value].fontSize
        acc[`--${breakpoint}-text-weight`] = textSizes[value].fontWeight
        acc[`--${breakpoint}-text-letter-spacing`] =
          textSizes[value].letterSpacing
        acc[`--${breakpoint}-text-line-height`] = textSizes[value].lineHeight
        return acc
      }, {} as Record<string, string>)
    : {
        "--text-size": textSizes[size as TextSize]?.fontSize,
        "--text-weight": textSizes[size as TextSize]?.fontWeight,
        "--text-letter-spacing": textSizes[size as TextSize]?.letterSpacing,
        "--text-line-height": textSizes[size as TextSize]?.lineHeight,
      }

  if (transform) {
    // @ts-ignore-line
    style["--text-transform"] = transform
  }

  if (align) {
    // @ts-ignore-line
    style["--text-align"] = align
  }

  // @ts-ignore-line
  style["--text-color"] = `var(--ds-${color ?? "gray-1000"})`

  if (truncate && typeof truncate === "number") {
    // @ts-ignore-line
    style["--text-clamp"] = truncate
  }

  return (
    <p
      className={cn(
        "[color:hsl(var(--text-color))] [text-transform:var(--text-transform)]",
        isMediaSize
          ? [
              size?.sm &&
                "sm:[font-size:var(--sm-text-size)] sm:[font-weight:var(--sm-text-weight)] sm:[letter-spacing:var(--sm-text-letter-spacing)] sm:[line-height:var(--sm-text-line-height)]",
              size?.md &&
                "md:[font-size:var(--md-text-size)] md:[font-weight:var(--md-text-weight)] md:[letter-spacing:var(--md-text-letter-spacing)] md:[line-height:var(--md-text-line-height)]",
              size?.lg &&
                "lg:[font-size:var(--lg-text-size)] lg:[font-weight:var(--lg-text-weight)] lg:[letter-spacing:var(--lg-text-letter-spacing)] lg:[line-height:var(--lg-text-line-height)]",
              size?.xl &&
                "xl:[font-size:var(--xl-text-size)] xl:[font-weight:var(--xl-text-weight)] xl:[letter-spacing:var(--xl-text-letter-spacing)] xl:[line-height:var(--xl-text-line-height)]",
            ]
          : "[font-size:var(--text-size)] [font-weight:var(--text-weight)] [letter-spacing:var(--text-letter-spacing)] [line-height:var(--text-line-height)]",
        monospace && "font-mono",
        align && "[text-align:var(--text-align)]",
        truncate && typeof truncate === "number"
          ? "line-clamp-[var(--text-clamp)]"
          : "truncate",
        className
      )}
      style={style}
    >
      {children}
    </p>
  )
}

export { Text }

const textSizes = {
  10: {
    fontSize: "0.625rem",
    lineHeight: "0.75rem",
    fontWeight: "400",
    letterSpacing: "initial",
  },
  12: {
    fontSize: "0.75rem",
    lineHeight: `1rem`,
    fontWeight: "400",
    letterSpacing: "initial",
  },
  14: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: "400",
    letterSpacing: "initial",
  },
  16: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: "400",
    letterSpacing: "initial",
  },
  20: {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    fontWeight: "600",
    letterSpacing: "-0.020625rem",
  },
  24: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "600",
    letterSpacing: "-0.029375rem",
  },
  32: {
    fontSize: "2rem",
    lineHeight: "2.5rem",
    fontWeight: "600",
    letterSpacing: "-0.049375rem",
  },
  48: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
    fontWeight: "700",
    letterSpacing: "-0.066875rem",
  },
  ["heading-72"]: {
    fontSize: "4.5rem",
    lineHeight: "4.5rem",
    letterSpacing: "-4.32px",
    fontWeight: "600",
  },
  ["heading-64"]: {
    fontSize: "4rem",
    lineHeight: "4rem",
    letterSpacing: "-3.84px",
    fontWeight: "600",
  },
  ["heading-56"]: {
    fontSize: "3.5rem",
    lineHeight: "3.5rem",
    letterSpacing: "-3.36px",
    fontWeight: "600",
  },
  ["heading-48"]: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
    letterSpacing: "-2.88px",
    fontWeight: "600",
  },
  ["heading-40"]: {
    fontSize: "2.5rem",
    lineHeight: "3rem",
    letterSpacing: "-2.4px",
    fontWeight: "600",
  },
  ["heading-32"]: {
    fontSize: "2rem",
    lineHeight: "2.5rem",
    letterSpacing: "-1.28px",
    fontWeight: "600",
  },
  ["heading-24"]: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    letterSpacing: "-0.96px",
    fontWeight: "600",
  },
  ["heading-20"]: {
    fontSize: "1.25rem",
    lineHeight: "1.625rem",
    letterSpacing: "-0.4px",
    fontWeight: "600",
  },
  ["heading-16"]: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    letterSpacing: "-0.32px",
    fontWeight: "600",
  },
  ["button-16"]: {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    letterSpacing: "0px",
    fontWeight: "500",
  },
  ["button-14"]: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    letterSpacing: "0px",
    fontWeight: "500",
  },
  ["button-12"]: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
    letterSpacing: "0px",
    fontWeight: "500",
  },
  ["label-20"]: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["label-18"]: {
    fontSize: "1.125rem",
    lineHeight: "1.25rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["label-16"]: {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["label-14"]: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["label-13"]: {
    fontSize: "0.8125rem",
    lineHeight: "1rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["label-12"]: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["copy-24"]: {
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["copy-20"]: {
    fontSize: "1.25rem",
    lineHeight: "2.25rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["copy-18"]: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["copy-16"]: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["copy-14"]: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
  ["copy-13"]: {
    fontSize: "0.8125rem",
    lineHeight: "1.125rem",
    letterSpacing: "0px",
    fontWeight: "400",
  },
} as const satisfies Record<
  string | number,
  {
    fontSize: string
    fontWeight: string
    letterSpacing: string
    lineHeight: string
  }
>
