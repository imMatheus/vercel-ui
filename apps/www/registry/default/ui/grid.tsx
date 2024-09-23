import React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface GridSystemProps {
  guideWidth: number
  debug?: boolean
  children: React.ReactNode
}

const GridSystem: React.FC<GridSystemProps> = ({
  guideWidth = 1,
  debug,
  children,
}) => {
  const style: Record<string, string> = {
    "--guide-width": `${guideWidth}px`,
    "--guide-color": "hsl(var(--ds-gray-400))",
  }

  if (debug) {
    style["--debug-color-rgb"] = "255, 204, 109"
    style["--debug-guide-color"] = "rgba(var(--debug-color-rgb), 0.7)"
    style["--debug-block-color"] = "rgba(var(--debug-color-rgb), 0.1)"
    style["--debug-hidden-guide-color"] = "rgba(var(--debug-color-rgb), 0.1)"
    style["--guide-color"] = "var(--debug-guide-color)"
  }

  return (
    <div
      className="relative h-fit before:absolute before:inset-0 before:left-[calc(-1*var(--guide-width))] before:top-[calc(-1*var(--guide-width))] before:border-solid before:border-[var(--guide-color)] before:content-[''] before:[border-width:var(--guide-width)]"
      style={style as React.CSSProperties}
    >
      {children}
    </div>
  )
}

interface GridProps {
  children: React.ReactNode
  columns: number | { [key in BreakPoint]?: number }
  rows: number | { [key in BreakPoint]?: number }
}

const breakpoints = {
  sm: "640px", // Example breakpoint min-widths
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

type BreakPoint = keyof typeof breakpoints

const MIN_WIDTH = "368px"
const MAX_WIDTH = "1080px"

const Grid: React.FC<GridProps> = ({ children, columns = 1, rows = 1 }) => {
  // TODO change this to do media query checks
  const realColumnCount: number =
    typeof columns === "number" ? columns : columns.md || 0
  const realRowCount: number = typeof rows === "number" ? rows : rows.md || 0

  const columnStyles: React.CSSProperties =
    typeof columns === "object"
      ? Object.entries(columns).reduce(
          (acc, [breakpoint, value]) => {
            acc[`--${breakpoint}-grid-columns`] = String(value)
            return acc
          },
          {} as Record<string, string>
        )
      : {
          "--grid-columns": String(columns),
        }

  const rowStyles: React.CSSProperties =
    typeof rows === "object"
      ? Object.entries(rows).reduce(
          (acc, [breakpoint, value]) => {
            acc[`--${breakpoint}-grid-rows`] = String(value)
            return acc
          },
          {} as Record<string, string>
        )
      : {
          "--grid-rows": String(rows),
        }

  const guideCount = realColumnCount * realRowCount

  return (
    <div
      className={cn(
        "relative grid w-[var(--width)]",
        typeof columns === "object"
          ? [
              columns?.sm &&
                "xl:grid-cols-[repeat(var(--sm-grid-columns),_1fr)]",
              columns?.md &&
                "xl:grid-cols-[repeat(var(--md-grid-columns),_1fr)]",
              columns?.lg &&
                "xl:grid-cols-[repeat(var(--lg-grid-columns),_1fr)]",
              columns?.xl &&
                "xl:grid-cols-[repeat(var(--xl-grid-columns),_1fr)]",
            ]
          : "grid-cols-[repeat(var(--grid-columns),_1fr)]",
        typeof rows === "object"
          ? [
              rows?.sm && "xl:grid-rows-[repeat(var(--sm-grid-rows),_1fr)]",
              rows?.md && "xl:grid-rows-[repeat(var(--md-grid-rows),_1fr)]",
              rows?.lg && "xl:grid-rows-[repeat(var(--lg-grid-rows),_1fr)]",
              rows?.xl && "xl:grid-rows-[repeat(var(--xl-grid-rows),_1fr)]",
            ]
          : "grid-rows-[repeat(var(--grid-rows),_1fr)]"
      )}
      style={
        {
          ...columnStyles,
          ...rowStyles,
          "--width": `clamp(calc(${MIN_WIDTH} - var(--guide-width)), calc(calc(100%) - var(--guide-width)), calc(${MAX_WIDTH} - var(--guide-width)))`,
        } as React.CSSProperties
      }
    >
      {children}
      <div className="pointer-events-none z-[1] contents" aria-hidden>
        {Array.from({ length: guideCount }).map((_, index) => (
          <div
            key={index}
            className="absolute inset-0 col-start-[var(--x)] col-end-[span_1] row-start-[var(--y)] row-end-[span_1] border-solid border-[var(--guide-color)] [border-left:none] [border-top:none] [border-width:var(--guide-width)]"
            style={
              {
                "--x": (index % realColumnCount) + 1,
                "--y": Math.floor(index / realColumnCount) + 1,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}

interface GridCellProps {
  column?: { [key in BreakPoint]?: string | number }
  row?: { [key in BreakPoint]?: string | number }
  className?: string
  children?: React.ReactNode
}

const GridCell: React.FC<GridCellProps> = ({
  column,
  row,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "z-[2] mb-[var(--guide-width)] mr-[var(--guide-width)] p-6 [grid-column:var(--grid-column)] [grid-row:var(--grid-row)] md:p-8 lg:p-10 xl:p-12",
        className
      )}
      style={
        {
          "--x": 1,
          "--y": 1,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

export { GridSystem, Grid, GridCell }
