import { useState } from "react"

import { ShowMore } from "@/registry/default/ui/show-more"

export default function ShowMoreDemo() {
  const [expanded, setExpanded] = useState(false)

  return <ShowMore expanded={expanded} onClick={() => setExpanded(!expanded)} />
}
