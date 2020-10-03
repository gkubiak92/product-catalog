import React from 'react';
import Filter from './Filter/Filter';

const Filters = () => (
  <>
    <Filter name='active' checked={true} onChecked={() => {}} />
    <Filter name='promo' checked={true} onChecked={() => {}} />
  </>
);

export default Filters;
