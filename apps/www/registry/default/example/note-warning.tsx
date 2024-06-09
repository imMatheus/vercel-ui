import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteWarning() {
  return (
    <Stack gap={6}>
      <Note type="warning">This note details some warning information.</Note>
      <Note action={<Button size="small">Upgrade</Button>} type="warning">
        This note details some warning information.
      </Note>
      <Note fill type="warning">
        This filled note details some warning information.
      </Note>
      <Note action={<Button size="small">Upgrade</Button>} fill type="warning">
        This filled note details some warning information.
      </Note>
    </Stack>
  )
}
