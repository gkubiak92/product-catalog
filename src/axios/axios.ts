import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://join-tsh-api-staging.herokuapp.com',
});

export default axiosInstance;
