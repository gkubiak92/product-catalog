import { Grid } from '@material-ui/core';
import { Product } from 'api/api.types';
import Header from 'components/layout/header/Header';
import ProductCard from 'components/ProductCard/ProductCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/products/products.selectors';
import { fetchProductsStart } from 'redux/products/productsSlice';
import { RootState } from 'redux/rootReducer';
import { useStyles } from './styles';

export const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector<RootState, Product[]>(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <Grid container component='main' className={classes.root}>
      <Header />
      <Grid container className={classes.productsContainer}>
        {products.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
            <Grid container justify='center' alignItems='center'>
              <ProductCard product={p} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
