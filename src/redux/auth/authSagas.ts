import { api } from 'axios/axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { authFailure, authStart, authSuccess } from './authSlice';

export function* authStartSaga() {
  yield takeLatest(authStart.type, authStartAsync);
}

export function* authStartAsync({ payload: { username, password } }: ReturnType<typeof authStart>) {
  try {
    const { data } = yield api.post('/auth/login', { username, password });
    yield put(authSuccess(data));
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

export function* authSagas() {
  yield all([call(authStartSaga)]);
}
