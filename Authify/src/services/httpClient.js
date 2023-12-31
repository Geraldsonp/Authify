import axios from 'axios';

const httpClient = axios.create({
    baseURL: "https://authentication-net-webapi-production.up.railway.app/api"
})

httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); 
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  });

export {httpClient};