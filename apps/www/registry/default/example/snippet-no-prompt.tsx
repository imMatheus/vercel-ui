import { Snippet } from "@/registry/default/ui/snippet"

export default function SnippetNoPrompt() {
  return <Snippet prompt={false} text="npm init next-app" width="300px" />
}
