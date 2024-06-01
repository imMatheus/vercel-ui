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
}

const Snippet: React.FC<SnippetProps> = ({
  text,
  width = "100%",
  prompt = true,
  onCopy,
  type = "default",
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
    <div className={snippetVariants({ variant: type })} style={{ width }}>
      <div className="flex-1">
        {textArray.map((text, index) => (
          <pre
            key={index}
            className={cn(
              "overflow-y-auto text-[13px]",
              prompt && "before:content-['$_'] before:select-none"
            )}
          >
            {text}
          </pre>
        ))}
      </div>

      <button
        onClick={copyTextHandler}
        className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center"
      >
        <div
          className={cn(
            "absolute  duration-150 fill-mode-forwards ease-out",
            showCopyButton
              ? "animate-copy-button-fadeOut"
              : "animate-copy-button-fadeIn"
          )}
        >
          <Check className="w-4 h-4" />
        </div>
        <div
          className={cn(
            "absolute  duration-150 fill-mode-forwards ease-out",
            showCopyButton
              ? "animate-copy-button-fadeIn"
              : "animate-copy-button-fadeOut"
          )}
        >
          <Copy className="w-4 h-4" />
        </div>
      </button>
    </div>
  )
}

export { Snippet }
