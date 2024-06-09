import * as React from "react"

interface PaddingBoxProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export function PaddingBox({ title, description, children }: PaddingBoxProps) {
  const hasLabel = !!title || !!description

  return (
    <div className="border-b border-b-gray-400 p-6 last:border-b-0 md:p-10 lg:p-12">
      {hasLabel && (
        <div className="mb-4 xl:mb-7">
          {title && (
            <h2 className="text-2xl font-semibold text-gray-1000">{title}</h2>
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
