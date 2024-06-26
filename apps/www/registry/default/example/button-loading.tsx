import { Button } from "@/registry/default/ui/button"
import { Stack } from "@/registry/default/ui/stack"

export default function ButtonLoading() {
  return (
    <Stack
      align="start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Button loading size="small">
        Upload
      </Button>
      <Button loading>Upload</Button>
      <Button loading size="large">
        Upload
      </Button>
    </Stack>
  )
}
