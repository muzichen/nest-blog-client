import axiosInstance from "."

export const fetchPosts = () => {
  return axiosInstance.get('/post')
}