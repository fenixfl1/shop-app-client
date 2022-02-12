import { ProductsActions } from '../actions/products'
import {
  PRODUCTS_GET_PRODUCTS_LIST,
  PRODUCTS_GET_PRODUCTS_LIST_SUCCESS,
  PRODUCTS_GET_PRODUCTS_LIST_FAILURE,
  REMOVE_PRODUCT_FROM_SHOPPING_CART,
  ADD_PRODUCT_TO_SHOPPING_CART,
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCT_CATEGORIES_FAILURE,
  GET_PRODUCT_CATEGORIES_SUCCESS,
  SET_MODAL_VISIBILITY_STATE_FOR_PRODUCT_DETAIL,
  SET_PRODUCT_DETAILS,
} from '../constants/actions'

export type ProductsType = {
  description?: string
  discount?: number
  id?: number
  image?: string
  name?: string
  price?: number
  status?: boolean
  stock?: number
  count?: number
}

export type CategoryType = {
  id?: number
  name?: string
  description?: string
  status: boolean
  group_id?: number
}

export type ProductsState = {
  categories: CategoryType[]
  fetchingProducts: boolean
  modalStateForProductDetail: boolean
  products: ProductsType[]
  productDetail: ProductsType
  shoppingCart: ProductsType[]
  shoppingCartCounter: number
}

const initialState: ProductsState = {
  categories: new Array<CategoryType>(),
  fetchingProducts: false,
  modalStateForProductDetail: false,
  products: new Array<ProductsType>(),
  productDetail: {},
  shoppingCart: new Array<ProductsType>(),
  shoppingCartCounter: 0,
}

const products = (
  state: ProductsState = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY_STATE_FOR_PRODUCT_DETAIL: {
      return {
        ...state,
        modalStateForProductDetail: action.state,
      }
    }
    case SET_PRODUCT_DETAILS: {
      return {
        ...state,
        productDetail: action.details,
      }
    }
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
    case GET_PRODUCT_CATEGORIES: {
      return {
        ...state,
        fetchingProducts: true,
      }
    }
    case GET_PRODUCT_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.categories,
        fetchingProducts: false,
      }
    }
    case GET_PRODUCT_CATEGORIES_FAILURE: {
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
