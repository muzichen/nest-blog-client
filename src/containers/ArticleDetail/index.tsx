import { useEffect } from "react";
import { useParams } from "react-router";
import tw from "twin.macro";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
import Contact from "../../components/Contact";
import Marginer from "../../components/Marginer";
import RelatedArticles from "../../components/RelatedArticles";
import {
    fetchPost,
    selectCurrentPost,
} from "../../stores/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import Comments from "../../components/Comments";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

const ArticleDetailContainer = tw.div`
  flex
  flex-col
  w-full
  items-center
`;

const ArticleDetailWrapper = tw.article`
  w-3/5
  py-12
  px-16
  border
  border-black
`;

const ArticleTimeContainer = tw.div`
  text-gray-600
`;

const ArticleTitle = tw.h1`
  font-bold
  text-5xl
  py-5
`;
const ArticleSubTitle = tw.h2`
  font-bold
  text-base
`;

const ArticleThumbnail = tw.div`
  w-full
  h-96
  bg-red-100
  my-8
`;

const ArticleDetail = (): JSX.Element => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const currentPost = useAppSelector(selectCurrentPost);
    const postStatus = useAppSelector((state) => state.posts.status);

    useEffect(() => {
        if (id) {
            dispatch(fetchPost(id));
        }
    }, [dispatch, id]);

    if (postStatus === "loading") return <h1>Loading</h1>;

    return postStatus === "succssed" ? (
        <ArticleDetailContainer>
            <Marginer direction="vertical" margin={60} />
            <ArticleDetailWrapper>
                <ArticleTimeContainer>
                    {dayjs().from(currentPost?.createdAt)}
                </ArticleTimeContainer>
                <ArticleTitle>{currentPost?.title}</ArticleTitle>
                <ArticleSubTitle>
                    这是subtitle这是subtitle这是subtitle
                    这是subtitle这是subtitle这是subtitle
                    这是subtitle这是subtitle这是subtitle
                </ArticleSubTitle>
                <ArticleThumbnail />
                <RelatedArticles />
                <Comments postId={id as string} />
            </ArticleDetailWrapper>
            <Contact />
        </ArticleDetailContainer>
    ) : (
        <></>
    );
};

export default ArticleDetail;
