import { useEffect } from "react";
import {
    fetchComments,
    selectAllComments,
} from "../../stores/features/comments/commentsSlice";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";

interface CommentsProps {
    postId: string;
}

const Comments = ({ postId }: CommentsProps) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(selectAllComments);
    const status = useAppSelector((state) => state.comments.status);

    useEffect(() => {
        if (postId) {
            dispatch(fetchComments(postId));
        }
    }, [dispatch, postId]);

    if (status === "loading") return <h1>Loading</h1>;

    return status === "succssed" ? <div>
      <ul>
        {comments.filter(comment => {
          const { path } = comment;
          return path.length > 0 && path.split(',').length === 1;
        }).map(comment => <li>{comment.content}</li>)}
      </ul>
    </div> : <></>;
};

export default Comments;
