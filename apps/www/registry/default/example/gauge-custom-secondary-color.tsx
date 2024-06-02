import { Gauge } from "@/registry/default/ui/gauge"

export default function GaugeCustomSecondaryColor() {
  return (
    <div className="flex justify-start">
      <Gauge
        colors={{
          primary: "var(--ds-blue-700)",
          secondary: "var(--ds-blue-300)",
        }}
        size="medium"
        value={50}
      />
    </div>
  )
}
