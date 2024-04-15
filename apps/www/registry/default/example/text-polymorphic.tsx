import { Text } from "@/registry/default/ui/text"

export default function TextPolymorphic() {
  return (
    <Text size={32}>
      {`<p>`} semantically, {`<h2>`} visually.
    </Text>
  )
}
