import Header from 'components/layout/header/Header';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductsStart } from 'redux/products/productsSlice';

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart({ limit: 8 }));
  }, [dispatch]);

  return (
    <>
      <Header />
    </>
  );
};
