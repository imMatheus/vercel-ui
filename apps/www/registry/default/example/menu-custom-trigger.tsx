import { Cloud, Plus, Users } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenuShortcut,
  Menu,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"

export default function DropdownMenuDemo() {
  return (
    <MenuContainer>
      <MenuButton>custom trigger</MenuButton>
      <Menu width={200}>
        <MenuItem onClick={() => alert("one")}>One</MenuItem>
        <MenuItem onClick={() => alert("one")}>Two</MenuItem>
        <MenuItem onClick={() => alert("one")}>Three</MenuItem>
        <MenuItem onClick={() => alert("one")} type="error">
          Delete
        </MenuItem>
      </Menu>
    </MenuContainer>
  )
}
