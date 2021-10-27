import tw from "twin.macro";
import ArticleItems from "../../components/ArticleItems";

const ArticlesContainer = tw.div`
  w-full
  flex
  justify-center
  pt-5
`

const ArticlesWrapper = tw.ul`
  w-3/5
  list-none
`



const Articles = (): JSX.Element => {
  return <ArticlesContainer>
    <ArticlesWrapper>
      <ArticleItems />
      <ArticleItems />
      <ArticleItems />
      <ArticleItems />
    </ArticlesWrapper>
  </ArticlesContainer>
}

export default Articles;