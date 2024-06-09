import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteViolet() {
  return (
    <Stack gap={6}>
      <Note type="violet">This note details some warning information.</Note>
      <Note action={<Button size="small">Upgrade</Button>} type="violet">
        This note details some warning information.
      </Note>
      <Note fill type="violet">
        This filled note details some warning information.
      </Note>
      <Note action={<Button size="small">Upgrade</Button>} fill type="violet">
        This filled note details some warning information.
      </Note>
    </Stack>
  )
}
