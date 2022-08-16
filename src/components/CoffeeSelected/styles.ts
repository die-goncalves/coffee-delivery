import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  background: ${props => props.theme['base/card']};

  & > div {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  & > span {
    color: ${props => props.theme['base/text']};
    font-weight: 700;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1.25rem;
  p {
    color: ${props => props.theme['base/subtitle']};
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const RemoveCoffeeFromCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme['base/text']};
  background: ${props => props.theme['base/button']};
  border: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.6;

  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: color, background-color;
  transition-timing-function: ease-out;

  svg {
    flex: none;
    font-size: 1rem;
    color: ${props => props.theme['brand/purple']};

    transition-duration: 0.2s;
    transition-property: color, background-color;
    transition-timing-function: ease-out;
  }

  &:hover {
    color: ${props => props.theme['base/subtitle']};
    background: ${props => props.theme['base/hover']};
    svg {
      color: ${props => props.theme['brand/purple-dark']};
    }
  }
`

export const ChangeAmountCoffeeInCartContainer = styled.div`
  background: ${props => props.theme['base/button']};
  display: flex;
  align-items: center;
  gap: 0.125rem;
  padding: 0.5rem;
  border-radius: 6px;

  input {
    text-align: center;
    width: 1.35rem;
    background: transparent;
    border: none;
    color: ${props => props.theme['base/title']};
    pointer-events: none;

    &::placeholder {
      color: ${props => props.theme['base/label']};
    }
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    display: flex;
    border: none;
    color: ${props => props.theme['brand/purple']};
    background: transparent;

    cursor: pointer;

    transition-duration: 0.2s;
    transition-property: color;
    transition-timing-function: ease-out;

    &:hover {
      color: ${props => props.theme['brand/purple-dark']};
    }

    svg {
      font-size: 0.875rem;
    }
  }
`
