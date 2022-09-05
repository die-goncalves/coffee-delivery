import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Motoboy from '../../assets/motoboy.png'
import { useLocation } from 'react-router-dom'
import {
  IconStyle,
  Illustration,
  SuccessContainer,
  OrderInfo,
  OrderInfoContainer
} from './styles'

type CustomizedState = {
  point: {
    number: number
    street: string
    city: string
    state: string
  }
  duration: number
  payment: { price: string; paymentMethod: string }
}

export function Success() {
  const location = useLocation()
  const state = location.state as CustomizedState

  const paymentMethod = () => {
    if (state.payment.paymentMethod === 'money') return 'Dinheiro'
    if (state.payment.paymentMethod === 'credit') return 'Cartão de crédito'
    if (state.payment.paymentMethod === 'debit') return 'Cartão de débito'
  }

  return (
    <SuccessContainer>
      <OrderInfoContainer>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>

        <OrderInfo>
          <div>
            <IconStyle backgroundColor="purple">
              <MapPin weight="fill" />
            </IconStyle>

            <div>
              <p>
                Entrega em{' '}
                <span>
                  {state.point.street}, {state.point.number}
                </span>
              </p>
              <span>
                {state.point.city}, {state.point.state}
              </span>
            </div>
          </div>
          <div>
            <IconStyle backgroundColor="yellow">
              <Timer weight="fill" />
            </IconStyle>
            <div>
              <p>Previsão de entrega</p>
              <span>
                {state.duration + 10} min - {state.duration + 20} min
              </span>
            </div>
          </div>
          <div>
            <IconStyle backgroundColor="yellow-dark">
              <CurrencyDollar weight="fill" />
            </IconStyle>
            <div>
              <p>Pagamento na entrega</p>
              <span>
                {state.payment.price}, {paymentMethod()}
              </span>
            </div>
          </div>
        </OrderInfo>
      </OrderInfoContainer>
      <Illustration>
        <img src={Motoboy} alt="motoboy" />
      </Illustration>
    </SuccessContainer>
  )
}
