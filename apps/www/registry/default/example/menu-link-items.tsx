import {
  Menu,
  MenuButton,
  MenuContainer,
  MenuLink,
} from "@/registry/default/ui/menu"

export default function MenuLinksDemo() {
  return (
    <>
      <MenuContainer>
        <MenuButton>Actions</MenuButton>
        <Menu width={200}>
          <MenuLink href="/design/menu#custom-trigger">One</MenuLink>
          <MenuLink href="#">Two</MenuLink>
          <MenuLink href="#">Three</MenuLink>
        </Menu>
      </MenuContainer>
      <div className="group">
        <p className="bg-red-400">class</p>
        <p className="!no-underline">heej</p>
      </div>
    </>
  )
}
