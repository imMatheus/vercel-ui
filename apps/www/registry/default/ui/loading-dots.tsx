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
      <span className="mx-[1px] inline-block h-[var(--loading-dots-size)] w-[var(--loading-dots-size)] animate-loading-dots-blink rounded-full bg-gray-900"></span>
      <span className="mx-[1px] inline-block h-[var(--loading-dots-size)] w-[var(--loading-dots-size)] animate-loading-dots-blink rounded-full bg-gray-900 delay-200"></span>
      <span className="mx-[1px] inline-block h-[var(--loading-dots-size)] w-[var(--loading-dots-size)] animate-loading-dots-blink rounded-full bg-gray-900 [animation-delay:400ms]"></span>
    </span>
  )
}

export { LoadingDots }
