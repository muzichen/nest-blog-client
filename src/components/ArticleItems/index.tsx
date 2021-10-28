import styled from "styled-components";
import tw from "twin.macro";
import { HeartIcon } from '@heroicons/react/outline';
import Marginer from "../Marginer";

const ArticleItemsContainer = tw.li`
  w-full
  flex
  flex-row
  mb-6
`

const ArticlesItemsBox = tw.div`
  first:w-2/5
  first:bg-black
  first:flex-shrink-0
  h-80
  last:py-3.5
  last:px-6
  last:flex
  last:flex-col
`

const Image = styled.div`
  ${tw`
    w-full
    h-full
  `}
  img {
    width: auto;
    height: 100%;
  }
`

const ArticleTime = tw.span`
  text-gray-600
  text-xs
`

const ArticleTitle = tw.h1`
  py-6
  text-xl
  font-bold
  cursor-pointer
`

const ArticleSummary = tw.p`
  line-clamp-3
  text-gray-600
`

const ArticleViews = styled.div`
  ${tw`
    w-full
    border-t
    border-gray-200
    flex
    flex-row
    flex-1
    items-center
  `}
  span {
    ${tw`
      text-xs
      text-gray-400
      px-4
    `}
  }
`

const ArticleLikes = styled.span`
  margin-left: auto;
  ${tw`
    flex
    items-center
    cursor-pointer
  `}
`

const ArticleItems = (): JSX.Element => {
  return <ArticleItemsContainer>
    <ArticlesItemsBox>
      <Image>
        <img src="test" alt="" />
      </Image>
    </ArticlesItemsBox>
    <ArticlesItemsBox>
      <ArticleTime>
        a day ago . 1min
      </ArticleTime>
      <ArticleTitle>
      这是文章标题这是文章标题这是
      </ArticleTitle>
      <ArticleSummary>
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences andCreate a blog post subtitle that summarizes your post in a few short, punchy sentences and
      </ArticleSummary>
      <Marginer direction="vertical" margin="80px" />
      <ArticleViews>
        <span>0 views</span>
        <span>0 comments</span>
        <ArticleLikes>
          2
          <HeartIcon className="h-3 w-3 text-red-500 ml-1" />
        </ArticleLikes>
      </ArticleViews>
    </ArticlesItemsBox>
  </ArticleItemsContainer>
}

export default ArticleItems;