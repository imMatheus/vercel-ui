import { Gauge } from "@/registry/default/ui/gauge"
import { Stack } from "@/registry/default/ui/stack"

export default function GaugeColorScale() {
  return (
    <Stack direction="row" gap={8}>
      <Gauge size="small" value={14} />
      <Gauge size="small" value={34} />
      <Gauge size="small" value={68} />
    </Stack>
  )
}
