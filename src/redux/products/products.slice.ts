import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetProductParams, Product } from 'api/api.types';
import { ProductsState } from './products.types';

const initialSearchParams: GetProductParams = {
  limit: 8,
  active: true,
};

const initialState: ProductsState = {
  products: [],
  searchParams: {
    ...initialSearchParams,
  },
  loading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {},
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.error = '';
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    toggleActiveParam(state, action: PayloadAction<boolean>) {
      state.searchParams = {
        ...state.searchParams,
        active: action.payload,
      };
    },
    togglePromoParam(state, action: PayloadAction<boolean>) {
      state.searchParams = {
        ...state.searchParams,
        promo: action.payload,
      };
    },
    setSearchParam(state, action: PayloadAction<string>) {
      state.searchParams = {
        ...state.searchParams,
        search: action.payload,
      };
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  setLoading,
  toggleActiveParam,
  togglePromoParam,
  setSearchParam,
} = productsSlice.actions;

export default productsSlice.reducer;
