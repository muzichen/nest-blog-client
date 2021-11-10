import axiosInstance from "."

export const fetchPosts = () => {
  return axiosInstance.get('/post')
}

export const fetchPost = (id: string) => {
  return axiosInstance.get('/post', {
    params: {
      id,
    }
  })
}