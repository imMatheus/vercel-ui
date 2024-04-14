import {
  Menu,
  MenuButton,
  MenuContainer,
  MenuLink,
} from "@/registry/default/ui/menu"

export default function MenuLinksDemo() {
  return (
    <MenuContainer>
      <MenuButton>Actions</MenuButton>
      <Menu width={200}>
        <MenuLink href="/design/menu#custom-trigger">One</MenuLink>
        <MenuLink href="#">Two</MenuLink>
        <MenuLink href="#">Three</MenuLink>
      </Menu>
    </MenuContainer>
  )
}
