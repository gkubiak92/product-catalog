import { Product } from 'api/api.types';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string;
}
