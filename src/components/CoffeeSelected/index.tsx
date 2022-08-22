import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../util/format'
import { CoffeeInCartType } from '../../types'
import {
  CoffeeSelectedContainer,
  OrderInfo,
  ChangeAmountCoffeeInCartContainer,
  RemoveCoffeeFromCartButton
} from './styles'
import { useStock } from '../../hooks/useStock'

type CoffeeSelectedProps = {
  coffee: CoffeeInCartType
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { stockSpecificCoffee } = useStock()
  const {
    updateQuantityOfSpecificCoffeeInCart,
    removeCoffeesSameTypeFromTheCart
  } = useCart()

  function handleIncreaseQuantity() {
    updateQuantityOfSpecificCoffeeInCart(coffee, coffee.quantity + 1)
  }
  function handleDecreaseQuantity() {
    if (coffee.quantity === 1) {
      removeCoffeesSameTypeFromTheCart(coffee)
    } else {
      updateQuantityOfSpecificCoffeeInCart(coffee, coffee.quantity - 1)
    }
  }
  function removeCoffee() {
    removeCoffeesSameTypeFromTheCart(coffee)
  }

  const price = formatPrice({
    options: { style: 'currency', currency: 'BRL' },
    number: coffee.price
  })

  const stockQuantityOfThisCoffee = stockSpecificCoffee(coffee.id) ?? 0
  const disableIncreaseButton = coffee.quantity === stockQuantityOfThisCoffee

  return (
    <CoffeeSelectedContainer>
      <div>
        <img src={coffee.image} alt={coffee.name} />

        <OrderInfo>
          <p>{coffee.name}</p>
          <div>
            <ChangeAmountCoffeeInCartContainer>
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById(
                    `input:coffee-${coffee.id}`
                  ) as HTMLInputElement
                  if (input) {
                    handleDecreaseQuantity()
                  }
                }}
              >
                <Minus weight="bold" />
              </button>
              <input
                id={`input:coffee-${coffee.id}`}
                type="number"
                readOnly
                value={coffee.quantity}
              />
              <button
                type="button"
                disabled={disableIncreaseButton}
                onClick={() => {
                  const input = document.getElementById(
                    `input:coffee-${coffee.id}`
                  ) as HTMLInputElement
                  if (input) {
                    handleIncreaseQuantity()
                  }
                }}
              >
                <Plus weight="bold" />
              </button>
            </ChangeAmountCoffeeInCartContainer>
            <RemoveCoffeeFromCartButton type="button" onClick={removeCoffee}>
              <Trash />
              Remover
            </RemoveCoffeeFromCartButton>
          </div>
        </OrderInfo>
      </div>
      <span>{price}</span>
    </CoffeeSelectedContainer>
  )
}
