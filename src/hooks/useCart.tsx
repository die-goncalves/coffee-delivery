import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { CoffeeInCartType, CoffeeType } from '../types'
import { useStock } from './useStock'

enum ActionTypes {
  INSERT_QUANTITY = 'INSERT_QUANTITY',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  RESET_CART = 'RESET_CART'
}

type CartContextType = {
  cart: CoffeeInCartType[]
  dispatch: React.Dispatch<any>
  putCoffeeInCart: (coffee: CoffeeType, desiredQuantity: number) => void
  updateQuantityOfSpecificCoffeeInCart: (
    coffee: CoffeeInCartType,
    desiredQuantity: number
  ) => void
  removeCoffeesSameTypeFromTheCart: (coffee: CoffeeInCartType) => void
}
const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const { coffees } = useStock()
  const [cart, dispatch] = useReducer(
    (state: CoffeeInCartType[], action: any) => {
      switch (action.type) {
        case ActionTypes.INSERT_QUANTITY: {
          const hasInCart = !!state.find(
            items => items.id === action.payload.coffee.id
          )

          if (hasInCart) {
            return state.map(item => {
              if (item.id === action.payload.coffee.id) {
                return { ...item, quantity: action.payload.desiredQuantity }
              }
              return item
            })
          } else {
            const { stock, ...newCoffee } = action.payload.coffee
            return [
              ...state,
              {
                ...newCoffee,
                quantity: action.payload.desiredQuantity
              }
            ]
          }
        }
        case ActionTypes.UPDATE_QUANTITY:
          return state.map(item => {
            if (item.id === action.payload.coffee.id) {
              return {
                ...item,
                quantity: action.payload.desiredQuantity
              }
            }
            return item
          })
        case ActionTypes.REMOVE_COFFEE:
          return state.filter(item => item.id !== action.payload.coffee.id)
        case ActionTypes.RESET_CART:
          return action.payload.initialState
        default:
          return state
      }
    },
    [],
    () => {
      const storedData = localStorage.getItem('@coffee-delivery-v1.0.0:cart')
      if (storedData) {
        return JSON.parse(storedData)
      } else {
        return []
      }
    }
  )

  function isCoffeeInTheStock(coffeeId: string, desiredQuantity: number) {
    const coffeeInTheStock = coffees.find(item => item.id === coffeeId)

    if (coffeeInTheStock && coffeeInTheStock.stock) {
      if (coffeeInTheStock.stock.quantity < 1) {
        console.error('Café não disponível')
        return false
      } else if (desiredQuantity > coffeeInTheStock.stock.quantity) {
        console.error('Quantidade solicitada fora de estoque')
        return false
      }
      return true
    } else {
      console.error('Não há mais um tipo deste café no estoque')
      return false
    }
  }

  function putCoffeeInCart(coffee: CoffeeType, desiredQuantity: number) {
    const hasInStock = isCoffeeInTheStock(coffee.id, desiredQuantity)

    if (hasInStock) {
      dispatch({
        type: 'INSERT_QUANTITY',
        payload: { coffee, desiredQuantity }
      })
    }
  }

  function updateQuantityOfSpecificCoffeeInCart(
    coffee: CoffeeInCartType,
    desiredQuantity: number
  ) {
    const hasInStock = isCoffeeInTheStock(coffee.id, desiredQuantity)

    if (hasInStock) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { coffee, desiredQuantity }
      })
    }
  }

  function removeCoffeesSameTypeFromTheCart(coffee: CoffeeInCartType) {
    dispatch({ type: 'REMOVE_COFFEE', payload: { coffee } })
  }

  useEffect(() => {
    const cartJSON = JSON.stringify(cart)
    localStorage.setItem('@coffee-delivery-v1.0.0:cart', cartJSON)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        putCoffeeInCart,
        updateQuantityOfSpecificCoffeeInCart,
        removeCoffeesSameTypeFromTheCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
