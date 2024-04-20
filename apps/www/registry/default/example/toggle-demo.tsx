import { Label } from "@/registry/default/ui/label"
import { Toggle } from "@/registry/default/ui/toggle"

export default function ToggleDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Toggle id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
