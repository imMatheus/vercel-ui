import { Button } from "@/registry/default/ui/button"
import { Tooltip } from "@/registry/default/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip text="Add to library">
      <Button variant="secondary">Hover</Button>
    </Tooltip>
  )
}
