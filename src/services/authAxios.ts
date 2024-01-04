import axios from 'axios';
import { BASE_URL } from '../constants';

const authAxios = axios.create({
   baseURL: BASE_URL,
   timeout: 10000,
});

authAxios.interceptors.request.use(async (config) => {
   const userToken = localStorage.getItem('userToken');
   if (userToken) {
       const token = `Bearer ${userToken}`;
       config.headers.Authorization = token;
   }
   return config;
});

export default authAxios;