import { ProductsActions } from '../actions/products'
import {
  PRODUCTS_GET_PRODUCTS_LIST,
  PRODUCTS_GET_PRODUCTS_LIST_SUCCESS,
  PRODUCTS_GET_PRODUCTS_LIST_FAILURE,
} from '../constants/actions'

export type ProductsType = {
  description: string
  discount: number
  id: number
  image: string
  name: string
  price: number
  status: string
  stock: number
}

export type ProductsState = {
  products: ProductsType[]
  fetchingProducts: boolean
}

const initialState: ProductsState = {
  products: new Array<ProductsType>(),
  fetchingProducts: false,
}

const products = (
  state: ProductsState = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case PRODUCTS_GET_PRODUCTS_LIST: {
      return {
        ...state,
        fetchingProducts: true,
      }
    }
    case PRODUCTS_GET_PRODUCTS_LIST_SUCCESS: {
      return {
        ...state,
        fetchingProducts: false,
      }
    }
    case PRODUCTS_GET_PRODUCTS_LIST_FAILURE: {
      return {
        ...state,
        fetchingProducts: false,
      }
    }
    default:
      return state
  }
}

export default products
