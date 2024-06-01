import { Stack } from "@/registry/default/ui/stack"
import { StatusDot } from "@/registry/default/ui/status-dot"

export default function StatusDotDemo() {
  return (
    <Stack gap={6}>
      <StatusDot state="QUEUED" />
      <StatusDot state="BUILDING" />
      <StatusDot state="ERROR" />
      <StatusDot state="READY" />
      <StatusDot state="CANCELED" />
    </Stack>
  )
}
