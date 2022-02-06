import Cookies from 'js-cookie'
import moment from 'moment'

const COOKIE_KEY_USER_NAME = 'shoppingAppUserName'
const COOKIE_KEY_USER_DATA = 'shoppingUserData'
const COOKIE_KEY_SESSION_TOKEN = 'shoppingAppSessionToken'

export const isLoggedIn = (): boolean => {
  const requiredCookiesKeys = [COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA]

  return !requiredCookiesKeys.some(
    (cookieKey) => Cookies.get(cookieKey) === undefined
  )
}

export type UserData = {
  username: string
  userId: string
  sessionCookie: {
    token: string
    expiration: string
  }
}

export const createSession = (user: UserData): void => {
  const { username, sessionCookie, userId } = user
  const { token: sessionToken, expiration: sessionExpiration } = sessionCookie
  const cookiesExpiration = new Date(sessionExpiration)
  const sessionInfo = JSON.stringify({
    username,
    userId,
  })

  Cookies.set(COOKIE_KEY_USER_NAME, username, {
    expires: new Date(
      moment(cookiesExpiration).add(-50, 'minutes').toISOString()
    ),
  })

  Cookies.set(COOKIE_KEY_USER_DATA, sessionInfo, { expires: cookiesExpiration })

  Cookies.set(COOKIE_KEY_SESSION_TOKEN, sessionToken, {
    expires: cookiesExpiration,
  })
}

export const removeSession = (): void => {
  const requiredCookiesKeys = [
    COOKIE_KEY_SESSION_TOKEN,
    COOKIE_KEY_USER_DATA,
    COOKIE_KEY_USER_NAME,
  ]

  requiredCookiesKeys.forEach((cookieKey) => Cookies.remove(cookieKey))
}

export const getSessionInfo = (): UserData => {
  return isLoggedIn() ? Cookies.getJSON(COOKIE_KEY_USER_DATA) : {}
}

export const getSessionToken = (): string => {
  return Cookies.get(COOKIE_KEY_SESSION_TOKEN)
}
