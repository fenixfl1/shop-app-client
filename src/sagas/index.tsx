import { all } from 'redux-saga/effects'
import { watchGetProducts } from './products'
import { watchCreateUser } from './user'

export default function* rootSaga(): Generator {
  yield all([watchGetProducts(), watchCreateUser()])
}
