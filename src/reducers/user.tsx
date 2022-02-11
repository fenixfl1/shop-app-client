import { UserActions } from '../actions/user'
import {
  USER_CREATE_NEW_USER,
  USER_CREATE_NEW_USER_SUCCESS,
  USER_CREATE_NEW_USER_FAILURE,
} from '../constants/actions'

export type UserType = {
  email?: string
  id_category?: number
  id?: number
  last_name?: string
  name?: string
  password?: string
  status?: boolean
}

type UserState = {
  user: UserType
  fetchingUserData: boolean
}

const initialState: UserState = {
  user: {},
  fetchingUserData: false,
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
      }
    }
    case USER_CREATE_NEW_USER_FAILURE: {
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
