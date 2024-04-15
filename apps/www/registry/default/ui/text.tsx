import { cn } from "@/lib/utils"

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
    letterSpacing: "-0.029375rem;",
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
} as const satisfies Record<
  string | number,
  {
    fontSize: string
    fontWeight: string
    letterSpacing: string
    lineHeight: string
  }
>

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
  size: TextSize | { [key in BreakPoint]?: TextSize }
  className?: string
}

const Text: React.FC<TextProps> = ({ children, size, className }) => {
  const isMediaSize = typeof size === "object"

  const style = isMediaSize
    ? Object.entries(size).reduce((acc, [breakpoint, value]) => {
        acc[`--${breakpoint}-text-size`] = textSizes[value].fontSize
        acc[`--${breakpoint}-text-weight`] = textSizes[value].fontWeight
        acc[`--${breakpoint}-text-letter-spacing`] =
          textSizes[value].letterSpacing
        acc[`--${breakpoint}-text-line-height`] = textSizes[value].lineHeight
        return acc
      }, {} as Record<string, string>)
    : ({
        "--text-size": textSizes[size].fontSize,
        "--text-weight": textSizes[size].fontWeight,
        "--text-letter-spacing": textSizes[size].letterSpacing,
        "--text-line-height": textSizes[size].lineHeight,
      } as React.CSSProperties)

  return (
    <p
      className={cn(
        "text-gray-1000",
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
        className
      )}
      style={style}
    >
      {children}
    </p>
  )
}

export { Text }
