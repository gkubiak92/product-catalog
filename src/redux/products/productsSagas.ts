import api from 'api/api';
import { ProductsResponse } from 'api/api.types';
import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectSearchParams } from './products.selectors';
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
  setLoading,
  setSearchParam,
  toggleActiveParam,
  togglePromoParam,
} from './productsSlice';

export function* watchFetchProductsStart() {
  yield takeLatest(fetchProductsStart.type, fetchProductsAsync);
}

export function* watchFiltersChange() {
  yield takeLatest(
    [toggleActiveParam.type, togglePromoParam.type, setSearchParam.type],
    fetchProductsAsync
  );
}

export function* fetchProductsAsync() {
  try {
    yield put(setLoading(true));
    const params = yield select(selectSearchParams);
    const { data }: AxiosResponse<ProductsResponse> = yield call(api.getProducts, params);
    yield put(fetchProductsSuccess(data.items));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(fetchProductsFailure(error));
  }
}

export function* productsSagas() {
  yield all([call(watchFetchProductsStart), call(watchFiltersChange)]);
}
