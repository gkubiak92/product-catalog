import { ReduxProvider } from 'providers/ReduxProvider/ReduxProvider';
import React from 'react';

import { renderWithRedux } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByLabelText } = renderWithRedux(<Login />);

    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });
});
