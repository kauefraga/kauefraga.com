import axios from "axios";

export const api = axios.create({
  baseURL: process.env.DEV
    ? "http://localhost:3000/api/v1"
    : "https://kauefraga.vercel.app/api/v1",
});
