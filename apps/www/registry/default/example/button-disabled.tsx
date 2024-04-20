import { Button } from "@/registry/default/ui/button"
import { Stack } from "@/registry/default/ui/stack"

export default function ButtonDisabled() {
  return (
    <Stack
      align="start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Button disabled size="small">
        Upload
      </Button>
      <Button disabled>Upload</Button>
      <Button disabled size="large">
        Upload
      </Button>
    </Stack>
  )
}
