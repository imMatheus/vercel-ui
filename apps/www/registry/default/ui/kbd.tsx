import React from "react"
import { cva } from "class-variance-authority"

const kbdVariants = cva(
  "text-gray-1000 text-sm bg-background-100 text-center space-x-1 inline-block rounded ml-1 shadow-border",
  {
    variants: {
      size: {
        small: "min-w-5 px-1",
        medium: "min-w-6 min-h-6 px-1.5",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
)

interface KbdProps {
  meta?: boolean
  shift?: boolean
  alt?: boolean
  ctrl?: boolean
  small?: boolean
  children?: React.ReactNode
}

// TODO fix the font so that this looks good
const Kbd: React.FC<KbdProps> = ({
  meta,
  shift,
  alt,
  ctrl,
  small,
  children,
}) => {
  return (
    <kbd className={kbdVariants({ size: small ? "small" : "medium" })}>
      {meta && <span>⌘</span>}
      {shift && <span>⇧</span>}
      {alt && <span>⌥</span>}
      {ctrl && <span>⌃</span>}

      {children && <span>{children}</span>}
    </kbd>
  )
}

export { Kbd }
