import * as React from "react"

import { ScrollArea } from "@/registry/default/ui/scroll-area"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="border-b border-b-red-500 text-sm">
              {tag}
            </div>
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
