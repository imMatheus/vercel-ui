import { Toggle } from "@/registry/default/ui/toggle"

export default function ToggleDemo() {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <Toggle />
      </div>
      <div className="flex-1">
        <Toggle size="large" />
      </div>
    </div>
  )
}
