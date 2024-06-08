import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteCyan() {
  return (
    <Stack gap={6}>
      <Note type="cyan">This note details some success information.</Note>
      <Note action={<Button size="small">Upgrade</Button>} type="cyan">
        This note details some success information.
      </Note>
      <Note fill type="cyan">
        This filled note details some success information.
      </Note>
      <Note action={<Button size="small">Upgrade</Button>} fill type="cyan">
        This filled note details some success information.
      </Note>
    </Stack>
  )
}
