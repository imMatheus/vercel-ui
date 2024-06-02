import { LoadingDots } from "@/registry/default/ui/loading-dots"
import { Text } from "@/registry/default/ui/text"

export default function LoadingDotsWithText() {
  return (
    <LoadingDots size={4}>
      <Text color="gray-900">Loading</Text>
    </LoadingDots>
  )
}
