import products, { ProductsState } from './products'
import { combineReducers } from 'redux'
import user, { UserType } from './user'

export type StoreState = {
  products: ProductsState
  user: UserType
}

export default combineReducers({ products, user })
