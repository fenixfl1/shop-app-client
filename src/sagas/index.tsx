import { all } from 'redux-saga/effects'
import { watchGetProductCategory, watchGetProducts } from './products'
import { watchCreateUser } from './user'

export default function* rootSaga(): Generator {
  yield all([watchGetProducts(), watchCreateUser(), watchGetProductCategory()])
}
