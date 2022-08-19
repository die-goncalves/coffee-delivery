import CoffeeImage from '../../assets/coffee-image.png'
import Background from '../../assets/background.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'
import {
  CoffeeList,
  CoffeeListContainer,
  HomeContainer,
  IconStyle,
  IntroContainer,
  Item,
  ItemsContainer,
  MainContainer,
  TitleContainer
} from './styles'
import { useStock } from '../../hooks/useStock'

export function Home() {
  const { stock } = useStock()

  return (
    <HomeContainer>
      <IntroContainer>
        <img src={Background} alt="" />
        <MainContainer>
          <div>
            <TitleContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </TitleContainer>
            <ItemsContainer>
              <Item>
                <IconStyle backgroundColor="yellow-dark">
                  <ShoppingCart weight="fill" />
                </IconStyle>
                Compra simples e segura
              </Item>
              <Item>
                <IconStyle backgroundColor="text">
                  <Package weight="fill" />
                </IconStyle>
                Embalagem mantém o café intacto
              </Item>
              <Item>
                <IconStyle backgroundColor="yellow">
                  <Timer weight="fill" />
                </IconStyle>
                Entrega rápida e rastreada
              </Item>
              <Item>
                <IconStyle backgroundColor="purple">
                  <Coffee weight="fill" />
                </IconStyle>
                O café chega fresquinho até você
              </Item>
            </ItemsContainer>
          </div>

          <img src={CoffeeImage} alt="" />
        </MainContainer>
      </IntroContainer>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          {!!stock.length &&
            stock.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
