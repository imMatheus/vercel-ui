import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertOctagonIcon, ExternalLinkIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const errorVariants = cva("flex items-start text-red-900", {
  variants: {
    size: {
      small: "text-[13px] leading-5 [--error-icon-mt:2px]",
      medium: "text-sm [--error-icon-mt:2px]",
      large: "text-base [--error-icon-mt:4px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface ErrorPropsBasics extends VariantProps<typeof errorVariants> {
  label?: string
}

interface ErrorPropsWithChildren extends ErrorPropsBasics {
  children: React.ReactNode
  error?: never
}

interface ErrorPropsWithProperty extends ErrorPropsBasics {
  error: {
    message: string
    action: string
    link: string
  }
  children?: never
}

type ErrorProps = ErrorPropsWithChildren | ErrorPropsWithProperty

const Error: React.FC<ErrorProps> = ({
  size = "medium",
  label,
  error,
  children,
}) => {
  return (
    <div className={cn(errorVariants({ size }))}>
      <div className="mr-2 mt-[var(--error-icon-mt)]">
        <AlertOctagonIcon className="h-4 w-4" />
      </div>
      <p className="[word-break:break-word]">
        {label && <b className="mr-2 font-medium">{label}:</b>}

        {error ? (
          <>
            {error.message}
            <a
              href={error.link}
              className="ml-1 inline-flex items-center gap-0.5 bg-gradient-to-t from-current to-current bg-no-repeat font-medium [background-position:0_100%] [background-size:100%_1px] hover:opacity-60"
            >
              {error.action}
              <ExternalLinkIcon className="ml-0.5 h-[14px] w-[14px]" />
            </a>
          </>
        ) : (
          children
        )}
      </p>
    </div>
  )
}

export { Error }
