import {
  PRODUCTS_GET_PRODUCTS_LIST,
  PRODUCTS_GET_PRODUCTS_LIST_SUCCESS,
  PRODUCTS_GET_PRODUCTS_LIST_FAILURE,
  ADD_PRODUCT_TO_SHOPPING_CART,
  REMOVE_PRODUCT_FROM_SHOPPING_CART,
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCT_CATEGORIES_FAILURE,
  GET_PRODUCT_CATEGORIES_SUCCESS,
  SET_MODAL_VISIBILITY_STATE_FOR_PRODUCT_DETAIL,
  SET_PRODUCT_DETAILS,
} from '../constants/actions'
import { CategoryType, ProductsType } from '../reducers/products'

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

// GET CATEGORIES ACTIONS
export type GetProductCategoryAction = {
  type: typeof GET_PRODUCT_CATEGORIES
}

export type GetProductCategorySuccessAction = {
  type: typeof GET_PRODUCT_CATEGORIES_SUCCESS
  categories: CategoryType[]
}

export type GetProductCategoryFailureAction = {
  type: typeof GET_PRODUCT_CATEGORIES_FAILURE
}

export const getProductCategory = (): GetProductCategoryAction => {
  return {
    type: GET_PRODUCT_CATEGORIES,
  }
}

export const getProductCategorySuccess = (
  categories: CategoryType[]
): GetProductCategorySuccessAction => {
  return {
    type: GET_PRODUCT_CATEGORIES_SUCCESS,
    categories,
  }
}

export const getProductCategoryFailure =
  (): GetProductCategoryFailureAction => {
    return {
      type: GET_PRODUCT_CATEGORIES_FAILURE,
    }
  }

// MODAL SATE FOR PRODUCTS ACTION
export type ModalStateForPRoductDetailAction = {
  type: typeof SET_MODAL_VISIBILITY_STATE_FOR_PRODUCT_DETAIL
  state: boolean
}

export const setModalStateForProductDetail = (
  state: boolean
): ModalStateForPRoductDetailAction => {
  return {
    type: SET_MODAL_VISIBILITY_STATE_FOR_PRODUCT_DETAIL,
    state,
  }
}

// SET PRODUCT DETAIL ACTION
export type SetProductDetailAction = {
  type: typeof SET_PRODUCT_DETAILS
  details: ProductsType
}

export const setProductDetails = (
  details: ProductsType
): SetProductDetailAction => {
  return {
    type: SET_PRODUCT_DETAILS,
    details,
  }
}

export type ProductsActions =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
  | AddToShoppingCArtAction
  | RemoveProductFromShoppingCArtAction
  | GetProductCategoryAction
  | GetProductCategorySuccessAction
  | GetProductCategoryFailureAction
  | ModalStateForPRoductDetailAction
  | SetProductDetailAction
