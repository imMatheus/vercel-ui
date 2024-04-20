import { Button } from "@/registry/default/ui/button"
import { Stack } from "@/registry/default/ui/stack"

export default function ButtonRounded() {
  return (
    <Stack
      align="start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Button shadow shape="rounded" size="small" variant="secondary">
        Upload
      </Button>
      <Button shadow shape="rounded" variant="secondary">
        Upload
      </Button>
      <Button shadow shape="rounded" size="large" variant="secondary">
        Upload
      </Button>
    </Stack>
  )
}
