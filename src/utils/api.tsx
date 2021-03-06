import axios, { AxiosResponse } from 'axios'
import {
  WEB_SERVICE_API_GET_CATEGORIES,
  WEB_SERVICE_API_LOGIN,
  WEB_SERVICE_API_PRODUCTS,
  WEB_SERVICE_API_REGISTER_USER,
  WEB_SERVICE_API_GET_USER,
  WEB_SERVICE_API_PAYMENT_METHODS,
  WEB_SERVICE_API_REGISTER_ADDRESS,
} from '../constants/routes'
import { getSessionToken } from './session'
import { UserType } from '../reducers/user'

type RequestHeaders = {
  headers: {
    'Content-Type': string
    Authorization: string
  }
}

const getResponseParams = (): RequestHeaders => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getSessionToken(),
    },
  }
}

export function postRequest<T>(
  url: string,
  data: Record<string, unknown> | unknown[]
): Promise<AxiosResponse<T>> {
  const config = getResponseParams()
  const result = axios.post(url, data, config)

  return result
}

// eslint-disable-next-line
function putRequest<T>(
  url: string,
  data: Record<string, unknown>
): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  const result = axios.put(url, data, config)

  return result
}

// eslint-disable-next-line
function unauthorizedPostRequest<T>(
  url: string,
  data: T
): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  return axios.post(url, data, config)
}

function getRequest<T>(url: string): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  return axios.get(url, config)
}

const getProducts = (): Promise<AxiosResponse> => {
  return getRequest(`${WEB_SERVICE_API_PRODUCTS}`)
}

const getCategories = (): Promise<AxiosResponse> => {
  return getRequest(WEB_SERVICE_API_GET_CATEGORIES)
}

export const productsApiHelper = {
  getCategories,
  getProducts,
}

const createUser = (payload: UserType): Promise<AxiosResponse> => {
  return postRequest(WEB_SERVICE_API_REGISTER_USER, payload)
}

export type authenticateUserPayload = {
  username: string
  password: string
}

const authenticateUser = (
  data: authenticateUserPayload
): Promise<AxiosResponse<authenticateUserPayload>> => {
  return unauthorizedPostRequest<authenticateUserPayload>(
    WEB_SERVICE_API_LOGIN,
    data
  )
}

const getUserInfo = (id: React.Key): Promise<AxiosResponse> => {
  return getRequest(`${WEB_SERVICE_API_GET_USER}/${id}`)
}

const getAddresses = (userId: React.Key): Promise<AxiosResponse> => {
  return getRequest(`${WEB_SERVICE_API_REGISTER_ADDRESS}/${userId}`)
}

const createAddress = (payload: any): Promise<AxiosResponse> => {
  return postRequest(WEB_SERVICE_API_REGISTER_ADDRESS, payload)
}

const getPaymentMethods = (userId: React.Key): Promise<AxiosResponse> => {
  return getRequest(`${WEB_SERVICE_API_PAYMENT_METHODS}/${userId}`)
}

const createPaymentMethod = (payload: any): Promise<AxiosResponse> => {
  return postRequest(WEB_SERVICE_API_PAYMENT_METHODS, payload)
}

export const userApiHelper = {
  authenticateUser,
  createUser,
  getUserInfo,
  getAddresses,
  createAddress,
  getPaymentMethods,
  createPaymentMethod,
}
