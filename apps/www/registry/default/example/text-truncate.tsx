import { Text } from "@/registry/default/ui/text"

export default function TextTruncate() {
  return (
    <div style={{ maxWidth: 100 }}>
      <Text size={16} truncate>
        The Evil Rabbit jumps.
      </Text>
    </div>
  )
}
