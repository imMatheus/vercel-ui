import { Stack } from "@/registry/default/ui/stack"

export default function Component(): JSX.Element {
  return (
    <Stack
      direction={{ sm: "column", lg: "row" }}
      gap={{ sm: 2, md: 5, xl: 12 }}
    >
      <div className="bg-gray-1000 h-12 w-12 rounded-md p-2" />
      <div className="bg-gray-1000 h-12 w-12 rounded-md p-2" />
      <div className="bg-gray-1000 h-12 w-12 rounded-md p-2" />
    </Stack>
  )
}
