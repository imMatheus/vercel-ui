import * as React from "react"

interface PaddingBoxProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export function PaddingBox({ title, description, children }: PaddingBoxProps) {
  const hasLabel = !!title || !!description

  return (
    <div className="p-6 border-b last:border-b-0 sm:p-12">
      {hasLabel && (
        <div className="mb-4 xl:mb-7">
          {title && (
            <h2 className="font-semibold text-2xl text-gray-1000">{title}</h2>
          )}
          {description && (
            <p className="mt-2 leading-6 text-gray-900 xl:mt-4">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
