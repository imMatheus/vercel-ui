import { Shield } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import { Stack } from "@/registry/default/ui/stack"

// TODO improve icons

export default function BadgeOutline() {
  return (
    <Stack gap={2}>
      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="gray">
          gray
        </Badge>
        <Badge icon={<Shield />} size="md" variant="gray">
          gray
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="gray">
          gray
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="gray-subtle">
          gray
        </Badge>
        <Badge icon={<Shield />} size="md" variant="gray-subtle">
          gray
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="gray-subtle">
          gray
        </Badge>
      </Stack>

      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="blue">
          blue
        </Badge>
        <Badge icon={<Shield />} size="md" variant="blue">
          blue
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="blue">
          blue
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="blue-subtle">
          blue
        </Badge>
        <Badge icon={<Shield />} size="md" variant="blue-subtle">
          blue
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="blue-subtle">
          blue
        </Badge>
      </Stack>

      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="purple">
          purple
        </Badge>
        <Badge icon={<Shield />} size="md" variant="purple">
          purple
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="purple">
          purple
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="purple-subtle">
          purple
        </Badge>
        <Badge icon={<Shield />} size="md" variant="purple-subtle">
          purple
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="purple-subtle">
          purple
        </Badge>
      </Stack>

      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="amber">
          amber
        </Badge>
        <Badge icon={<Shield />} size="md" variant="amber">
          amber
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="amber">
          amber
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="amber-subtle">
          amber
        </Badge>
        <Badge icon={<Shield />} size="md" variant="amber-subtle">
          amber
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="amber-subtle">
          amber
        </Badge>
      </Stack>

      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="red">
          red
        </Badge>
        <Badge icon={<Shield />} size="md" variant="red">
          red
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="red">
          red
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="red-subtle">
          red
        </Badge>
        <Badge icon={<Shield />} size="md" variant="red-subtle">
          red
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="red-subtle">
          red
        </Badge>
      </Stack>

      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="pink">
          pink
        </Badge>
        <Badge icon={<Shield />} size="md" variant="pink">
          pink
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="pink">
          pink
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="pink-subtle">
          pink
        </Badge>
        <Badge icon={<Shield />} size="md" variant="pink-subtle">
          pink
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="pink-subtle">
          pink
        </Badge>
      </Stack>

      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="green">
          green
        </Badge>
        <Badge icon={<Shield />} size="md" variant="green">
          green
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="green">
          green
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="green-subtle">
          green
        </Badge>
        <Badge icon={<Shield />} size="md" variant="green-subtle">
          green
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="green-subtle">
          green
        </Badge>
      </Stack>

      <Stack align="center" direction="row" gap={1}>
        <Badge icon={<Shield />} size="lg" variant="teal">
          teal
        </Badge>
        <Badge icon={<Shield />} size="md" variant="teal">
          teal
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="teal">
          teal
        </Badge>
        <Badge icon={<Shield />} size="sm" variant="teal-subtle">
          teal
        </Badge>
        <Badge icon={<Shield />} size="md" variant="teal-subtle">
          teal
        </Badge>
        <Badge icon={<Shield />} size="lg" variant="teal-subtle">
          teal
        </Badge>
      </Stack>
    </Stack>
  )
}
