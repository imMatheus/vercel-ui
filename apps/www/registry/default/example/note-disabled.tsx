import { Button } from "@/registry/default/ui/button"
import { Note } from "@/registry/default/ui/note"
import { Stack } from "@/registry/default/ui/stack"

export default function NoteDisabled() {
  return (
    <Stack gap={6}>
      <Note
        action={
          <Button size="small" disabled>
            Upgrade
          </Button>
        }
        disabled
        fill
        type="warning"
      >
        This note details a warning.
      </Note>
    </Stack>
  )
}
