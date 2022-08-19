import { createContext, ReactNode, useContext, useReducer } from 'react'
import { CoffeeInCartType, CoffeeInStockType } from '../types'
import { useStock } from './useStock'

enum ActionTypes {
  INSERT_QUANTITY = 'INSERT_QUANTITY',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE'
}

type CartContextType = {
  cart: CoffeeInCartType[]
  dispatch: React.Dispatch<any>
  putCoffeeInCart: (coffee: CoffeeInStockType, desiredQuantity: number) => void
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
  const { stock } = useStock()
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
            return [
              ...state,
              {
                ...action.payload.coffee,
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
        default:
          return state
      }
    },
    []
  )

  function isCoffeeInTheStock(coffeeId: string, desiredQuantity: number) {
    const coffee = stock.find(item => item.id === coffeeId)

    if (coffee) {
      if (coffee.stock < 1) {
        console.error('Café não disponível')
        return false
      } else if (desiredQuantity > coffee.stock) {
        console.error('Quantidade solicitada fora de estoque')
        return false
      }
      return true
    } else {
      console.error('Não há mais um tipo deste café no estoque')
      return false
    }
  }

  function putCoffeeInCart(coffee: CoffeeInStockType, desiredQuantity: number) {
    const hasInStock = isCoffeeInTheStock(coffee.id, desiredQuantity)

    console.log({ hasInStock })
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

    console.log({ hasInStock })
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
