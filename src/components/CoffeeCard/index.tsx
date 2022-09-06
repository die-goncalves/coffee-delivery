import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCart } from '../../hooks/useCart'
import { CoffeeType } from '../../types'
import { formatPrice } from '../../util/format'
import { Actions, BuyContainer, CoffeeCardContainer, Tags } from './styles'

type CoffeeCardProps = {
  coffee: CoffeeType
}

type FormInputs = {
  desiredQuantity: number
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState,
    formState: { isSubmitSuccessful }
  } = useForm<FormInputs>({ defaultValues: { desiredQuantity: 0 } })
  const { putCoffeeInCart } = useCart()

  const priceFormatted = formatPrice({
    options: { style: 'decimal', minimumFractionDigits: 2 },
    number: coffee.price
  })

  async function handleAddCoffeeInCart(data: FormInputs) {
    if (data.desiredQuantity) putCoffeeInCart(coffee, data.desiredQuantity)
  }

  const watchDesiredQuantity = watch('desiredQuantity')
  const stockQuantityOfThisCoffee = coffee.stock?.quantity ?? 0
  const disableIncreaseButton =
    watchDesiredQuantity === stockQuantityOfThisCoffee
  const outOfStock = stockQuantityOfThisCoffee === 0

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <CoffeeCardContainer outOfStock={outOfStock}>
      <img src={coffee.image} alt={coffee.name} />
      <Tags>
        {coffee.coffeesOnTags.map(item => (
          <span key={item.tag.id}>{item.tag.name}</span>
        ))}
      </Tags>

      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>

      <BuyContainer>
        <div>
          <span>R$</span> <span>{priceFormatted}</span>
        </div>
        <Actions onSubmit={handleSubmit(handleAddCoffeeInCart)}>
          <div>
            <button
              type="button"
              disabled={watchDesiredQuantity === 0}
              onClick={() => {
                const input = document.getElementById(
                  `input:coffee-${coffee.id}`
                ) as HTMLInputElement
                if (input) {
                  input.stepDown()
                  setValue('desiredQuantity', parseInt(input.value))
                }
              }}
            >
              <Minus weight="bold" />
            </button>
            <input
              id={`input:coffee-${coffee.id}`}
              type="number"
              min={0}
              readOnly
              {...register('desiredQuantity', { valueAsNumber: true })}
            />
            <button
              type="button"
              disabled={disableIncreaseButton}
              onClick={() => {
                const input = document.getElementById(
                  `input:coffee-${coffee.id}`
                ) as HTMLInputElement
                if (input) {
                  input.stepUp()
                  setValue('desiredQuantity', parseInt(input.value))
                }
              }}
            >
              <Plus weight="bold" />
            </button>
          </div>
          <button type="submit" disabled={outOfStock}>
            <ShoppingCartSimple weight="fill" />
          </button>
        </Actions>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
