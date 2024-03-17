import { ChevronRight } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonIcon() {
  return (
    <Button
      variant="outline"
      // TODO change this to icon button
      size="sm"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}
