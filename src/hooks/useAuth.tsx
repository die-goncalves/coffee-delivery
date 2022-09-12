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
    if (data.error) throw new Error(data.message)

    await signIn({ email, password })
  }

  async function signIn({ email, password }: SignInCredentials) {
    const { data } = await api.post('session', {
      email,
      password
    })
    if (data.error) throw new Error(data.message)

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

    // navigate('/account/dashboard')
  }

  function signOut() {
    Cookies.remove('@coffee-delivery-v1.0.0:token')
    Cookies.remove('@coffee-delivery-v1.0.0:refresh-token')

    dispatch({ type: 'SIGN_OUT' })

    if (location.pathname === '/account/dashboard') navigate('/account/session')
  }

  useEffect(() => {
    ;(async () => {
      const { '@coffee-delivery-v1.0.0:token': token } = Cookies.get()

      if (token) {
        const { data } = await api.get(`customer?token=${token}`)

        if (data.error) signOut()

        dispatch({
          type: 'SIGN_IN',
          payload: {
            customer: { email: data.email }
          }
        })
      }
    })()
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
