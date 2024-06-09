"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

interface ShowMoreProps {
  expanded: boolean
  onClick: () => void
}

const ShowMore = ({ expanded, onClick }: ShowMoreProps) => {
  return (
    <div className="flex min-h-[30px] w-[calc(100%-40px)] items-center">
      <div className="h-[1px] flex-1 translate-x-[-1px] bg-gray-alpha-400"></div>
      <div className="shrink-0">
        <Button
          size="small"
          shape="rounded"
          variant="secondary"
          onClick={onClick}
        >
          <div className="flex items-center">
            <span>{expanded ? "Show less" : "Show more"}</span>
            <ChevronDownIcon
              className={cn(
                "ml-1 h-5 w-5 transition-transform",
                expanded && "rotate-180"
              )}
            />
          </div>
        </Button>
      </div>
      <div className="h-[1px] flex-1 translate-x-[1px] bg-gray-alpha-400"></div>
    </div>
  )
}

export { ShowMore }
