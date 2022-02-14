import { all } from 'redux-saga/effects'
import { watchGetProductCategory, watchGetProducts } from './products'
import {
  watchAuthenticateUser,
  watchCreateUser,
  watchGetUserInfo,
} from './user'

export default function* rootSaga(): Generator {
  yield all([
    watchGetProducts(),
    watchCreateUser(),
    watchGetProductCategory(),
    watchAuthenticateUser(),
    watchGetUserInfo(),
  ])
}
