import {
  Menu,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"
import { Stack } from "@/registry/default/ui/stack"

export default function MenuPositionDemo() {
  return (
    <Stack direction="row" gap={4}>
      <MenuContainer>
        <MenuButton>Left Start</MenuButton>
        <Menu width={200} side="left" align="start">
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
        </Menu>
      </MenuContainer>
      <MenuContainer>
        <MenuButton>Top Start</MenuButton>
        <Menu width={200} side="top" align="start">
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
        </Menu>
      </MenuContainer>
      <MenuContainer>
        <MenuButton>Bottom Start</MenuButton>
        <Menu width={200} side="bottom" align="start">
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
        </Menu>
      </MenuContainer>
      <MenuContainer>
        <MenuButton>Right Start</MenuButton>
        <Menu width={200} side="right" align="start">
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
        </Menu>
      </MenuContainer>
    </Stack>
  )
}
