import { CoffeeDeliveryLogo } from '../Logo/CoffeeDeliveryLogo'
import { CoffeeLogo } from '../Logo/CoffeLogo'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartContainer,
  HeaderContainer,
  LocationAndCartContainer
} from './styles'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'
import { SelectTheme } from '../SelectTheme'
import { useDelivery, DeliveryType } from '../../hooks/useDelivery'

export function Header() {
  const { cart } = useCart()
  const { deliveryState } = useDelivery()
  const { currentDelivery } = deliveryState

  const quantityCoffee = cart.reduce((acc, currentItem) => {
    return acc + currentItem.quantity
  }, 0)

  const address = (data: DeliveryType | undefined) => {
    let settingUpAddress = ''
    if (data) {
      if (data.street) {
        settingUpAddress += data.street
      }
      if (data.city) {
        settingUpAddress += data.street ? `, ${data.city}` : data.city
      }
      if (data.state) {
        settingUpAddress +=
          data.street || data.city ? `, ${data.state}` : data.state
      }
    }
    return settingUpAddress
  }
  const mountedAddress = address(currentDelivery)

  return (
    <HeaderContainer>
      <Link to="/">
        <CoffeeDeliveryLogo />
        <CoffeeLogo />
      </Link>

      <div>
        <SelectTheme />
        <LocationAndCartContainer>
          <Link to="/location" title={mountedAddress}>
            <MapPin weight="fill" />
            {mountedAddress && <span>&nbsp;{mountedAddress}</span>}
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
