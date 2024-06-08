import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteDemo() {
  return (
    <Stack gap={6}>
      <Note type="success">This note details some success information.</Note>
      <Note action={<Button size="small">Upgrade</Button>} type="success">
        This note details some success information.
      </Note>
      <Note fill type="success">
        This filled note details some success information.
      </Note>
      <Note action={<Button size="small">Upgrade</Button>} fill type="success">
        This filled note details some success information.
      </Note>
    </Stack>
  )
}
