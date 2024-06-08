import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteAction() {
  return (
    <Stack align="flex-start" gap={6}>
      <Note action={<Button size="small">Upgrade</Button>}>
        This note details some information.
      </Note>
      <Note action={<Button size="small">Upgrade</Button>}>
        This note details a large amount information that could potentially wrap
        into two or more lines, forcing the height of the Note to be larger.
      </Note>
    </Stack>
  )
}
