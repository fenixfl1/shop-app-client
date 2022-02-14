import {
  USER_CREATE_NEW_USER,
  USER_CREATE_NEW_USER_SUCCESS,
  USER_CREATE_NEW_USER_FAILURE,
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_FAILURE,
  AUTHENTICATE_USER_SUCCESS,
  GET_USER_INFO,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_SUCCESS,
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

// AUTHENTICATE USER ACTIONS
export type AuthenticateUserAction = {
  type: typeof AUTHENTICATE_USER
  username: string
  password: string
}

export type AuthenticateUserSuccessAction = {
  type: typeof AUTHENTICATE_USER_SUCCESS
}

export type AuthenticateUserFailureAction = {
  type: typeof AUTHENTICATE_USER_FAILURE
}

export const authenticateUser = (
  username: string,
  password: string
): AuthenticateUserAction => {
  return {
    type: AUTHENTICATE_USER,
    username,
    password,
  }
}

export const authenticateUserSuccess = (): AuthenticateUserSuccessAction => {
  return {
    type: AUTHENTICATE_USER_SUCCESS,
  }
}

export const authenticateUserFailure = (): AuthenticateUserFailureAction => {
  return {
    type: AUTHENTICATE_USER_FAILURE,
  }
}

// GET USER INFO ACTION

export type GetUserInfoAction = {
  type: typeof GET_USER_INFO
  id: React.Key
}

export type GetUserInfoSuccessAction = {
  type: typeof GET_USER_INFO_SUCCESS
  user: UserType
}

export type GetUserInfoFailureAction = {
  type: typeof GET_USER_INFO_FAILURE
}

export const getUserInfo = (id: React.Key): GetUserInfoAction => {
  return {
    type: GET_USER_INFO,
    id,
  }
}

export const getUserInfoSuccess = (
  user: UserType
): GetUserInfoSuccessAction => {
  return {
    type: GET_USER_INFO_SUCCESS,
    user,
  }
}

export const getUserInfoFailure = (): GetUserInfoFailureAction => {
  return {
    type: GET_USER_INFO_FAILURE,
  }
}
export type UserActions =
  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserFailureAction
  | AuthenticateUserAction
  | AuthenticateUserSuccessAction
  | AuthenticateUserFailureAction
  | GetUserInfoAction
  | GetUserInfoSuccessAction
  | GetUserInfoFailureAction
