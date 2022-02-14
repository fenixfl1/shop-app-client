import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import {
  AuthenticateUserAction,
  authenticateUserFailure,
  authenticateUserSuccess,
  CreateUserAction,
  createUserFailure,
  createUserSuccess,
  GetUserInfoAction,
  getUserInfoFailure,
  getUserInfoSuccess,
} from '../actions/user'
import {
  AUTHENTICATE_USER,
  GET_USER_INFO,
  USER_CREATE_NEW_USER,
} from '../constants/actions'
import { userApiHelper } from '../utils/api'
import { createSession, UserData } from '../utils/session'

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

export { watchCreateUser, watchAuthenticateUser, watchGetUserInfo }
