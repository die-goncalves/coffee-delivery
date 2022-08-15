import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  position: sticky;
  z-index: 99999;
  top: 0;
  justify-content: space-between;
  padding: 2rem 10rem;
  background: ${props => props.theme['base/background']};
`

export const CoffeeDeliveryLogoLink = styled.a`
  font-size: 0;
`

export const LocationAndCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;
  color: ${props => props.theme['brand/purple-dark']};
  background: ${props => props.theme['brand/purple-light']};

  svg {
    flex: none;
    font-size: 1.375rem;
    color: ${props => props.theme['brand/purple']};
  }
`

export const CartLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;
  background: ${props => props.theme['brand/yellow-light']};

  svg {
    flex: none;
    font-size: 1.375rem;
    color: ${props => props.theme['brand/yellow-dark']};
  }
`
