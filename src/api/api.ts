import axios from 'axios';
import { LoginResponse } from './api.types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = (username: string, password: string) =>
  api.post<LoginResponse>('/auth/login', { username, password });

export default { login };
