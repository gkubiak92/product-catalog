import { all, call } from 'redux-saga/effects';
import { authSagas } from './auth/authSagas';
import { productsSagas } from './products/productsSagas';

export default function* rootSaga() {
  yield all([call(authSagas), call(productsSagas)]);
}
