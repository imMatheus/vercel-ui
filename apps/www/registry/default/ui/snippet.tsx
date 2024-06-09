"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

const snippetVariants = cva(
  "max-w-full relative rounded-md border py-2.5 pl-3 pr-12",
  {
    variants: {
      variant: {
        default: "bg-background-100 border-gray-alpha-400 text-gray-1000",
        dark: "bg-gray-1000 border-gray-1000 text-gray-100",
        success: "bg-blue-100 border-blue-400 text-blue-900",
        error: "bg-red-100 border-red-400 text-red-900",
        warning: "bg-amber-100 border-amber-400 text-amber-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SnippetProps {
  text: string | string[]
  width?: string
  onCopy?: () => void
  type?: VariantProps<typeof snippetVariants>["variant"]
  prompt?: boolean
  className?: string
}

const Snippet: React.FC<SnippetProps> = ({
  text,
  width,
  prompt = true,
  onCopy,
  type = "default",
  className,
}) => {
  const textArray = Array.isArray(text) ? text : [text]
  const [showCopyButton, setShowCopyButton] = React.useState(true)

  function copyTextHandler() {
    if (showCopyButton === false) return

    setShowCopyButton(false)
    navigator.clipboard.writeText(textArray.join("\n\t")).then(() => {
      if (onCopy) {
        onCopy()
      }
    })

    setTimeout(() => {
      setShowCopyButton(true)
    }, 1200)
  }

  return (
    <div
      className={cn(snippetVariants({ variant: type }), className)}
      style={{ width }}
    >
      <div className="flex-1">
        {textArray.map((text, index) => (
          <pre
            key={index}
            className={cn(
              "overflow-y-auto text-[13px]",
              prompt && "before:select-none before:content-['$_']"
            )}
          >
            {text}
          </pre>
        ))}
      </div>

      <button
        onClick={copyTextHandler}
        className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center"
      >
        <div
          className={cn(
            "absolute  duration-150 ease-out fill-mode-forwards",
            showCopyButton
              ? "animate-copy-button-fadeOut"
              : "animate-copy-button-fadeIn"
          )}
        >
          <Check className="h-4 w-4" />
        </div>
        <div
          className={cn(
            "absolute  duration-150 ease-out fill-mode-forwards",
            showCopyButton
              ? "animate-copy-button-fadeIn"
              : "animate-copy-button-fadeOut"
          )}
        >
          <Copy className="h-4 w-4" />
        </div>
      </button>
    </div>
  )
}

export { Snippet }
