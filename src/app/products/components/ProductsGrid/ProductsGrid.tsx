import { Grid } from '@material-ui/core';
import NoSearchResult from 'components/NoSearchResult/NoSearchResult';
import ProductCard from 'components/ProductCard/ProductCard';
import React from 'react';
import { ProductsGridProps } from './ProductsGrid.types';
import { useStyles } from './styles';

const ProductsGrid = ({ products }: ProductsGridProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.productsContainer}>
      {products.length ? (
        products.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
            <Grid container justify='center' alignItems='center'>
              <ProductCard product={p} />
            </Grid>
          </Grid>
        ))
      ) : (
        <NoSearchResult />
      )}
    </Grid>
  );
};

export default ProductsGrid;
