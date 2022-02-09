import { ProductsActions } from '../actions/products'
import {
  PRODUCTS_GET_PRODUCTS_LIST,
  PRODUCTS_GET_PRODUCTS_LIST_SUCCESS,
  PRODUCTS_GET_PRODUCTS_LIST_FAILURE,
  REMOVE_PRODUCT_FROM_SHOPPING_CART,
  ADD_PRODUCT_TO_SHOPPING_CART,
} from '../constants/actions'

export type ProductsType = {
  description?: string
  discount?: number
  id?: number
  image?: string
  name?: string
  price?: number
  status?: string
  stock?: number
  count?: number
}

export type ProductsState = {
  fetchingProducts: boolean
  products: ProductsType[]
  shoppingCart: ProductsType[]
  shoppingCartCounter: number
}

const initialState: ProductsState = {
  fetchingProducts: false,
  products: new Array<ProductsType>(),
  shoppingCart: new Array<ProductsType>(),
  shoppingCartCounter: 0,
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
        products: action.product,
        fetchingProducts: false,
      }
    }
    case PRODUCTS_GET_PRODUCTS_LIST_FAILURE: {
      return {
        ...state,
        fetchingProducts: false,
      }
    }
    case REMOVE_PRODUCT_FROM_SHOPPING_CART: {
      return {
        ...state,
        shoppingCart: new Array(
          ...state.shoppingCart.filter((item) => item.id !== action.key)
        ),
      }
    }
    case ADD_PRODUCT_TO_SHOPPING_CART: {
      return {
        ...state,
        shoppingCart: Object.assign([], [action.product], state.shoppingCart),
      }
    }
    default:
      return state
  }
}

export default products
