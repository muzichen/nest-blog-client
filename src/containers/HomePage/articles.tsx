import { useEffect } from "react";
import tw from "twin.macro";
import ArticleItems from "../../components/ArticleItems";
import {
    fetchPosts,
    selectAllPosts,
} from "../../stores/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";

const ArticlesContainer = tw.div`
  w-full
  flex
  justify-center
  pt-5
`;

const ArticlesWrapper = tw.ul`
  w-3/5
  list-none
`;

const Articles = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectAllPosts);
    const postsStatus = useAppSelector((state) => state.posts.status);

    useEffect(() => {
      if (postsStatus === 'idle') {
        dispatch(fetchPosts({
          pageSize: 3,
          currentPage: 1
        }));
      }
    }, [dispatch, postsStatus]);

    if (postsStatus === "loading") return <h1>Loading...</h1>;
    if (postsStatus === "succssed")
        return (
            <ArticlesContainer>
                <ArticlesWrapper>
                    {posts.map(((post, index) => {
                      return <ArticleItems article={post} />
                    }))}
                </ArticlesWrapper>
            </ArticlesContainer>
        );
    return <></>;
};

export default Articles;
