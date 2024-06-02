import { Gauge } from "@/registry/default/ui/gauge"
import { Stack } from "@/registry/default/ui/stack"

export default function GaugeLabel() {
  return (
    <Stack direction="row" gap={8}>
      <Gauge showValue size="tiny" value={80} />
      <Gauge showValue size="small" value={80} />
      <Gauge showValue size="small" value={100} />
      <Gauge showValue size="medium" value={80} />
      <Gauge showValue size="medium" value={100} />
      <Gauge showValue size="large" value={80} />
      <Gauge showValue size="large" value={100} />
    </Stack>
  )
}
