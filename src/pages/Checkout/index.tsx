import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../util/format'
import { CoffeeInCartType } from '../../types'
import { CoffeeSelected } from '../../components/CoffeeSelected'
import { useCart } from '../../hooks/useCart'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import {
  CheckoutContainer,
  DeliveryAddress,
  InputsDeliveryAddress,
  InputsPaymentMethod,
  PaymentMethod,
  CoffeesInCart,
  TotalPrice,
  InputStyle,
  InputAndErrors,
  ErrorStyle,
  MessageNoItems
} from './styles'
import { useDelivery } from '../../hooks/useDelivery'
import { api } from '../../lib/api'
import { useStock } from '../../hooks/useStock'

type FormInputs = {
  postalCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

type Order = {
  point: { geographicCoordinates?: { lat: number; lng: number } } & Omit<
    FormInputs,
    'paymentMethod'
  >
  cart: CoffeeInCartType[]
  payment: { price: string } & Pick<FormInputs, 'paymentMethod'>
}

const schema = zod.object({
  postalCode: zod
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .regex(/[0-9]{5}-[0-9]{3}/, { message: 'Deve ser um CEP válido' }),
  street: zod.string().min(1, { message: 'Campo obrigatório' }),
  number: zod
    .number({
      invalid_type_error: 'Número deve ser um inteiro'
    })
    .nonnegative({ message: 'Número deve ser maior ou igual a 0' }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: 'Campo obrigatório' }),
  city: zod.string().min(1, { message: 'Campo obrigatório' }),
  state: zod
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .length(2, { message: 'Deve ter duas letras' }),
  paymentMethod: zod.nativeEnum(
    { credit: 'credit', debit: 'debit', money: 'money' },
    {
      errorMap(issue, _ctx) {
        if (issue.code === 'invalid_enum_value')
          return { message: 'Selecione uma forma de pagamento' }
        return { message: _ctx.defaultError }
      }
    }
  )
})

