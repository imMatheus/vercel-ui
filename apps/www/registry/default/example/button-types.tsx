import { Button } from "@/registry/default/ui/button"
import { Stack } from "@/registry/default/ui/stack"

export default function ButtonTypes() {
  return (
    <Stack
      align="start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Button variant="secondary">Upload</Button>
      <Button variant="tertiary">Upload</Button>
      <Button variant="error">Upload</Button>
      <Button variant="warning">Upload</Button>
    </Stack>
  )
}
