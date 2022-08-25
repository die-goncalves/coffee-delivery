import CoffeeDeliveryLogo from '../../assets/coffee-delivery.svg'
import Coffee from '../../assets/coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartContainer,
  HeaderContainer,
  LocationAndCartContainer
} from './styles'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'
import { SelectTheme } from '../SelectTheme'

export function Header() {
  const { cart } = useCart()

  const quantityCoffee = cart.reduce((acc, currentItem) => {
    return acc + currentItem.quantity
  }, 0)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeDeliveryLogo} alt="Entrega de café" />
        <img src={Coffee} alt="Entrega de café" />
      </Link>

      <div>
        <SelectTheme />
        <LocationAndCartContainer>
          <Link to="/geolocation">
            <MapPin weight="fill" />
            &nbsp;<span>Porto Alegre, RS</span>
          </Link>
          <Link to="/checkout">
            <CartContainer>
              <div>
                {quantityCoffee > 99 ? (
                  <span>+ 99</span>
                ) : (
                  <span>{quantityCoffee}</span>
                )}
              </div>

              <ShoppingCart weight="fill" />
            </CartContainer>
          </Link>
        </LocationAndCartContainer>
      </div>
    </HeaderContainer>
  )
}