export function Checkout() {
  const { deliveryState } = useDelivery()
  const navigate = useNavigate()
  const { changePurchaseStatus } = useStock()
  const { cart, dispatch } = useCart()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      state: '',
      street: '',
      complement: '',
      city: '',
      postalCode: '',
      neighborhood: '',
      number: '',
      paymentMethod: ''
    }
  })

  const totalPriceItens = cart.reduce((acc, currentValue) => {
    return acc + currentValue.quantity * currentValue.price
  }, 0)

  const totalPrice = totalPriceItens + 3.7

  const totalPriceItensFormatted = formatPrice({
    options: { style: 'currency', currency: 'BRL' },
    number: totalPriceItens
  })

  const totalPriceFormatted = formatPrice({
    options: { style: 'currency', currency: 'BRL' },
    number: totalPrice
  })

  const onSubmit = async (data: FormInputs) => {
    const order: Order = {
      point: {
        city: data.city,
        complement: data.complement,
        neighborhood: data.neighborhood,
        number: data.number,
        postalCode: data.postalCode,
        state: data.state,
        street: data.street,
        geographicCoordinates:
          deliveryState.currentDelivery?.geographicCoordinates
      },
      cart,
      payment: { price: totalPriceFormatted, paymentMethod: data.paymentMethod }
    }

    await api.post('order', order)
    changePurchaseStatus()
    dispatch({ type: 'RESET_CART', payload: { initialState: [] } })
    navigate('/success', {
      state: {
        point: order.point,
        duration: deliveryState.currentDelivery?.duration,
        payment: order.payment
      }
    })
  }

  function handlePutAddress() {
    if (deliveryState.currentDelivery) {
      if (deliveryState.currentDelivery.city) {
        clearErrors('city')
        setValue('city', deliveryState.currentDelivery.city)
      }
      if (deliveryState.currentDelivery.postalCode) {
        clearErrors('postalCode')
        setValue('postalCode', deliveryState.currentDelivery.postalCode)
      }
      if (deliveryState.currentDelivery.state) {
        clearErrors('state')
        setValue('state', deliveryState.currentDelivery.state)
      }
      if (deliveryState.currentDelivery.street) {
        clearErrors('street')
        setValue('street', deliveryState.currentDelivery.street)
      }
    }
  }

  useEffect(() => {
    if (!cart.length) {
      clearErrors()
    }
  }, [cart])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  useEffect(() => {
    handlePutAddress()
  }, [])

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <h1>Complete seu pedido</h1>
            <DeliveryAddress>
              <header>
                <MapPinLine />
                <div>
                  <div>
                    <p>Endereço de Entrega</p>
                    <button type="button" onClick={handlePutAddress}>
                      Dados do mapa
                    </button>
                  </div>

                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </header>

              <InputsDeliveryAddress>
                <InputAndErrors>
                  <InputStyle
                    type="text"
                    placeholder="CEP"
                    hasError={!!errors.postalCode}
                    {...register('postalCode')}
                  />
                  {errors.postalCode && (
                    <ErrorStyle role="alert">
                      {errors.postalCode?.message}
                    </ErrorStyle>
                  )}
                </InputAndErrors>

                <InputAndErrors>
                  <InputStyle
                    type="text"
                    placeholder="Rua"
                    hasError={!!errors.street}
                    {...register('street')}
                  />
                  {errors.street && (
                    <ErrorStyle role="alert">
                      {errors.street?.message}
                    </ErrorStyle>
                  )}
                </InputAndErrors>

                <div>
                  <InputAndErrors>
                    <InputStyle
                      type="number"
                      placeholder="Número"
                      min={0}
                      hasError={!!errors.number}
                      {...register('number', {
                        setValueAs: v => parseInt(v),
                        valueAsNumber: true
                      })}
                    />
                    {errors.number && (
                      <ErrorStyle role="alert">
                        {errors.number?.message}
                      </ErrorStyle>
                    )}
                  </InputAndErrors>

                  <div>
                    <InputStyle
                      type="text"
                      placeholder="Complemento"
                      hasError={!!errors.complement}
                      {...register('complement', {})}
                    />
                    <span>Opcional</span>
                  </div>
                </div>

                <div>
                  <InputAndErrors>
                    <InputStyle
                      type="text"
                      placeholder="Bairro"
                      hasError={!!errors.neighborhood}
                      {...register('neighborhood', {})}
                    />
                    {errors.neighborhood && (
                      <ErrorStyle role="alert">
                        {errors.neighborhood?.message}
                      </ErrorStyle>
                    )}
                  </InputAndErrors>
                  <InputAndErrors>
                    <InputStyle
                      type="text"
                      placeholder="Cidade"
                      hasError={!!errors.city}
                      {...register('city', {})}
                    />
                    {errors.city && (
                      <ErrorStyle role="alert">
                        {errors.city?.message}
                      </ErrorStyle>
                    )}
                  </InputAndErrors>
                  <InputAndErrors>
                    <InputStyle
                      type="text"
                      placeholder="UF"
                      hasError={!!errors.state}
                      maxLength={2}
                      {...register('state', {})}
                    />
                    {errors.state && (
                      <ErrorStyle role="alert">
                        {errors.state?.message}
                      </ErrorStyle>
                    )}
                  </InputAndErrors>
                </div>
              </InputsDeliveryAddress>
            </DeliveryAddress>
            <br />
            <PaymentMethod hasError={!!errors.paymentMethod}>
              <header>
                <CurrencyDollar />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </header>

              <InputsPaymentMethod>
                <input
                  id="creditId"
                  type="radio"
                  value="credit"
                  {...register('paymentMethod')}
                />
                <label htmlFor="creditId">
                  <CreditCard />
                  <span>Cartão de crédito</span>
                </label>

                <input
                  id="debitId"
                  type="radio"
                  value="debit"
                  {...register('paymentMethod')}
                />
                <label htmlFor="debitId">
                  <Bank />
                  <span>Cartão de débito</span>
                </label>

                <input
                  id="moneyId"
                  type="radio"
                  value="money"
                  {...register('paymentMethod')}
                />
                <label htmlFor="moneyId">
                  <Money />
                  <span>Dinheiro</span>
                </label>
              </InputsPaymentMethod>
            </PaymentMethod>
          </div>
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <CoffeesInCart items={!!cart.length}>
            {cart.map(item => (
              <CoffeeSelected key={item.id} coffee={item} />
            ))}

            {cart.length ? (
              <TotalPrice>
                <div>
                  <span>Total de itens</span>
                  <span>{totalPriceItensFormatted}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 3,70</span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>{totalPriceFormatted}</strong>
                </div>
              </TotalPrice>
            ) : (
              <MessageNoItems>
                Adicione pelo menos um café no carrinho
              </MessageNoItems>
            )}

            <input
              type="submit"
              value="Confirmar pedido"
              disabled={isSubmitting || !cart.length}
            />
          </CoffeesInCart>
        </div>
      </form>
    </CheckoutContainer>
  )
}
