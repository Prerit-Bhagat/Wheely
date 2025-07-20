// api.js (or axios.js)
import axios from "axios";
import { ACCESS_TOKEN } from "../Tokens.jsx"; // Import the ACCESS_TOKEN key

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use environment variable for API base URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token && !config.url.includes('/register') && !config.url.includes('/login')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api; // Export the axios instance for use in other components
