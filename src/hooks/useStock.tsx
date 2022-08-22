import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { CoffeeInCartType, CoffeeInStockType } from '../types'

type StockContextType = {
  stock: CoffeeInStockType[]
  updateStock: (newStock: CoffeeInCartType[]) => void
  stockSpecificCoffee: (coffeeId: string) => number | undefined
  updateCoffeesInStock: (coffees: any[]) => Promise<void>
}
const StockContext = createContext({} as StockContextType)

type StockProviderProps = {
  children: ReactNode
}
export function StockProvider({ children }: StockProviderProps) {
  const [stock, setStock] = useState<CoffeeInStockType[]>([])

  useEffect(() => {
    async function loadStock() {
      const response = await fetch('/api/stock')
        .then(response => response.json())
        .then(json => json)

      setStock(response.data)
    }

    loadStock()
  }, [])

  function stockSpecificCoffee(coffeeId: string) {
    return stock.find(item => item.id === coffeeId)?.stock
  }

  function updateStock(cart: CoffeeInCartType[]) {
    const newStock = [...stock]
    cart.forEach(item => {
      const responseId = newStock.findIndex(element => element.id === item.id)
      if (responseId !== undefined) {
        newStock[responseId] = {
          ...newStock[responseId],
          stock: newStock[responseId].stock - item.quantity
        }
      }
    })
    setStock(newStock)
  }

  async function updateCoffeesInStock(coffees: any[]) {
    for (const coffee of coffees) {
      await fetch(`/api/stock/${coffee.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          quantityToRemove: coffee.quantity
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(json => json)
    }
  }

  return (
    <StockContext.Provider
      value={{
        stock,
        stockSpecificCoffee,
        updateCoffeesInStock,
        updateStock
      }}
    >
      {children}
    </StockContext.Provider>
  )
}

export function useStock() {
  return useContext(StockContext)
}
