import { RouteComponentProps } from "@reach/router";
import tw from "twin.macro";
import Contact from "../../components/Contact";
import Articles from "./articles";

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
      <Contact />
    </HomePageContainer>
  )
}

export default HomePage;