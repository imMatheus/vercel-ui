import { Button } from "@/registry/default/ui/button"
import { Stack } from "@/registry/default/ui/stack"

export default function ButtonDemo() {
  return (
    <Stack
      align="flex-start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Button size="small">Upload</Button>
      <Button>Upload</Button>
      <Button size="large">Upload</Button>
    </Stack>
  )
}
