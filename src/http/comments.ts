import axiosInstance from ".";

interface CommentsFilter {
  postId?: string;
}

export const fetchComments = ({
  postId
}: CommentsFilter = {}) => {
  return axiosInstance.get('/comments', {
    params: {
      postId
    }
  })
}