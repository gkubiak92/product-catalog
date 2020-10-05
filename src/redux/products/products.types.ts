import { GetProductParams, Product } from 'api/api.types';

export interface ProductsState {
  products: Product[];
  itemCount: number;
  totalItems: number;
  pageCount: number;
  next: string;
  previous: string;
  searchParams: GetProductParams;
  loading: boolean;
  error: string;
}
