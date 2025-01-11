import axios from 'axios';
import Config from 'react-native-config';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 10000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
