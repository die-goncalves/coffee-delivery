import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { CoffeeInStockType } from '../types'

type StockContextType = {
  stock: CoffeeInStockType[]
  stockSpecificCoffee: (coffeeId: string) => number | undefined
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

  return (
    <StockContext.Provider
      value={{
        stock,
        stockSpecificCoffee
      }}
    >
      {children}
    </StockContext.Provider>
  )
}

export function useStock() {
  return useContext(StockContext)
}
