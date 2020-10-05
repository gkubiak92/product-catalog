import { Grid } from '@material-ui/core';
import { Product } from 'api/api.types';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import ProductPreview from 'components/ProductCard/components/ProductPreview/ProductPreview';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isProductsLoading, selectProducts } from 'redux/products/products.selectors';
import { fetchProductsStart } from 'redux/products/products.slice';
import { RootState } from 'redux/rootReducer';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector<RootState, Product[]>(selectProducts);
  const productsLoading = useSelector<RootState, boolean>(isProductsLoading);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <Grid container component='main' direction='column'>
      <Header />
      {productsLoading ? <Loader /> : <ProductsGrid products={products} />}
      <ProductPreview />
    </Grid>
  );
};
