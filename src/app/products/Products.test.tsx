import React from 'react';

import { renderWithRedux } from 'tests';

import { Products } from './Products';

describe('Products', () => {
  test('Displays layout header', async () => {
    const { container } = renderWithRedux(<Products />);

    expect(container.querySelector('.MuiAppBar-root')).toBeInTheDocument();
  });
});
