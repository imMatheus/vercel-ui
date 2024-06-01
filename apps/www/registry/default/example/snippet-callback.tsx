import { Snippet } from "@/registry/default/ui/snippet"

export default function SnippetCallback() {
  return (
    <Snippet
      onCopy={() => alert("You copied the text!")}
      text="npm init next-app"
      width="300px"
    />
  )
}
