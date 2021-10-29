import tw from "twin.macro";

const RelatedArticlesContainer = tw.div`
  w-full
`;

const RelatedArticlesTop = tw.div`
  w-full
  h-12
  flex
  items-center
`;

const RelatedArticlesTopTitle = tw.span`
  text-gray-500
  text-sm
`;

const RelatedArticlesTopAction = tw(RelatedArticlesTopTitle)`
  cursor-pointer
  margin-left[auto]
`;

const RelatedArticlesList = tw.ul`
  w-full
  flex
  flex-row
  flex-nowrap
  justify-between
  h-48
`

const RelatedArticlesItem = tw.li`
  h-full
  border
  border-black
  width[30%]
  flex
  flex-col
  justify-end
`

const RelatedArticleThumbnail = tw.div`
  flex-1
  bg-black
`

const RelatedArticleTitle = tw.h2`
  flex
  justify-center
  items-center
  h-16
  font-bold
  text-base
  py-3
`

const RelatedArticles = (): JSX.Element => {
    return (
        <RelatedArticlesContainer>
            <RelatedArticlesTop>
                <RelatedArticlesTopTitle>Related Posts</RelatedArticlesTopTitle>
                <RelatedArticlesTopAction>See All</RelatedArticlesTopAction>
            </RelatedArticlesTop>
            <RelatedArticlesList>
              <RelatedArticlesItem>
                <RelatedArticleThumbnail></RelatedArticleThumbnail>
                <RelatedArticleTitle>Back to Fiction: What I'm Reading This Summer</RelatedArticleTitle>
              </RelatedArticlesItem>
              <RelatedArticlesItem>
                <RelatedArticleThumbnail></RelatedArticleThumbnail>
                <RelatedArticleTitle>Back to Fiction: What I'm Reading This Summer</RelatedArticleTitle>
              </RelatedArticlesItem>
              <RelatedArticlesItem>
                <RelatedArticleThumbnail></RelatedArticleThumbnail>
                <RelatedArticleTitle>Back to Fiction: What I'm Reading This Summer</RelatedArticleTitle>
              </RelatedArticlesItem>
            </RelatedArticlesList>
        </RelatedArticlesContainer>
    );
};

export default RelatedArticles;
