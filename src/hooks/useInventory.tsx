import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/apiClient'
import { CoffeeData, CoffeeType } from '../types'

type InventoryContextType = {
  coffees: CoffeeType[]
  inventorySpecificCoffee: (coffeeId: string) => number | undefined
  loadCoffees: () => Promise<void>
}
const InventoryContext = createContext({} as InventoryContextType)

type InventoryProviderProps = {
  children: ReactNode
}
export function InventoryProvider({ children }: InventoryProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  async function loadCoffees() {
    const { data } = await api.get('coffees')
    const formattedData = data.map((item: CoffeeData) => ({
      id: item.id,
      image: item.image,
      name: item.name,
      description: item.description,
      price: item.price / 100,
      storeId: item.storeId,
      coffeesOnTags: item.coffeesOnTags,
      inventory: item.inventory?.quantity
    }))
    setCoffees(formattedData)
  }

  useEffect(() => {
    loadCoffees()
  }, [])

  function inventorySpecificCoffee(coffeeId: string) {
    return coffees.find(item => item.id === coffeeId)?.inventory?.quantity
  }

  return (
    <InventoryContext.Provider
      value={{
        coffees,
        inventorySpecificCoffee,
        loadCoffees
      }}
    >
      {children}
    </InventoryContext.Provider>
  )
}

export function useInventory() {
  return useContext(InventoryContext)
}
