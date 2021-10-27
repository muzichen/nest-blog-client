import tw from "twin.macro";
import NavItems from "../../components/NavItems";

const HeaderContainer = tw.div`
  flex
  flex-col
  w-full
  items-center
`

const HeaderWrapper = tw.div`
  w-3/5
`

const LogoContainer = tw.div`
  w-full
`

const CaptionContainer = tw.div`
  text-2xl
  py-8
  text-center
`

const TitleContainer = tw.h1`
  font-bold
  text-6xl
  text-center
  pb-8
`

const NavContainer = tw.div`
  w-full
  h-16
  flex
  justify-center
  border-black
  border-t
  border-b
`

const NavWrapper = tw.nav`
  w-3/5
  h-full
`

const Header = ():JSX.Element => {
  return <HeaderContainer>
    <HeaderWrapper>
      <LogoContainer>
        <CaptionContainer>EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.</CaptionContainer> 
        <TitleContainer>Train Of Thought</TitleContainer>
      </LogoContainer>
    </HeaderWrapper>
    <NavContainer>
      <NavWrapper>
        <NavItems />
      </NavWrapper>
    </NavContainer>
  </HeaderContainer>
}

export default Header;