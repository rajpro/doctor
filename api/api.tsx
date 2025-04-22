import axios from 'axios';

const API = axios.create({
  baseURL: 'http://api.odishadoctors.in/api/v1/', // replace with your API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;