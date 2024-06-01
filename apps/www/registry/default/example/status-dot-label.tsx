import { Stack } from "@/registry/default/ui/stack"
import { StatusDot } from "@/registry/default/ui/status-dot"

export default function Component() {
  return (
    <Stack gap={6}>
      <StatusDot label state="QUEUED" />
      <StatusDot label state="BUILDING" />
      <StatusDot label state="ERROR" />
      <StatusDot label state="READY" />
      <StatusDot label state="CANCELED" />
    </Stack>
  )
}
