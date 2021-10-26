import tw from "twin.macro";

const NavItemsContainer = tw.ul`
  flex
  list-none
  h-full
`

const NavItem = tw.li`
  flex-1
  h-full
  text-lg
  flex
  justify-center
  items-center
  border-r
  border-black
  first:border-l
`



const NavItems = (): JSX.Element => {
  return <NavItemsContainer>
    <NavItem>fafas</NavItem>
    <NavItem>fafas</NavItem>
    <NavItem>fafas</NavItem>
    <NavItem>fafas</NavItem>
  </NavItemsContainer>
}

export default NavItems;