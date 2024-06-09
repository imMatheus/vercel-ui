import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteDemo() {
  return (
    <Stack gap={6}>
      <Note type="error">This note details some error information.</Note>
      <Note action={<Button size="small">Upgrade</Button>} type="error">
        This note details some error information.
      </Note>
      <Note fill type="error">
        This filled note details some error information.
      </Note>
      <Note action={<Button size="small">Upgrade</Button>} fill type="error">
        This filled note details some error information.
      </Note>
    </Stack>
  )
}
