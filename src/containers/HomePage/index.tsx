import tw from "twin.macro";
import Marginer from "../../components/Marginer";
import Articles from "./articles";
import Contact from "./contact";
import Header from "./header";

const HomePageContainer = tw.div`
  w-full
  flex
  flex-col
  px-4
`

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <Header />
      <Articles />
      <Marginer direction="vertical" margin={100} />
      <Contact />
    </HomePageContainer>
  )
}

export default HomePage;