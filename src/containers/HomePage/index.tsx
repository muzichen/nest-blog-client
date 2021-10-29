import { RouteComponentProps } from "@reach/router";
import tw from "twin.macro";
import Marginer from "../../components/Marginer";
import Articles from "./articles";
import Contact from "./contact";

const HomePageContainer = tw.div`
  w-full
  flex
  flex-col
  px-4
`

const HomePage = (props: RouteComponentProps): JSX.Element => {
  return (
    <HomePageContainer>
      <Articles />
      <Marginer direction="vertical" margin={100} />
      <Contact />
    </HomePageContainer>
  )
}

export default HomePage;