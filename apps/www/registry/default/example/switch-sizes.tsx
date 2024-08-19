import { Switch, SwitchControl } from "@/registry/default/ui/switch"

export default function SwitchSizes() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-1 justify-start">
        <Switch size="small">
          <SwitchControl defaultChecked label="Source" value="source" />
          <SwitchControl label="Sizes" value="output" />
        </Switch>
      </div>
      <div className="flex flex-1 justify-start">
        <Switch size="medium">
          <SwitchControl defaultChecked label="Source" value="source" />
          <SwitchControl label="Sizes" value="output" />
        </Switch>
      </div>
      <div className="flex flex-1 justify-start">
        <Switch size="large">
          <SwitchControl label="Source" value="source" />
          <SwitchControl label="Sizes" value="list" />
        </Switch>
      </div>
    </div>
  )
}
