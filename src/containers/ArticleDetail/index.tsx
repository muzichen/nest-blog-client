import { RouteComponentProps } from "@reach/router";
import tw from "twin.macro";
import Marginer from "../../components/Marginer";
import RelatedArticles from "../../components/RelatedArticles";

const ArticleDetailContainer = tw.div`
  flex
  flex-col
  w-full
  items-center
`

const ArticleDetailWrapper = tw.article`
  w-3/5
  py-12
  px-16
  border
  border-black
`

const ArticleTimeContainer = tw.div`
  text-gray-600
`

const ArticleTitle = tw.h1`
  font-bold
  text-5xl
  py-5
`
const ArticleSubTitle = tw.h2`
  font-bold
  text-base
`

const ArticleThumbnail = tw.div`
  w-full
  h-96
  bg-red-100
  my-8
`

const ArticleDetail = (props: RouteComponentProps): JSX.Element => {
  return <ArticleDetailContainer>
      <Marginer direction="vertical" margin={60} />
      <ArticleDetailWrapper>
        <ArticleTimeContainer>
          4 days ago . 1 min read
        </ArticleTimeContainer>
        <ArticleTitle>
          Best Podcasts to Listen to When Traveling
        </ArticleTitle>
        <ArticleSubTitle>
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.
        </ArticleSubTitle>
        <ArticleThumbnail />
        <RelatedArticles />
      </ArticleDetailWrapper>
  </ArticleDetailContainer>
}

export default ArticleDetail;