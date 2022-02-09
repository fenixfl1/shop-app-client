import axios, { AxiosResponse } from 'axios'
import { WEB_SERVICE_API_PRODUCTS } from '../constants/routes'
import { getSessionToken } from './session'

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

export const productsApiHelper = {
  getProducts,
}
