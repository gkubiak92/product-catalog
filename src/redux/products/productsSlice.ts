import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'api/api.types';
import { ProductsState } from './productsSlice.types';

const initialState: ProductsState = {
  products: [],
  searchParams: {
    limit: 8,
    active: true,
  },
  loading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.loading = false;
      state.error = '';
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    toggleActiveParam(state, action: PayloadAction<boolean>) {
      state.searchParams = {
        ...state.searchParams,
        active: action.payload,
      };
      state.loading = true;
    },
    togglePromoParam(state, action: PayloadAction<boolean>) {
      state.searchParams = {
        ...state.searchParams,
        promo: action.payload,
      };
      state.loading = true;
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
  toggleActiveParam,
  togglePromoParam,
  setSearchParam,
} = productsSlice.actions;

export default productsSlice.reducer;
