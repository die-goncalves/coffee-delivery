import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Motoboy from '../../assets/motoboy.png'
import {
  IconStyle,
  Illustration,
  SuccessContainer,
  OrderInfo,
  OrderInfoContainer
} from './styles'

export function Success() {
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
                Entrega em Rua <span>João Daniel Martinelli, 102</span>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <IconStyle backgroundColor="yellow">
              <Timer weight="fill" />
            </IconStyle>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </div>
          <div>
            <IconStyle backgroundColor="yellow-dark">
              <CurrencyDollar weight="fill" />
            </IconStyle>
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
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
