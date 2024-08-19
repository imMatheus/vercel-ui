import { Switch, SwitchControl } from "@/registry/default/ui/switch"

export default function SwitchIcon() {
  return (
    <div className="flex">
      <Switch name="default">
        <SwitchControl defaultChecked disabled label="Source" value="source" />
        <SwitchControl label="Icon" disabled value="output" />
      </Switch>
    </div>
  )
}
