import api from 'api/api';
import { LoginResponse } from 'api/api.types';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { clearSearchParams } from 'redux/products/products.slice';
import { authFailure, authLogout, authStart, authSuccess } from './auth.slice';

export function* watchAuthStart() {
  yield takeLatest(authStart.type, authStartAsync);
}

export function* watchAuthLogout() {
  yield takeLatest(authLogout.type, clearAfterLogout);
}

export function* authStartAsync({ payload }: ReturnType<typeof authStart>) {
  try {
    const { username, password } = payload;
    const { data }: AxiosResponse<LoginResponse> = yield call(api.login, username, password);
    yield put(authSuccess(data.access_token));
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

export function* clearAfterLogout() {
  yield put(clearSearchParams());
}

export function* authSagas() {
  yield all([call(watchAuthStart), call(watchAuthLogout)]);
}
