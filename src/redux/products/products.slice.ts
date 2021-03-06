import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetProductParams, GetProductsResponse } from 'api/api.types';
import { ProductsState } from './products.types';

const initialSearchParams: GetProductParams = {
  limit: 8,
};

const initialState: ProductsState = {
  products: [],
  searchParams: {
    ...initialSearchParams,
  },
  itemCount: 0,
  totalItems: 0,
  pageCount: 0,
  next: '',
  previous: '',
  loading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {},
    fetchProductsSuccess(state, action: PayloadAction<GetProductsResponse>) {
      const { items, itemCount, totalItems, pageCount, next, previous } = action.payload;
      state.products = items;
      state.itemCount = itemCount;
      state.totalItems = totalItems;
      state.pageCount = pageCount;
      state.next = next;
      state.previous = previous;
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
        page: 1,
        active: action.payload ? true : undefined,
      };
    },
    togglePromoParam(state, action: PayloadAction<boolean>) {
      state.searchParams = {
        ...state.searchParams,
        page: 1,
        promo: action.payload ? true : undefined,
      };
    },
    setSearchParam(state, action: PayloadAction<string>) {
      state.searchParams = {
        ...state.searchParams,
        page: 1,
        search: action.payload,
      };
    },
    setPage(state, action: PayloadAction<number>) {
      state.searchParams = {
        ...state.searchParams,
        page: action.payload,
      };
    },
    clearSearchParams(state) {
      state.searchParams = {
        limit: 8,
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
  setPage,
  clearSearchParams,
} = productsSlice.actions;

export default productsSlice.reducer;
