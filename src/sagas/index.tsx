import { all } from 'redux-saga/effects'
import { watchGetProductCategory, watchGetProducts } from './products'
import {
  watchAuthenticateUser,
  watchCreateAddress,
  watchCreatePaymentMethod,
  watchCreateUser,
  watchGetAddresses,
  watchGetAddressesFlow,
  watchGetPaymentMethods,
  watchGetUserInfo,
} from './user'

export default function* rootSaga(): Generator {
  yield all([
    watchGetProducts(),
    watchCreateUser(),
    watchGetProductCategory(),
    watchAuthenticateUser(),
    watchGetUserInfo(),
    watchCreatePaymentMethod(),
    watchGetPaymentMethods(),
    watchCreateAddress(),
    watchGetAddresses(),
    watchGetAddressesFlow(),
  ])
}
