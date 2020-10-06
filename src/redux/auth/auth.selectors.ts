import { RootState } from 'redux/rootReducer';
import { createSelector } from 'reselect';

const authSelector = (state: RootState) => state.auth;

export const isAuthenticated = createSelector(authSelector, ({ isAuth }) => isAuth);
