import api from 'api/api';
import { GetProductsResponse } from 'api/api.types';
import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectSearchParams } from './products.selectors';
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
  setLoading,
  setPage,
  setSearchParam,
  toggleActiveParam,
  togglePromoParam,
} from './products.slice';

export function* watchFetchProductsStart() {
  yield takeLatest(fetchProductsStart.type, fetchProductsAsync);
}

export function* watchFiltersChange() {
  yield takeLatest(
    [toggleActiveParam.type, togglePromoParam.type, setSearchParam.type, setPage.type],
    fetchProductsAsync
  );
}

export function* fetchProductsAsync() {
  try {
    yield put(setLoading(true));
    const params = yield select(selectSearchParams);
    const { data }: AxiosResponse<GetProductsResponse> = yield call(api.getProducts, params);
    yield put(fetchProductsSuccess(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(fetchProductsFailure(error));
  }
}

export function* productsSagas() {
  yield all([call(watchFetchProductsStart), call(watchFiltersChange)]);
}
