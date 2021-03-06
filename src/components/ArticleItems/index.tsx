import styled from "styled-components";
import tw from "twin.macro";
import { HeartIcon } from '@heroicons/react/outline';
import Marginer from "../Marginer";
import { Post } from "../../models";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import { useNavigate } from "react-router";

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');
interface ArticleProps {
  article: Post
}

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

const ArticleItems = ({ article }: ArticleProps): JSX.Element => {
  const navigate = useNavigate();

  const viewArticle = (articleId: string) => {
    navigate(`/article/${articleId}`);
  }

  return <ArticleItemsContainer>
    <ArticlesItemsBox>
      <Image>
        <img src="test" alt="" />
      </Image>
    </ArticlesItemsBox>
    <ArticlesItemsBox>
      <ArticleTime>
        {dayjs().from(article.createdAt)}
      </ArticleTime>
      <ArticleTitle onClick={() => { viewArticle(article._id) }}>
        {article.title}
      </ArticleTitle>
      <ArticleSummary>
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences andCreate a blog post subtitle that summarizes your post in a few short, punchy sentences and
      </ArticleSummary>
      <Marginer direction="vertical" margin="80px" />
      <ArticleViews>
        <span>{article.views || 0} views</span>
        <span>{article.commentsCount || 0} comments</span>
        <ArticleLikes>
          {article.likes || 0}
          <HeartIcon className="h-3 w-3 text-red-500 ml-1" />
        </ArticleLikes>
      </ArticleViews>
    </ArticlesItemsBox>
  </ArticleItemsContainer>
}

export default ArticleItems;