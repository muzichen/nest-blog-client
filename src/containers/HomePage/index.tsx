import tw from "twin.macro";
import Door from "./door";
import Header from "./header";

const HomePageContainer = tw.div`
  w-full
  flex
  flex-col
`

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <Header />
      <Door />
    </HomePageContainer>
  )
}

export default HomePage;