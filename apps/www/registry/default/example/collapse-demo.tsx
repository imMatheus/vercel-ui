import { Collapse, CollapseGroup } from "@/registry/default/ui/collapse"

export default function CollapseDemo() {
  return (
    <CollapseGroup>
      <Collapse value="item-1" title="Question A">
        {/* TODO add the text component */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Collapse>
      <Collapse value="item-2" title="Question B">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </Collapse>
    </CollapseGroup>
  )
}
