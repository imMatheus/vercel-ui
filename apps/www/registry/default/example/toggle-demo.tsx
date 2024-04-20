import { useState } from "react"

import { Toggle } from "@/registry/default/ui/toggle"

export default function ToggleDemo() {
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(true)

  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <Toggle
          checked={checked}
          onCheckedChange={(): void => setChecked(!checked)}
        />
      </div>
      <div className="">
        <Toggle
          checked={checked2}
          onCheckedChange={(): void => setChecked2(!checked2)}
        />
      </div>
    </div>
  )
}
