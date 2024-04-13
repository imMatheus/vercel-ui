import { Cloud, Plus, Users } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuShortcut,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"

export default function DropdownMenuDemo() {
  return (
    <MenuContainer>
      <MenuButton>Hello</MenuButton>
      <DropdownMenuContent className="w-56">
        <MenuItem>
          <Users className="mr-2 h-4 w-4" />
          <span>Team</span>
        </MenuItem>

        <MenuItem>
          <Plus className="mr-2 h-4 w-4" />
          <span>New Team</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </MenuItem>

        <MenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </MenuItem>
      </DropdownMenuContent>
    </MenuContainer>
  )
}
