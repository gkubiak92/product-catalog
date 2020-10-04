import api from 'api/api';
import { ProductsResponse } from 'api/api.types';
import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectSearchParams } from './products.selectors';
import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from './productsSlice';

export function* watchFetchProductsStart() {
  yield takeLatest(fetchProductsStart.type, fetchProductsAsync);
}

export function* fetchProductsAsync() {
  try {
    const params = yield select(selectSearchParams);
    console.log(params);
    const { data }: AxiosResponse<ProductsResponse> = yield call(api.getProducts, params);
    yield put(fetchProductsSuccess(data.items));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* productsSagas() {
  yield all([call(watchFetchProductsStart)]);
}
