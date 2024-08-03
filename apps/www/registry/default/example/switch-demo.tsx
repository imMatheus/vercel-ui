import { Switch, SwitchControl } from "@/registry/default/ui/switch"

// TODO fix some of the left over cases
export default function TabsDemo() {
  return (
    <div className="flex">
      <Switch name="default">
        <SwitchControl defaultChecked label="Source" value="source" />
        <SwitchControl label="Output" value="output" />
      </Switch>
    </div>
  )
}
