import axiosInstance from "."
import ListFilterType from "../stores/listFilterType"

export const fetchPosts = (filter: ListFilterType = {}) => {
  return axiosInstance.get('/post', {
    params: {
      ...filter,
    }
  })
}

export const fetchPost = (id: string) => {
  return axiosInstance.get(`/post/${id}`)
}