export type CoffeeData = {
  id: string
  image: string
  name: string
  description: string
  price: number
  storeId: string
  updatedAt: Date | null
  createdAt: Date
  coffeesOnTags: {
    tag: {
      id: string
      name: string
    }
  }[]
  stock: {
    id: string
    quantity: number
  } | null
}

export type CoffeeType = Omit<CoffeeData, 'updatedAt' | 'createdAt'>

export type CoffeeInCartType = { quantity: number } & Omit<CoffeeType, 'stock'>
