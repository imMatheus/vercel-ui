import { Stack } from "@/registry/default/ui/stack"

export default function Component(): JSX.Element {
  return (
    <Stack gap={3}>
      <div className="h-12 w-12 rounded-md bg-gray-1000 p-2">
        <div className="h-full w-full rounded bg-gray-800" />
      </div>
      <div className="h-12 w-12 rounded-md bg-gray-1000 p-2">
        <div className="h-full w-full rounded bg-gray-800" />
      </div>
      <div className="h-12 w-12 rounded-md bg-gray-1000 p-2">
        <div className="h-full w-full rounded bg-gray-800" />
      </div>
    </Stack>
  )
}
