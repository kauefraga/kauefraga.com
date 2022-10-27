import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api/v1'
  : 'https://kauefraga.vercel.app/api/v1';

const api = axios.create({
  baseURL
});

export {
  api,
  baseURL as baseApiURL
};
