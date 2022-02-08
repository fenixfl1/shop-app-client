import { all } from 'redux-saga/effects'
import { watchGetProducts } from './products'

export default function* rootSaga(): Generator {
  yield all([watchGetProducts()])
}
