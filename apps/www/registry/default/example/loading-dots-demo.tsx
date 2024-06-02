import { LoadingDots } from "@/registry/default/ui/loading-dots"
import { Stack } from "@/registry/default/ui/stack"

export default function LoadingDotsDemo() {
  return (
    <Stack align="start" gap={6} justify="space-between">
      <LoadingDots />
      <LoadingDots size={4} />
    </Stack>
  )
}
