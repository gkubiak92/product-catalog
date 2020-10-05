import { GetProductParams, Product } from 'api/api.types';

export interface ProductsState {
  products: Product[];
  searchParams: GetProductParams;
  loading: boolean;
  error: string;
}
