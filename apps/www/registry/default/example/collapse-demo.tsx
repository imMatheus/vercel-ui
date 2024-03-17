import { Collapse, CollapseGroup } from "@/registry/default/ui/collapse"

export default function CollapseDemo() {
  return (
    <CollapseGroup type="single" className="w-full bg-red-500">
      <Collapse value="item-1" title="Question A">
        <p>geh</p>
      </Collapse>
      <Collapse value="item-2" title="Question B">
        <p>geh</p>
      </Collapse>
    </CollapseGroup>
  )
}
