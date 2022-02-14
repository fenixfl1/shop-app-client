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
} from '../constants/actions'

export type UserType = {
  email?: string
  id_category?: number
  id?: number
  last_name?: string
  name?: string
  password?: string
  status?: boolean
  username?: string
}

export type UserState = {
  user: UserType
  fetchingUserData: boolean
  isLoggedIn: boolean
}

const initialState: UserState = {
  fetchingUserData: false,
  isLoggedIn: false,
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
    default:
      return state
  }
}

export default user
