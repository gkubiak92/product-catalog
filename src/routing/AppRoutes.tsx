import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Products } from 'app/products/Products';
import { AppRoute } from './AppRoute.enum';
import { Login } from 'app/login/Login';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Products} />
      <Route path={AppRoute.login} exact component={Login} />
      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
