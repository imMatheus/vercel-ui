import { Badge } from "@/registry/default/ui/badge"
import { Stack } from "@/registry/default/ui/stack"

export default function BadgeDestructive() {
  return (
    <Stack gap={2} align="flex-start">
      <Badge variant="gray" size="sm">
        Small
      </Badge>
      <Badge variant="gray" size="md">
        Medium
      </Badge>
      <Badge variant="gray" size="lg">
        Large
      </Badge>
    </Stack>
  )
}
