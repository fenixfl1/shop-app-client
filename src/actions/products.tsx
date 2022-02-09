import {
  PRODUCTS_GET_PRODUCTS_LIST,
  PRODUCTS_GET_PRODUCTS_LIST_SUCCESS,
  PRODUCTS_GET_PRODUCTS_LIST_FAILURE,
  ADD_PRODUCT_TO_SHOPPING_CART,
  REMOVE_PRODUCT_FROM_SHOPPING_CART,
} from '../constants/actions'
import { ProductsType } from '../reducers/products'

// GET PRODUCTS ACTIONS
export type GetProductsAction = {
  type: typeof PRODUCTS_GET_PRODUCTS_LIST
}

export type GetProductsSuccessAction = {
  type: typeof PRODUCTS_GET_PRODUCTS_LIST_SUCCESS
  product: ProductsType[]
}

export type GetProductsFailureAction = {
  type: typeof PRODUCTS_GET_PRODUCTS_LIST_FAILURE
}

export const getProducts = (): GetProductsAction => {
  return {
    type: PRODUCTS_GET_PRODUCTS_LIST,
  }
}

export const getProductsSuccess = (
  product: ProductsType[]
): GetProductsSuccessAction => {
  return {
    type: PRODUCTS_GET_PRODUCTS_LIST_SUCCESS,
    product,
  }
}

export const getProductsFailure = (): GetProductsFailureAction => {
  return {
    type: PRODUCTS_GET_PRODUCTS_LIST_FAILURE,
  }
}

// SHOPPING CART ACTIONS
export type AddToShoppingCArtAction = {
  type: typeof ADD_PRODUCT_TO_SHOPPING_CART
  product: ProductsType
}

export const addToShoppingCart = (
  product: ProductsType
): AddToShoppingCArtAction => {
  return {
    type: ADD_PRODUCT_TO_SHOPPING_CART,
    product,
  }
}

export type RemoveProductFromShoppingCArtAction = {
  type: typeof REMOVE_PRODUCT_FROM_SHOPPING_CART
  key: React.Key
}

export const removeProductFromShippingCart = (
  key: React.Key
): RemoveProductFromShoppingCArtAction => {
  return {
    type: REMOVE_PRODUCT_FROM_SHOPPING_CART,
    key,
  }
}

export type ProductsActions =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
  | AddToShoppingCArtAction
  | RemoveProductFromShoppingCArtAction
