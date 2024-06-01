import { Snippet } from "@/registry/default/ui/snippet"
import { Stack } from "@/registry/default/ui/stack"

export default function SnippetVariants() {
  return (
    <Stack gap={3}>
      <Snippet text="npm init next-app" type="success" width="300px" />
      <Snippet text="npm init next-app" type="error" width="300px" />
      <Snippet text="npm init next-app" type="warning" width="300px" />
    </Stack>
  )
}
