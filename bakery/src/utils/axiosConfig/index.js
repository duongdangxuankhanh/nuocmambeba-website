import axios from 'axios';

const isLocalHost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

const defaultBaseURL = isLocalHost
  ? 'http://localhost:2006'
  : 'https://web-bakery.onrender.com';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || defaultBaseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
