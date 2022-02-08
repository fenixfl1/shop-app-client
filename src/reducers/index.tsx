import products, { ProductsState } from './products'
import { combineReducers } from 'redux'

export type StoreState = {
  products: ProductsState
}

export default combineReducers({ products })
