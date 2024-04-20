import { Button } from "@/registry/default/ui/button"
import { Tooltip } from "@/registry/default/ui/tooltip"

export default function TooltipNoDelayDemo() {
  return (
    <Tooltip text="Add to library">
      <Button variant="secondary">No delay</Button>
    </Tooltip>
  )
}
