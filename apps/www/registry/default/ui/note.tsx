"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import {
  AlertCircleIcon,
  AlertOctagon,
  CheckCircle2,
  InfoIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

const noteVariants = cva(
  "border p-2 flex leading-normal justify-between items-center rounded-md gap-3 [word-break:break-word] grow",
  {
    variants: {
      variant: {
        secondary:
          "text-gray-600 border-gray-300 [--note-filled-bg:var(--ds-gray-alpha-200)]",
        success:
          "text-blue-900 border-blue-400 selection:blue-800 [--note-filled-bg:hsl(var(--ds-blue-200))]",
        error:
          "text-red-900 border-red-400 [--note-filled-bg:hsl(var(--ds-red-200))]",
        warning:
          "text-red-900 border-red-400 [--note-filled-bg:hsl(var(--ds-red-200))]",
      },
      size: {
        small: "py-1.5 px-2 text-[13px] min-h-[34px]",
        medium: "py-2 px-3 text-sm min-h-[40px]",
        large: "py-[11px] px-3 text-base min-h-[24px]",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "medium",
    },
  }
)
interface NoteProps {
  children: React.ReactNode
  action?: React.ReactNode
  size?: VariantProps<typeof noteVariants>["size"]
  type?: VariantProps<typeof noteVariants>["variant"]
  fill?: boolean
  className?: string
}

const icons = {
  success: CheckCircle2,
  error: AlertOctagon,
  warning: AlertCircleIcon,
}

const Note = ({
  action,
  children,
  size,
  type = "secondary",
  fill,
  className,
}: NoteProps) => {
  const Icon = icons[type as keyof typeof icons] ?? InfoIcon

  return (
    <div
      className={cn(
        noteVariants({
          variant: type,
          size,
          className: fill
            ? "bg-[var(--note-filled-bg)] border-transparent"
            : "",
        }),
        className
      )}
    >
      <span className="flex items-center gap-3">
        <span>
          <Icon className="w-4 h-4" />
        </span>
        <span className="">{children}</span>
      </span>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export { Note }
