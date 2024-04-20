import React from "react"

type SpinnerProps = { size?: number }

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div
      className="w-[var(--spinner-size)] h-[var(--spinner-size)] shrink-0"
      style={
        {
          ["--spinner-size"]: size ? `${size}px` : "20px",
        } as React.CSSProperties
      }
    >
      <div className="w-[var(--spinner-size)] h-[var(--spinner-size)] relative top-1/2 left-1/2">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="bg-gray-700 rounded-[5px] w-[24%] h-[8%] absolute left-[-10%] top-[-3.9%] animate-spinner-spin"
              style={{
                transform: `rotate(${i * 30}deg) translate(146%)`,
                animationDelay: `-${1.2 - (i + 1) * 0.1}s`,
              }}
            />
          ))}
      </div>
    </div>
  )
}

export { Spinner }
