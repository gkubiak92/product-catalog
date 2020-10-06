import { ReduxProvider } from 'providers/ReduxProvider/ReduxProvider';
import React from 'react';

import { fireEvent, getByText, renderWithRedux } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByLabelText } = renderWithRedux(<Login />);
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });
  test('button should be disabled at start', async () => {
    const { getByText } = renderWithRedux(<Login />);
    const loginButton = getByText('Log in').parentNode;
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();
  });
  test('button should be enabled when user and password are filled', async () => {
    const { container, getByText } = renderWithRedux(<Login />);
    const loginButton = getByText('Log in').parentNode;
    expect(loginButton).toBeInTheDocument();
    const usernameField = container.querySelector('#username');
    const passwordField = container.querySelector('#password');
    fireEvent.change(usernameField!, { target: { value: 'testuser' } });
    fireEvent.change(passwordField!, { target: { value: 'password' } });
    expect(loginButton).toBeEnabled();
  });
});
