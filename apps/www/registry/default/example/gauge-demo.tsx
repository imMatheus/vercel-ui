import { Gauge } from "@/registry/default/ui/gauge"
import { Stack } from "@/registry/default/ui/stack"

export default function GaugeDemo() {
  return (
    <Stack direction="row" gap={8}>
      <Gauge size="tiny" value={50} />
      <Gauge size="small" value={50} />
      <Gauge size="medium" value={50} />
      <Gauge size="large" value={50} />
    </Stack>
  )
}
