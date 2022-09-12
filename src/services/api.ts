import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'

let isRefreshing = false
let failedRequestsQueue: any[] = []

function signOut() {
  Cookies.remove('@coffee-delivery-v1.0.0:token')
  Cookies.remove('@coffee-delivery-v1.0.0:refresh-token')

  window.location.href = `${import.meta.env.VITE_MY_WEBSITE}/account/session`
}

type ErrorResponseDataType = {
  code: string
  message: string
}

export function setupAPIClient() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

  api.interceptors.response.use(
    response => {
      return response
    },
    (error: AxiosError<ErrorResponseDataType>) => {
      if (error?.response?.status === 401) {
        if (error.response.data.code === 'token.expired') {
          const cookies = Cookies.get()
          const { '@coffee-delivery-v1.0.0:refresh-token': refreshToken } =
            cookies

          const parsedRefreshToken = JSON.parse(refreshToken)

          const originalConfig = error.config

          if (!isRefreshing) {
            isRefreshing = true

            api
              .post('refresh-token', { refresh_token: parsedRefreshToken.id })
              .then(response => {
                const twoTokens = response.data

                Cookies.set(
                  '@coffee-delivery-v1.0.0:token',
                  twoTokens.new_token,
                  {
                    expires: 60 * 60 * 24 * 30 * 12, // ~ 1 ano
                    path: '/'
                  }
                )
                const hasPropertyNewRefreshToken =
                  // eslint-disable-next-line no-prototype-builtins
                  twoTokens.hasOwnProperty('new_refresh_token')

                if (hasPropertyNewRefreshToken) {
                  Cookies.set(
                    '@coffee-delivery-v1.0.0:refresh-token',
                    JSON.stringify(twoTokens.new_refresh_token),
                    {
                      expires: 60 * 60 * 24 * 30 * 12, // ~ 1 ano
                      path: '/'
                    }
                  )
                }

                api.defaults.headers.common.Authorization = `Bearer ${twoTokens.new_token}`

                failedRequestsQueue.forEach(request =>
                  request.onSuccess(twoTokens.new_token)
                )
                failedRequestsQueue = []
              })
              .catch(err => {
                failedRequestsQueue.forEach(request => request.onFailure(err))
                failedRequestsQueue = []

                signOut()
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                if (originalConfig.headers)
                  originalConfig.headers.Authorization = `Bearer ${token}`
                resolve(api(originalConfig))
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              }
            })
          })
        } else {
          signOut()
        }
      }
      return Promise.reject(error)
    }
  )

  return api
}
