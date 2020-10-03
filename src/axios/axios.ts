import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://join-tsh-api-staging.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
