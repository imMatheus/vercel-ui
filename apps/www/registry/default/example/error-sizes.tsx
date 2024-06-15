import { Error } from "@/registry/default/ui/error"
import { Stack } from "@/registry/default/ui/stack"

export default function ErrorSizes() {
  return (
    <Stack direction={{ sm: "column", md: "row" }} gap={6}>
      <Error size="small">This email is in use.</Error>
      <Error>This email is in use.</Error>
      <Error size="large">This email is in use.</Error>
    </Stack>
  )
}
