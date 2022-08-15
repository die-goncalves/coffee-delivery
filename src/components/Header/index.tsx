import CoffeeDeliveryLogo from '../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartLink,
  CoffeeDeliveryLogoLink,
  HeaderContainer,
  LocationAndCartContainer,
  LocationLink
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <CoffeeDeliveryLogoLink href="/">
        <img src={CoffeeDeliveryLogo} alt="Entrega de café" />
      </CoffeeDeliveryLogoLink>

      <LocationAndCartContainer>
        <LocationLink href="#">
          <MapPin weight="fill" />
          &nbsp;<span>Porto Alegre, RS</span>
        </LocationLink>
        <CartLink href="#">
          <ShoppingCart weight="fill" />
        </CartLink>
      </LocationAndCartContainer>
    </HeaderContainer>
  )
}
