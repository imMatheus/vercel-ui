import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Stack } from "@/registry/default/ui/stack"

export default function ButtonPrefix() {
  return (
    <Stack
      align="start"
      direction={{ sm: "column", md: "row" }}
      gap={4}
      justify="space-between"
    >
      <Button prefix={<ArrowLeft className="w-4 h-4" />}>Upload</Button>
      <Button suffix={<ArrowRight className="w-4 h-4" />}>Upload</Button>
      <Button
        prefix={<ArrowLeft className="w-4 h-4" />}
        suffix={<ArrowRight className="w-4 h-4" />}
      >
        Upload
      </Button>
    </Stack>
  )
}
