import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import {
  CreateUserAction,
  createUserFailure,
  createUserSuccess,
} from '../actions/user'
import { USER_CREATE_NEW_USER } from '../constants/actions'
import { userApiHelper } from '../utils/api'

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

export { watchCreateUser }
