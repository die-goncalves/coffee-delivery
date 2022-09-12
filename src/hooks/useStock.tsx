import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/apiClient'
import { CoffeeData, CoffeeType } from '../types'

type StockContextType = {
  coffees: CoffeeType[]
  stockSpecificCoffee: (coffeeId: string) => number | undefined
  changePurchaseStatus: () => void
}
const StockContext = createContext({} as StockContextType)

type StockProviderProps = {
  children: ReactNode
}
export function StockProvider({ children }: StockProviderProps) {
  const [wasPurchaseProcessed, setWasPurchaseProcessed] = useState<boolean>()
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
      setWasPurchaseProcessed(false)
    }
    if (wasPurchaseProcessed !== false) loadCoffees()
  }, [wasPurchaseProcessed])

  function stockSpecificCoffee(coffeeId: string) {
    return coffees.find(item => item.id === coffeeId)?.stock?.quantity
  }

  function changePurchaseStatus() {
    setWasPurchaseProcessed(prevState => !prevState)
  }

  return (
    <StockContext.Provider
      value={{
        coffees,
        stockSpecificCoffee,
        changePurchaseStatus
      }}
    >
      {children}
    </StockContext.Provider>
  )
}

export function useStock() {
  return useContext(StockContext)
}
