import { Badge } from "@/registry/default/ui/badge"
import { Stack } from "@/registry/default/ui/stack"

export default function BadgeDestructive() {
  return (
    <Stack gap={2}>
      <Stack direction="row" gap={1}>
        <Badge variant="gray">gray</Badge>
        <Badge variant="gray-subtle">gray-subtle</Badge>
      </Stack>

      <Stack direction="row" gap={1}>
        <Badge variant="blue">blue</Badge>
        <Badge variant="blue-subtle">blue-subtle</Badge>
      </Stack>

      <Stack direction="row" gap={1}>
        <Badge variant="purple">purple</Badge>
        <Badge variant="purple-subtle">purple-subtle</Badge>
      </Stack>

      <Stack direction="row" gap={1}>
        <Badge variant="amber">amber</Badge>
        <Badge variant="amber-subtle">amber-subtle</Badge>
      </Stack>

      <Stack direction="row" gap={1}>
        <Badge variant="red">red</Badge>
        <Badge variant="red-subtle">red-subtle</Badge>
      </Stack>

      <Stack direction="row" gap={1}>
        <Badge variant="pink">pink</Badge>
        <Badge variant="pink-subtle">pink-subtle</Badge>
      </Stack>

      <Stack direction="row" gap={1}>
        <Badge variant="green">green</Badge>
        <Badge variant="green-subtle">green-subtle</Badge>
      </Stack>

      <Stack direction="row" gap={1}>
        <Badge variant="teal">teal</Badge>
        <Badge variant="teal-subtle">teal-subtle</Badge>
      </Stack>

      <div>
        <Badge variant="trial">Trial</Badge>
      </div>

      <div>
        <Badge variant="turbo">Turborepo</Badge>
      </div>
    </Stack>
  )
}
