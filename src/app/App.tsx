import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';

import { AppRoutes } from 'routing/AppRoutes';
import { Login } from './login/Login';

export const App = () => {
  const isAuth = useSelector<RootState, boolean>((state) => state.auth.isAuth);
  return isAuth ? <AppRoutes /> : <Login />;
};
