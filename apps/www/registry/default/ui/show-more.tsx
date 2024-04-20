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
    <div className="min-h-[30px] flex items-center w-[calc(100%-40px)]">
      <div className="flex-1 h-[1px] translate-x-[-1px] bg-gray-alpha-400"></div>
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
                "ml-1 w-5 h-5 transition-transform",
                expanded && "rotate-180"
              )}
            />
          </div>
        </Button>
      </div>
      <div className="flex-1 h-[1px] translate-x-[1px] bg-gray-alpha-400"></div>
    </div>
  )
}

export { ShowMore }
