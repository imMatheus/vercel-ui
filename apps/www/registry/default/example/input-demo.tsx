import type { JSX } from "react"

import { Input } from "@/registry/default/ui/input"
import { Stack } from "@/registry/default/ui/stack"

export default function Component(): JSX.Element {
  return (
    <Stack
      align="start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Input aria-labelledby="Demo input" placeholder="Small" size="small" />
      <Input aria-labelledby="Demo input" placeholder="Default" size="medium" />
      <Input aria-labelledby="Demo input" placeholder="Large" size="large" />
    </Stack>
  )
}
