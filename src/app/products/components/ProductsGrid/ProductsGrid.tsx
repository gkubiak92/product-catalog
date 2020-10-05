import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import NoSearchResult from 'components/NoSearchResult/NoSearchResult';
import ProductCard from 'components/ProductCard/ProductCard';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActualPage, getPagesCount } from 'redux/products/products.selectors';
import { setPage } from 'redux/products/products.slice';
import { RootState } from 'redux/rootReducer';
import { ProductsGridProps } from './ProductsGrid.types';
import { useStyles } from './styles';

const ProductsGrid = ({ products }: ProductsGridProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pagesCount = useSelector<RootState, number>(getPagesCount);
  const actualPage = useSelector<RootState, number>(getActualPage);

  const handlePageChange = (event: any, value: number) => {
    dispatch(setPage(value));
  };

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
      <Grid container justify='center'>
        <Grid item>
          <Pagination
            count={pagesCount}
            page={actualPage}
            onChange={handlePageChange}
            color='primary'
            variant='text'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsGrid;
