import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import {
  getProductsSuccess,
  getProductsFailure,
  getProductCategoryFailure,
  getProductCategorySuccess,
} from '../actions/products'
import {
  PRODUCTS_GET_PRODUCTS_LIST,
  GET_PRODUCT_CATEGORIES,
} from '../constants/actions'
import { productsApiHelper } from '../utils/api'

function* getProductsSaga() {
  try {
    const { data: response } = yield call(() => {
      return productsApiHelper.getProducts()
    })
    const data = new Array(...response)
    yield put(getProductsSuccess(data))
  } catch ({ response }) {
    yield put(getProductsFailure())
  }
}

function* watchGetProducts(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(PRODUCTS_GET_PRODUCTS_LIST, getProductsSaga)
}

function* getProductCategorySaga() {
  try {
    const { data: response } = yield call(() => {
      return productsApiHelper.getCategories()
    })
    const data = new Array(...response)
    yield put(getProductCategorySuccess(data))
  } catch ({ response }) {
    yield put(getProductCategoryFailure())
  }
}

function* watchGetProductCategory(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(GET_PRODUCT_CATEGORIES, getProductCategorySaga)
}

export { watchGetProducts, watchGetProductCategory }
