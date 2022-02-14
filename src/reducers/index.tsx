import products, { ProductsState } from './products'
import { combineReducers } from 'redux'
import user, { UserState } from './user'

export type StoreState = {
  products: ProductsState
  user: UserState
}

export default combineReducers({ products, user })
