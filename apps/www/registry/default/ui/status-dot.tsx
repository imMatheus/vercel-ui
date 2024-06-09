import * as React from "react"

import { cn } from "@/lib/utils"

type State = "QUEUED" | "BUILDING" | "ERROR" | "READY" | "CANCELED"

const labels: Record<State, string> = {
  QUEUED: "Queued",
  BUILDING: "Building",
  ERROR: "Error",
  READY: "Ready",
  CANCELED: "Canceled",
}

const colors: Record<State, string> = {
  QUEUED: "bg-accents-2",
  BUILDING: "bg-orange-500", // TODO change out these colors to real colors
  ERROR: "bg-red-800",
  READY: "bg-teal-600",
  CANCELED: "bg-accents-2",
}

interface StatusDotProps {
  state: State
  label?: boolean
}

const StatusDot: React.FC<StatusDotProps> = ({ state, label }) => {
  return (
    <div className="flex items-center">
      <div className={cn("h-2.5 w-2.5 rounded-full", colors[state])} />
      {label && <p className="ml-2 text-sm leading-4">{labels[state]}</p>}
    </div>
  )
}

export { StatusDot }
