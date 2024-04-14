import {
  Menu,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"

export default function DropdownMenuDemo() {
  return (
    <MenuContainer>
      <MenuButton>Actions</MenuButton>
      <Menu width={200}>
        <MenuItem onClick={() => undefined}>One</MenuItem>
        <MenuItem disabled onClick={() => undefined}>
          Two
        </MenuItem>
        <MenuItem disabled onClick={() => undefined}>
          Three
        </MenuItem>
        <MenuItem onClick={() => undefined} type="error">
          Delete
        </MenuItem>
      </Menu>
    </MenuContainer>
  )
}
