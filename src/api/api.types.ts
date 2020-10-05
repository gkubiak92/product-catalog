export interface LoginResponse {
  access_token: string;
}

export interface GetProductsResponse {
  items: Product[];
  itemCount: number;
  totalItems: number;
  pageCount: number;
  next: string;
  previous: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}

export interface GetProductParams {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean;
  active?: boolean;
}
