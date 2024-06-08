import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteDemo() {
  return (
    <Stack align="flex-start" direction={{ sm: "column", md: "row" }} gap={6}>
      <Note size="small">A small note.</Note>
      <Note>A default note.</Note>
      <Note size="large">A large note.</Note>
    </Stack>
  )
}
