import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from 'react'
import Cookies from 'js-cookie'
import { api } from '../services/apiClient'
import { useLocation, useNavigate } from 'react-router-dom'
import { isAfter } from 'date-fns'

type AuthStateType = {
  customer:
    | {
        email: string
      }
    | undefined
  isAuthenticated: boolean | undefined
}

enum ActionTypes {
  SIGN_OUT = 'SIGN_OUT',
  SIGN_IN = 'SIGN_IN'
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextType = {
  authState: AuthStateType
  signUp: ({ email, password }: SignInCredentials) => Promise<void>
  signIn: ({ email, password }: SignInCredentials) => Promise<void>
  signOut: () => void
}
const AuthContext = createContext({} as AuthContextType)

type AuthProviderProps = {
  children: ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [authState, dispatch] = useReducer(
    (state: AuthStateType, action: any) => {
      switch (action.type) {
        case ActionTypes.SIGN_OUT: {
          return {
            ...state,
            customer: undefined,
            isAuthenticated: false
          }
        }
        case ActionTypes.SIGN_IN:
          return {
            ...state,
            customer: action.payload.customer,
            isAuthenticated: true
          }
        default:
          return state
      }
    },
    { customer: undefined, isAuthenticated: undefined }
  )

  async function signUp({ email, password }: SignInCredentials) {
    const { data } = await api.post('signup', {
      email,
      password
    })

    await signIn({ email, password })
  }

  async function signIn({ email, password }: SignInCredentials) {
    const { data } = await api.post('session', {
      email,
      password
    })

    const { token, refresh_token: refreshToken } = data

    Cookies.set('@coffee-delivery-v1.0.0:token', token, {
      expires: 60 * 60 * 24 * 30 * 12, // ~ 1 ano
      path: '/'
    })
    Cookies.set(
      '@coffee-delivery-v1.0.0:refresh-token',
      JSON.stringify(refreshToken),
      {
        expires: 60 * 60 * 24 * 30 * 12, // ~ 1 ano
        path: '/'
      }
    )

    dispatch({
      type: 'SIGN_IN',
      payload: {
        customer: { email }
      }
    })

    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  function signOut() {
    Cookies.remove('@coffee-delivery-v1.0.0:token')
    Cookies.remove('@coffee-delivery-v1.0.0:refresh-token')

    dispatch({ type: 'SIGN_OUT' })

    if (location.pathname === '/account/dashboard') navigate('/account/session')
  }

  useEffect(() => {
    async function loadCustomer() {
      try {
        const {
          '@coffee-delivery-v1.0.0:token': token,
          '@coffee-delivery-v1.0.0:refresh-token': refreshToken
        } = Cookies.get()

        // Se o refresh token está expirado ou ausente realizar o sign out
        if (refreshToken) {
          const parsedRefreshToken = JSON.parse(refreshToken)
          const dateThatRefreshTokenExpires = new Date(
            parsedRefreshToken.expiresIn
          )
          const refreshTokenExpired = isAfter(
            new Date(),
            dateThatRefreshTokenExpires
          )
          if (refreshTokenExpired) {
            signOut()
          } else {
            // refresh token válido
            // Se o token está expirado ou ausente, obter novo token
            if (token) {
              const { data } = await api.get(
                `${import.meta.env.VITE_API_URL}/verify-token?token=${token}`
              )
              const isExpired = data.isExpired
              // const isExpired = isAfter(new Date(), data.exp * 1000)
              if (isExpired) {
                // token expirado, mas com o refresh token
                const { data: twoTokens } = await api.post('refresh-token', {
                  refresh_token: parsedRefreshToken.id
                })

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
                const { data: customerData } = await api.get(
                  `customer?token=${twoTokens.new_token}`
                )
                dispatch({
                  type: 'SIGN_IN',
                  payload: {
                    customer: { email: customerData.email }
                  }
                })
              } else {
                // token válido
                const { data } = await api.get(`customer?token=${token}`)

                dispatch({
                  type: 'SIGN_IN',
                  payload: {
                    customer: { email: data.email }
                  }
                })
              }
            } else {
              // Sem o token, mas com o refresh token
              const { data: twoTokens } = await api.post('refresh-token', {
                refresh_token: parsedRefreshToken.id
              })

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
              const { data: customerData } = await api.get(
                `customer?token=${twoTokens.new_token}`
              )
              dispatch({
                type: 'SIGN_IN',
                payload: {
                  customer: { email: customerData.email }
                }
              })
            }
          }
        } else {
          signOut()
        }
      } catch (error) {
        console.log({ error })
        signOut()
      }
    }

    loadCustomer()
  }, [])

  return (
    <AuthContext.Provider value={{ authState, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
