import type { JSX } from "react"

import { Input } from "@/registry/default/ui/input"
import { Stack } from "@/registry/default/ui/stack"

export default function Component(): JSX.Element {
  return (
    <Stack align="flex-start">
      <Input aria-labelledby="Demo input" label="Label" placeholder="Label" />
    </Stack>
  )
}
