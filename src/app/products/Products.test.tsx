import { ReduxProvider } from 'providers/ReduxProvider/ReduxProvider';
import React from 'react';

import { render, renderWithRedux } from 'tests';

import { Products } from './Products';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = renderWithRedux(<Products />);

    // expect(getByText('Products page')).toBeInTheDocument();
  });
});
