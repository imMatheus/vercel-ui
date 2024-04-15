import { Stack } from "@/registry/default/ui/stack"
import { Text } from "@/registry/default/ui/text"

export default function TextVariants() {
  return (
    <Stack gap={2}>
      {[
        "heading-72",
        "heading-64",
        "heading-56",
        "heading-48",
        "heading-40",
        "heading-32",
        "heading-24",
        "heading-20",
        "heading-16",
        "button-16",
        "button-14",
        "button-12",
        "label-20",
        "label-18",
        "label-16",
        "label-14",
        "label-13",
        "label-12",
        "copy-24",
        "copy-20",
        "copy-18",
        "copy-16",
        "copy-14",
        "copy-13",
      ].map((variant) => {
        return (
          <Text
            key={variant}
            transform="capitalize"
            size={variant as "label-16"}
          >
            {variant.replace("-", " ")}
          </Text>
        )
      })}
    </Stack>
  )
}
