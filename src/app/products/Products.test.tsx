import React from 'react';

import { renderWithRedux } from 'tests';

import { Products } from './Products';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Products', () => {
  test('Displays layout header', async () => {
    const { container } = renderWithRedux(
      <Router>
        <Products />
      </Router>
    );

    expect(container.querySelector('.MuiAppBar-root')).toBeInTheDocument();
  });
});
