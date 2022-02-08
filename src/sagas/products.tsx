import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import {
  GetProductsAction,
  getProductsSuccess,
  getProductsFailure,
} from '../actions/products'
import { PRODUCTS_GET_PRODUCTS_LIST } from '../constants/actions'
import { productsApiHelper } from '../utils/api'

function* getProductsSaga() {
  try {
    const { data: response } = yield call(() => {
      return productsApiHelper.getProducts()
    })
    const { data } = response
    yield put(getProductsSuccess(data))
  } catch ({ response }) {
    yield put(getProductsFailure())
  }
}

function* watchGetProducts(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(PRODUCTS_GET_PRODUCTS_LIST, getProductsSaga)
}

export { watchGetProducts }
