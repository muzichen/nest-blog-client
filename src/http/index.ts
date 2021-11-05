import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_PREFIX,
  timeout: 5000
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error) => {
  // Any status code that falls outside the range of 2xx couse this function to trigger
  return Promise.reject(error)
})

export default axiosInstance;