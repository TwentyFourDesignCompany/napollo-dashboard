import axios from "axios";
import { loadFromStorage } from "./localStorage";

let headers = {};
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers,
  // timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const res = loadFromStorage("adminToken");
    config.headers.Authorization = `Bearer ${res}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
