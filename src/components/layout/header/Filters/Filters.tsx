import React from 'react';
import Filter from './Filter/Filter';
import { useStyles } from './styles';

const Filters = () => {
  const classes = useStyles();
  return (
    <div id='filters' className={classes.filtersContainer}>
      <Filter name='active' checked={true} onChecked={() => {}} />
      <Filter name='promo' checked={true} onChecked={() => {}} />
    </div>
  );
};

export default Filters;
