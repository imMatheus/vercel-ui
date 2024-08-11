import { Switch, SwitchControl } from "@/registry/default/ui/switch"

export default function SwitchFullWidth() {
  return (
    <Switch name="default">
      <SwitchControl defaultChecked label="Source" value="source" />
      <SwitchControl label="Width" value="output" />
    </Switch>
  )
}
