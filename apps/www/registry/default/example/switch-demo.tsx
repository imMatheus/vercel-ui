import { Switch, SwitchControl } from "@/registry/default/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex">
      <Switch name="default">
        <SwitchControl defaultChecked label="Source" value="source" />
        <SwitchControl label="Output" value="output" />
      </Switch>
    </div>
  )
}
