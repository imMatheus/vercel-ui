"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import {
  AlertOctagon,
  AlertTriangleIcon,
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
          "text-gray-600 border-gray-300 [--note-filled-bg:var(--ds-gray-alpha-200)] [--note-filled-border:transparent]",
        success:
          "text-blue-900 border-blue-400 selection:bg-blue-700 [--note-filled-bg:hsl(var(--ds-blue-200))] [--note-filled-border:hsl(var(--ds-blue-100))]",
        error:
          "text-red-900 border-red-400 selection:bg-red-800 [--note-filled-bg:hsl(var(--ds-red-200))] [--note-filled-border:hsl(var(--ds-red-100))]",
        warning:
          "text-amber-900 border-amber-400 selection:bg-amber-500 [--note-filled-bg:hsl(var(--ds-amber-200))] [--note-filled-border:hsl(var(--ds-amber-100))]",
        violet:
          "text-purple-900 border-purple-400 selection:bg-purple-600 [--note-filled-bg:hsl(var(--ds-purple-200))] [--note-filled-border:hsl(var(--ds-purple-100))]",
        cyan: "text-teal-900 border-teal-400 selection:bg-teal-900 [--note-filled-bg:hsl(var(--ds-teal-200))] [--note-filled-border:hsl(var(--ds-teal-100))]",
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
  disabled?: boolean
}

const icons = {
  success: CheckCircle2,
  error: AlertOctagon,
  warning: AlertTriangleIcon,
}

const Note = ({
  action,
  children,
  size,
  type = "secondary",
  fill,
  className,
  disabled,
}: NoteProps) => {
  const Icon = icons[type as keyof typeof icons] ?? InfoIcon

  return (
    <div
      className={cn(
        noteVariants({
          variant: type,
          size,
        }),
        fill && "border-[var(--note-filled-border)] bg-[var(--note-filled-bg)]",
        disabled &&
          "border-gray-alpha-200 text-gray-700 [--note-filled-bg:transparent] [--note-filled-border:var(--ds-gray-alpha-200)]",
        className
      )}
    >
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4 shrink-0" />

        <span className="">{children}</span>
      </span>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export { Note }
