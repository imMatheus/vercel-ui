import { ArrowUpCircle } from "lucide-react"

import { Input } from "@/registry/default/ui/input"
import { Stack } from "@/registry/default/ui/stack"

export default function Component(): JSX.Element {
  return (
    <Stack align="start" gap={6}>
      <Input
        aria-labelledby="Demo"
        placeholder="Default"
        prefix={<ArrowUpCircle />}
      />

      <Input
        aria-labelledby="Demo"
        placeholder="Default"
        suffix={<ArrowUpCircle />}
      />

      <Input
        aria-labelledby="Demo"
        placeholder="Default"
        prefix="https://"
        suffix=".com"
      />

      <Input
        aria-labelledby="Demo"
        placeholder="Default"
        prefix={<ArrowUpCircle />}
        prefixStyling={false}
        suffix={<ArrowUpCircle />}
        suffixStyling={false}
      />

      <Input
        aria-labelledby="Demo"
        placeholder="Default"
        prefix="vercel/"
        suffix={<ArrowUpCircle />}
        suffixContainer={false}
        suffixStyling={false}
      />
    </Stack>
  )
}
