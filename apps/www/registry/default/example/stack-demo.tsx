import { Stack } from "@/registry/default/ui/stack"

export default function Component(): JSX.Element {
  return (
    <Stack gap={3}>
      <div className="h-12 w-12 rounded-md bg-gray-1000" />
      <div className="h-12 w-12 rounded-md bg-gray-1000" />
      <div className="h-12 w-12 rounded-md bg-gray-1000" />
    </Stack>
  )
}
