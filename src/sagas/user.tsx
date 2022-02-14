import {
  call,
  ForkEffect,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import {
  AuthenticateUserAction,
  authenticateUserFailure,
  authenticateUserSuccess,
  CreateAddressesAction,
  createAddressesFailure,
  createAddressesSuccess,
  CreatePaymentMethodAction,
  createPaymentMethodFailure,
  createPaymentMethodSuccess,
  CreateUserAction,
  createUserFailure,
  createUserSuccess,
  GetAddressesAction,
  getAddressesFailure,
  getAddressesSuccess,
  GetPaymentMethodsAction,
  getPaymentMethodsFailure,
  getPaymentMethodsSuccess,
  GetUserInfoAction,
  getUserInfoFailure,
  getUserInfoSuccess,
} from '../actions/user'
import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SUCCESS,
  CREATE_ADDRESS,
  CREATE_PAYMENT_METHOD,
  GET_ADDRESSES,
  GET_PAYMENT_METHODS,
  GET_USER_INFO,
  USER_CREATE_NEW_USER,
} from '../constants/actions'
import { userApiHelper } from '../utils/api'
import { createSession, getSessionInfo, UserData } from '../utils/session'

function* createUserSaga(payload: CreateUserAction) {
  try {
    const { data: response } = yield call(() => {
      return userApiHelper.createUser(payload.user)
    })

    const { data } = response
    yield put(createUserSuccess(data))
  } catch ({ response }) {
    yield put(createUserFailure())
  }
}

function* watchCreateUser(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(USER_CREATE_NEW_USER, createUserSaga)
}

function* authenticateUserSaga({ username, password }: AuthenticateUserAction) {
  try {
    const response = yield call(() =>
      userApiHelper.authenticateUser({
        username,
        password,
      })
    )

    const { data: userInfo } = response.data

    createSession(userInfo as UserData)
    yield put(authenticateUserSuccess())
  } catch (error) {
    yield put(authenticateUserFailure())
  }
}

function* watchAuthenticateUser(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(AUTHENTICATE_USER, authenticateUserSaga)
}

function* getUserInfoSaga(payload: GetUserInfoAction) {
  try {
    const { data } = yield call(() => {
      return userApiHelper.getUserInfo(payload.id)
    })

    console.log({ data })
    yield put(getUserInfoSuccess(data))
  } catch ({ response }) {
    yield put(getUserInfoFailure())
  }
}

function* watchGetUserInfo(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(GET_USER_INFO, getUserInfoSaga)
}

function* createPaymentMethodSaga(payload: CreatePaymentMethodAction) {
  try {
    const { data: response } = yield call(() => {
      return userApiHelper.createPaymentMethod(payload.payment)
    })
    const { data } = response
    yield put(createPaymentMethodSuccess(data))
  } catch ({ response }) {
    yield put(createPaymentMethodFailure())
  }
}

function* watchCreatePaymentMethod(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(CREATE_PAYMENT_METHOD, createPaymentMethodSaga)
}

function* getPaymentMethodsSaga(payload: GetPaymentMethodsAction) {
  try {
    const { data: response } = yield call(() => {
      return userApiHelper.getPaymentMethods(payload.userId)
    })
    const { data } = response
    yield put(getPaymentMethodsSuccess(data))
  } catch ({ response }) {
    yield put(getPaymentMethodsFailure())
  }
}

function* watchGetPaymentMethods(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(GET_PAYMENT_METHODS, getPaymentMethodsSaga)
}

function* createAddressSaga(payload: CreateAddressesAction) {
  try {
    const { data: response } = yield call(() => {
      return userApiHelper.createAddress(payload.address)
    })
    const { data } = response
    yield put(createAddressesSuccess(data))
  } catch ({ response }) {
    yield put(createAddressesFailure())
  }
}

function* watchCreateAddress(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(CREATE_ADDRESS, createAddressSaga)
}

function* getAddressesSaga(payload: GetAddressesAction) {
  try {
    const userId = payload.userId || getSessionInfo().id
    const { data: response } = yield call(() => {
      return userApiHelper.getAddresses(userId)
    })
    const { data } = response
    yield put(getAddressesSuccess(data))
  } catch ({ response }) {
    yield put(getAddressesFailure())
  }
}

function* watchGetAddresses(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(GET_ADDRESSES, getAddressesSaga)
}

function* watchGetAddressesFlow(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(AUTHENTICATE_USER_SUCCESS, getAddressesSaga)
}

export {
  watchCreateUser,
  watchAuthenticateUser,
  watchGetUserInfo,
  watchCreatePaymentMethod,
  watchGetPaymentMethods,
  watchCreateAddress,
  watchGetAddresses,
  watchGetAddressesFlow,
}
