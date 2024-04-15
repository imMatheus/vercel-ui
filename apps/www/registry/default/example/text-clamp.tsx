import { Text } from "@/registry/default/ui/text"

export default function TextClamp() {
  return (
    <div style={{ maxHeight: 100 }}>
      <Text size={16} truncate={2}>
        The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps. The
        Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps. The
        Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps. The
        Evil Rabbit jumps. The Evil Rabbit jumps.
      </Text>
    </div>
  )
}
