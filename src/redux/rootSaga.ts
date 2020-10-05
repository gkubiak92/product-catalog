import { all, call } from 'redux-saga/effects';
import { authSagas } from './auth/auth.sagas';
import { productsSagas } from './products/products.sagas';

export default function* rootSaga() {
  yield all([call(authSagas), call(productsSagas)]);
}
