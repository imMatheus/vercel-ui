import { Toggle } from "@/registry/default/ui/toggle"

export default function ToggleDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Toggle checked={false} disabled />
      <Toggle checked disabled />
    </div>
  )
}
