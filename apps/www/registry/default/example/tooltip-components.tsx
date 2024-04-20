import { Button } from "@/registry/default/ui/button"
import { Tooltip } from "@/registry/default/ui/tooltip"

export default function TooltipBoxAlignDemo() {
  return (
    <Tooltip text="Add to library">
      <Button variant="secondary">Box</Button>
    </Tooltip>
  )
}
