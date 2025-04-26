import { getToken } from '@/storage';
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://api.odishadoctors.in/api/v1/', // replace with your API
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  async (config) => {
    const token = await getToken("token");
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;