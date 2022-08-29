import axios from "axios";

export const api = axios.create({
  baseURL: process.env.DEV
    ? "https://kauefraga.vercel.app/api"
    : "http://localhost:3000/api/v1",
});
