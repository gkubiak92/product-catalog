import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/rootReducer';

const productsSelector = (state: RootState) => state.products;

export const selectProducts = createSelector(productsSelector, ({ products }) => products);

export const selectSearchParams = createSelector(
  productsSelector,
  ({ searchParams }) => searchParams
);
