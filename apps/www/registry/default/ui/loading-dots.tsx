import React from "react"

interface LoadingDotsProps {
  size?: number
  children?: React.ReactNode
}

const LoadingDots: React.FC<LoadingDotsProps> = ({ size = 2, children }) => {
  return (
    <span
      className="inline-flex items-center"
      style={{
        // @ts-ignore
        "--loading-dots-size": `${size}px`,
      }}
    >
      {children && <span className="mr-3 inline-block">{children}</span>}
      <span className="mx-[1px] inline-block w-[var(--loading-dots-size)] h-[var(--loading-dots-size)] rounded-full bg-gray-900 animate-loading-dots-blink"></span>
      <span className="mx-[1px] inline-block w-[var(--loading-dots-size)] h-[var(--loading-dots-size)] rounded-full bg-gray-900 animate-loading-dots-blink delay-200"></span>
      <span className="mx-[1px] inline-block w-[var(--loading-dots-size)] h-[var(--loading-dots-size)] rounded-full bg-gray-900 animate-loading-dots-blink [animation-delay:400ms] repeat-infinite"></span>
    </span>
  )
}

export { LoadingDots }
