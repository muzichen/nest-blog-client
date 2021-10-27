import tw from "twin.macro";
import Articles from "./articles";
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
      {/* <Door /> */}
      <Articles />
    </HomePageContainer>
  )
}

export default HomePage;