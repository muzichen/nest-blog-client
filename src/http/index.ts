import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_PREFIX,
  timeout: 5000
});

export default axiosInstance;