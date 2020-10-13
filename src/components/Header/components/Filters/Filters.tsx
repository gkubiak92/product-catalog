import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { isActiveChecked, isPromoChecked } from 'redux/products/products.selectors';
import { toggleActiveParam, togglePromoParam } from 'redux/products/products.slice';
import { RootState } from 'redux/rootReducer';
import Filter from './Filter/Filter';
import { useStyles } from './styles';

const Filters = () => {
  const classes = useStyles();
  const activeChecked = useSelector<RootState, boolean>(isActiveChecked);
  const promoChecked = useSelector<RootState, boolean>(isPromoChecked);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleActiveCheck = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(toggleActiveParam(checked));
  };

  const handlePromoCheck = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(togglePromoParam(checked));
  };

  return (
    <div id='filters' className={classes.filtersContainer}>
      <Filter name={t('active')} checked={activeChecked} handleChange={handleActiveCheck} />
      <Filter name={t('promo')} checked={promoChecked} handleChange={handlePromoCheck} />
    </div>
  );
};

export default Filters;
