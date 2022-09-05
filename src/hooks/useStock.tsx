import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../lib/api'
import { CoffeeData, CoffeeType } from '../types'

type StockContextType = {
  coffees: CoffeeType[]
  stockSpecificCoffee: (coffeeId: string) => number | undefined
}
const StockContext = createContext({} as StockContextType)

type StockProviderProps = {
  children: ReactNode
}
export function StockProvider({ children }: StockProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    async function loadCoffees() {
      const { data } = await api.get('coffees')
      const formattedData = data.map((item: CoffeeData) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        description: item.description,
        price: item.price,
        storeId: item.storeId,
        coffeesOnTags: item.coffeesOnTags,
        stock: item.stock
      }))
      setCoffees(formattedData)
    }
    loadCoffees()
  }, [])

  function stockSpecificCoffee(coffeeId: string) {
    return coffees.find(item => item.id === coffeeId)?.stock?.quantity
  }

  return (
    <StockContext.Provider
      value={{
        coffees,
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
