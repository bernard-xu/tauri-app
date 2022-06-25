import axios from "axios";

export const http = axios.create({
  baseURL: "https://localhost:3000",
  timeout: 1000,
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    let data = response.data;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
