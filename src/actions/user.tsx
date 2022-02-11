import {
  USER_CREATE_NEW_USER,
  USER_CREATE_NEW_USER_SUCCESS,
  USER_CREATE_NEW_USER_FAILURE,
} from '../constants/actions'
import { UserType } from '../reducers/user'

export type CreateUserAction = {
  type: typeof USER_CREATE_NEW_USER
  user: UserType
}

export type CreateUserSuccessAction = {
  type: typeof USER_CREATE_NEW_USER_SUCCESS
  newUser: UserType
}

export type CreateUserFailureAction = {
  type: typeof USER_CREATE_NEW_USER_FAILURE
}

export const createUser = (user: UserType): CreateUserAction => {
  return {
    type: USER_CREATE_NEW_USER,
    user,
  }
}

export const createUserSuccess = (
  newUser: UserType
): CreateUserSuccessAction => {
  return {
    type: USER_CREATE_NEW_USER_SUCCESS,
    newUser,
  }
}

export const createUserFailure = (): CreateUserFailureAction => {
  return {
    type: USER_CREATE_NEW_USER_FAILURE,
  }
}

export type UserActions =
  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserFailureAction
