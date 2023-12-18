import axios, { Axios } from "axios";

const jwt = localStorage.getItem("authKey");

export const axiosAuth: Axios = axios.create({
  baseURL: "http://localhost:8800/v1/api",
  timeout: 10000,
});

export const axiosApi: Axios = axios.create({
  baseURL: "http://localhost:8800/v1/api",
  timeout: 10000,
  headers: {
    Authorization: `${jwt}`,
  },
});
