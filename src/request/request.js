import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://iamhyunjun.shop",
});
axiosInstance.defaults.withCredentials = true;
