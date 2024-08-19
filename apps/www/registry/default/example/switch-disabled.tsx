import { Switch, SwitchControl } from "@/registry/default/ui/switch"

export default function SwitchDisabled() {
  return (
    <div className="flex">
      <Switch>
        <SwitchControl defaultChecked disabled label="Source" value="source" />
        <SwitchControl label="Output" disabled value="output" />
      </Switch>
    </div>
  )
}
