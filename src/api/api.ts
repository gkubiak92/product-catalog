import axios from 'axios';
import { GetProductParams, LoginResponse, GetProductsResponse } from './api.types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = (username: string, password: string) =>
  api.post<LoginResponse>('/auth/login', { username, password });

const getProducts = (params?: GetProductParams) =>
  api.get<GetProductsResponse>('/product', {
    params: {
      ...params,
    },
  });

export default { login, getProducts };
