import type { JSX } from "react"

import { Input } from "@/registry/default/ui/input"
import { Stack } from "@/registry/default/ui/stack"

export default function Component(): JSX.Element {
  return (
    <Stack align="start" direction={{ sm: "column", md: "row" }} gap={4}>
      <Input
        aria-labelledby="Demo"
        disabled
        placeholder="Disabled with placeholder"
      />
      <Input aria-labelledby="Demo" disabled value="Disabled with value" />
    </Stack>
  )
}
