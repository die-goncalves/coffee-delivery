export type CoffeeInStockType = {
  id: string
  image: string
  name: string
  description: string
  tags: string[]
  price: number
  stock: number
}

export type CoffeeInCartType = { quantity: number } & Omit<
  CoffeeInStockType,
  'stock'
>
