import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteDemo() {
  return (
    <Stack gap={6}>
      <Note type="secondary">
        This note details some secondary information.
      </Note>
      <Note action={<Button size="small">Upgrade</Button>} type="secondary">
        This note details some secondary information.
      </Note>
      <Note fill type="secondary">
        This filled note details some secondary information.
      </Note>
      <Note
        action={<Button size="small">Upgrade</Button>}
        fill
        type="secondary"
      >
        This filled note details some secondary information.
      </Note>
    </Stack>
  )
}
