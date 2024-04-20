import { ArrowUp } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Stack } from "@/registry/default/ui/stack"

export default function ButtonShapes() {
  const Arrow = () => <ArrowUp className="w-4 h-4" />

  return (
    <Stack
      align="start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Button aria-label="Upload" shape="square" size="tiny" svgOnly>
        <Arrow />
      </Button>
      <Button aria-label="Upload" shape="square" size="small" svgOnly>
        <Arrow />
      </Button>
      <Button aria-label="Upload" shape="square" svgOnly>
        <Arrow />
      </Button>
      <Button aria-label="Upload" shape="square" size="large" svgOnly>
        <Arrow />
      </Button>
      <Button aria-label="Upload" shape="circle" size="tiny" svgOnly>
        <Arrow />
      </Button>
      <Button aria-label="Upload" shape="circle" size="small" svgOnly>
        <Arrow />
      </Button>
      <Button aria-label="Upload" shape="circle" svgOnly>
        <Arrow />
      </Button>
      <Button aria-label="Upload" shape="circle" size="large" svgOnly>
        <Arrow />
      </Button>
    </Stack>
  )
}
