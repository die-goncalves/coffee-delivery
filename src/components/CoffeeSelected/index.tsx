import { Minus, Plus, Trash } from 'phosphor-react'
import Arabe from '../../assets/arabe.png'
import {
  CoffeeSelectedContainer,
  OrderInfo,
  ChangeAmountCoffeeInCartContainer,
  RemoveCoffeeFromCartButton
} from './styles'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <div>
        <img src={Arabe} alt="" />

        <OrderInfo>
          <p>Expresso Tradicional</p>
          <div>
            <ChangeAmountCoffeeInCartContainer>
              <button>
                <Minus weight="fill" />
              </button>
              <input type="number" min={0} readOnly placeholder="0" />
              <button>
                <Plus weight="fill" />
              </button>
            </ChangeAmountCoffeeInCartContainer>
            <RemoveCoffeeFromCartButton>
              <Trash />
              Remover
            </RemoveCoffeeFromCartButton>
          </div>
        </OrderInfo>
      </div>
      <span>R$ 9,90</span>
    </CoffeeSelectedContainer>
  )
}
