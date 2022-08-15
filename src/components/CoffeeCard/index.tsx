import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import Arabe from '../../assets/arabe.png'
import { Actions, BuyContainer, CoffeeCardContainer } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Arabe} alt="" />
      <span>Tradicional</span>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyContainer>
        <div>
          <span>R$</span> <span>9,90</span>
        </div>
        <Actions>
          <div>
            <button>
              <Minus weight="fill" />
            </button>
            <span>1</span>
            <button>
              <Plus weight="fill" />
            </button>
          </div>
          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </Actions>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
