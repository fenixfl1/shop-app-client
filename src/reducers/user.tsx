import { UserActions } from '../actions/user'
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

export type UserType = {
  email?: string
  id_category?: number
  id?: number
  last_name?: string
  lastname?: string
  name?: string
  password?: string
  status?: boolean
  username?: string
}

export type UserState = {
  user: UserType
  fetchingUserData: boolean
  isLoggedIn: boolean
  paymentMethods: any
  addresses: any
}

const initialState: UserState = {
  fetchingUserData: false,
  isLoggedIn: false,
  paymentMethods: [],
  addresses: [],
  user: {},
}

const user = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case USER_CREATE_NEW_USER: {
      return {
        ...state,
        fetchingUserData: true,
      }
    }
    case USER_CREATE_NEW_USER_SUCCESS: {
      return {
        ...state,
        user: action.newUser,
        fetchingUserData: false,
        isLoggedIn: false,
      }
    }
    case USER_CREATE_NEW_USER_FAILURE: {
      return {
        ...state,
        fetchingUserData: false,
      }
    }
    case AUTHENTICATE_USER: {
      return {
        ...state,
        fetchingUserData: true,
      }
    }
    case AUTHENTICATE_USER_SUCCESS: {
      return {
        ...state,
        fetchingUserData: false,
        isLoggedIn: true,
      }
    }
    case AUTHENTICATE_USER_FAILURE: {
      return {
        ...state,
        fetchingUserData: false,
        isLoggedIn: false,
      }
    }
    case GET_USER_INFO: {
      return {
        ...state,
        fetchingUserData: true,
      }
    }
    case GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        fetchingUserData: false,
        user: action.user,
      }
    }
    case GET_USER_INFO_FAILURE: {
      return {
        ...state,
        fetchingUserData: false,
      }
    }
    case CREATE_PAYMENT_METHOD: {
      return {
        ...state,
        fetchingUserData: true,
      }
    }
    case CREATE_PAYMENT_METHOD_SUCCESS: {
      return {
        ...state,
        fetchingUserData: false,
        paymentMethods: [action.newPayment],
      }
    }
    case CREATE_PAYMENT_METHOD_FAILURE: {
      return {
        ...state,
        fetchingUserData: false,
      }
    }
    case GET_PAYMENT_METHODS: {
      return {
        ...state,
        fetchingUserData: true,
      }
    }
    case GET_PAYMENT_METHODS_SUCCESS: {
      return {
        ...state,
        fetchingUserData: false,
        paymentMethods: action.payments,
      }
    }
    case GET_PAYMENT_METHODS_FAILURE: {
      return {
        ...state,
        fetchingUserData: false,
      }
    }
    case CREATE_ADDRESS: {
      return {
        ...state,
        fetchingUserData: true,
      }
    }
    case CREATE_ADDRESS_SUCCESS: {
      return {
        ...state,
        fetchingUserData: false,
        addresses: [action.newAddress],
      }
    }
    case CREATE_ADDRESS_FAILURE: {
      return {
        ...state,
        fetchingUserData: false,
      }
    }
    case GET_ADDRESSES: {
      return {
        ...state,
        fetchingUserData: true,
      }
    }
    case GET_ADDRESSES_SUCCESS: {
      return {
        ...state,
        fetchingUserData: false,
        addresses: action.addresses,
      }
    }
    case GET_ADDRESSES_FAILURE: {
      return {
        ...state,
        fetchingUserData: false,
      }
    }
    default:
      return state
  }
}

export default user
