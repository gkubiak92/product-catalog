import api from 'api/api';
import { ProductsResponse } from 'api/api.types';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from './productsSlice';

export function* watchFetchProductsStart() {
  yield takeLatest(fetchProductsStart.type, fetchProductsAsync);
}

export function* fetchProductsAsync({ payload }: ReturnType<typeof fetchProductsStart>) {
  try {
    const { data }: AxiosResponse<ProductsResponse> = yield call(api.getProducts, { ...payload });
    yield put(fetchProductsSuccess(data.items));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* productsSagas() {
  yield all([call(watchFetchProductsStart)]);
}
