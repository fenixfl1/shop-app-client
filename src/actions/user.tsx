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
  CREATE_PAYMENT_METHOD,
  CREATE_PAYMENT_METHOD_FAILURE,
  CREATE_PAYMENT_METHOD_SUCCESS,
  GET_PAYMENT_METHODS,
  GET_PAYMENT_METHODS_FAILURE,
  GET_PAYMENT_METHODS_SUCCESS,
  CREATE_ADDRESS,
  CREATE_ADDRESS_FAILURE,
  CREATE_ADDRESS_SUCCESS,
  GET_ADDRESSES,
  GET_ADDRESSES_FAILURE,
  GET_ADDRESSES_SUCCESS,
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

// CREATE PAYMENT ACTIONS

export type CreatePaymentMethodAction = {
  type: typeof CREATE_PAYMENT_METHOD
  payment: any
}

export type CreatePaymentMethodSuccessAction = {
  type: typeof CREATE_PAYMENT_METHOD_SUCCESS
  newPayment: any
}

export type CreatePaymentMethodFailureAction = {
  type: typeof CREATE_PAYMENT_METHOD_FAILURE
}

export const createPaymentMethod = (
  payment: any
): CreatePaymentMethodAction => {
  return {
    type: CREATE_PAYMENT_METHOD,
    payment,
  }
}

export const createPaymentMethodSuccess = (
  newPayment: any
): CreatePaymentMethodSuccessAction => {
  return {
    type: CREATE_PAYMENT_METHOD_SUCCESS,
    newPayment,
  }
}

export const createPaymentMethodFailure =
  (): CreatePaymentMethodFailureAction => {
    return {
      type: CREATE_PAYMENT_METHOD_FAILURE,
    }
  }

export type GetPaymentMethodsAction = {
  type: typeof GET_PAYMENT_METHODS
  userId: React.Key
}

export type GetPaymentMethodsSuccessAction = {
  type: typeof GET_PAYMENT_METHODS_SUCCESS
  payments: any[]
}

export type GetPaymentMethodsFailureAction = {
  type: typeof GET_PAYMENT_METHODS_FAILURE
}

export const getPaymentMethods = (
  userId: React.Key
): GetPaymentMethodsAction => {
  return {
    type: GET_PAYMENT_METHODS,
    userId,
  }
}

export const getPaymentMethodsSuccess = (
  payments: any[]
): GetPaymentMethodsSuccessAction => {
  return {
    type: GET_PAYMENT_METHODS_SUCCESS,
    payments,
  }
}

export const getPaymentMethodsFailure = (): GetPaymentMethodsFailureAction => {
  return {
    type: GET_PAYMENT_METHODS_FAILURE,
  }
}

// CREATE ADDRESSES ACTIONS
export type CreateAddressesAction = {
  type: typeof CREATE_ADDRESS
  address: any
}

export type CreateAddressesSuccessAction = {
  type: typeof CREATE_ADDRESS_SUCCESS
  newAddress: any
}

export type CreateAddressesFailureAction = {
  type: typeof CREATE_ADDRESS_FAILURE
}

export const createAddresses = (address: any): CreateAddressesAction => {
  return {
    type: CREATE_ADDRESS,
    address,
  }
}

export const createAddressesSuccess = (
  newAddress: any
): CreateAddressesSuccessAction => {
  return {
    type: CREATE_ADDRESS_SUCCESS,
    newAddress,
  }
}

export const createAddressesFailure = (): CreateAddressesFailureAction => {
  return {
    type: CREATE_ADDRESS_FAILURE,
  }
}

export type GetAddressesAction = {
  type: typeof GET_ADDRESSES
  userId: React.Key
}

export type GetAddressesSuccessAction = {
  type: typeof GET_ADDRESSES_SUCCESS
  addresses: any[]
}

export type GetAddressesFailureAction = {
  type: typeof GET_ADDRESSES_FAILURE
}

export const getAddresses = (userId: React.Key): GetAddressesAction => {
  return {
    type: GET_ADDRESSES,
    userId,
  }
}

export const getAddressesSuccess = (
  addresses: any[]
): GetAddressesSuccessAction => {
  return {
    type: GET_ADDRESSES_SUCCESS,
    addresses,
  }
}

export const getAddressesFailure = (): GetAddressesFailureAction => {
  return {
    type: GET_ADDRESSES_FAILURE,
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
  | CreatePaymentMethodAction
  | CreatePaymentMethodSuccessAction
  | CreatePaymentMethodFailureAction
  | GetPaymentMethodsAction
  | GetPaymentMethodsSuccessAction
  | GetPaymentMethodsFailureAction
  | CreateAddressesAction
  | CreateAddressesSuccessAction
  | CreateAddressesFailureAction
  | GetAddressesAction
  | GetAddressesSuccessAction
  | GetAddressesFailureAction
