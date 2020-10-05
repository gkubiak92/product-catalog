import { createSelector } from '@reduxjs/toolkit';
import { GetProductParams } from 'api/api.types';
import { RootState } from 'redux/rootReducer';

const productsSelector = (state: RootState) => state.products;

export const selectProducts = createSelector(productsSelector, ({ products }) => products);

export const selectSearchParams = createSelector(
  productsSelector,
  ({ searchParams }) => searchParams
);

export const selectSearchParam = (param: keyof GetProductParams) =>
  createSelector(selectSearchParams, (params) => params[param]);

export const getSearchText = createSelector(
  productsSelector,
  ({ searchParams }) => searchParams.search ?? ''
);

export const isActiveChecked = createSelector(selectSearchParam('active'), (param) => !!param);
export const isPromoChecked = createSelector(selectSearchParam('promo'), (param) => !!param);

export const isProductsLoading = createSelector(productsSelector, ({ loading }) => loading);

export const getPagesCount = createSelector(productsSelector, ({ pageCount }) => pageCount);

export const getActualPage = createSelector(
  productsSelector,
  ({ searchParams }) => searchParams.page ?? 1
);
