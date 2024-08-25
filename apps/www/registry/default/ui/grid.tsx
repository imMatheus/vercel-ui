import React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface GridSystemProps {
  guideWidth: number
  children: React.ReactNode
}

const GridSystem: React.FC<GridSystemProps> = ({
  guideWidth = 1,
  children,
}) => {
  return (
    <div
      className="relative before:absolute before:inset-0 before:left-[calc(-1*var(--guide-width))] before:top-[calc(-1*var(--guide-width))] before:border-solid before:border-gray-400 before:content-[''] before:[border-width:var(--guide-width)]"
      style={{
        // @ts-ignore
        "--guide-width": `${guideWidth}px`,
      }}
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
        "relative grid",
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
      style={{ ...columnStyles, ...rowStyles }}
    >
      {children}
      <div className="pointer-events-none z-[1] contents" aria-hidden>
        {Array.from({ length: guideCount }).map((_, index) => (
          <div
            key={index}
            className="absolute inset-0 col-start-[var(--x)] col-end-[span_1] row-start-[var(--y)] row-end-[span_1] border-solid border-gray-400 [border-left:none] [border-top:none] [border-width:var(--guide-width)]"
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
  className?: string
  children?: React.ReactNode
}

const GridCell: React.FC<GridCellProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "z-[2] mb-[var(--guide-width)] mr-[var(--guide-width)] p-6 md:p-8 lg:p-10 xl:p-12",
        className
      )}
    >
      {children}
    </div>
  )
}

export { GridSystem, Grid, GridCell }
