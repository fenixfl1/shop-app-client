import {
  PRODUCTS_GET_PRODUCTS_LIST,
  PRODUCTS_GET_PRODUCTS_LIST_SUCCESS,
  PRODUCTS_GET_PRODUCTS_LIST_FAILURE,
} from '../constants/actions'
import { ProductsType } from '../reducers/products'

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

export type ProductsActions =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
