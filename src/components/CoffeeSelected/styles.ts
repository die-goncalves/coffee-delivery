import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  background: ${props => props.theme['base/card']};

  & > div {
    display: flex;
    align-items: center;
    flex: 1;
  }

  & > span {
    color: ${props => props.theme['base/text']};
    font-weight: 700;
  }

  @media (min-width: 320px) {
    & > div {
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    & > span {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 480px) {
    & > span {
      font-size: 1rem;
    }
  }
  @media (min-width: 640px) {
    & > div {
      img {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    color: ${props => props.theme['base/subtitle']};
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  @media (min-width: 320px) {
    margin-left: 1rem;
    & > p {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 480px) {
    & > p {
      font-size: 1rem;
    }
  }
`

export const RemoveCoffeeFromCartButton = styled.button`
  display: flex;
  align-items: center;
  color: ${props => props.theme['base/text']};
  background: ${props => props.theme['base/button']};
  border: none;
  text-transform: uppercase;
  line-height: 1.6;

  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: color, background-color;
  transition-timing-function: ease-out;

  svg {
    flex: none;
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

  @media (min-width: 320px) {
    padding: 0.2rem 0.25rem;
    border-radius: 3px;
    gap: 0.25rem;
    font-size: 0.7rem;
    svg {
      font-size: 0.7rem;
    }
  }
  @media (min-width: 480px) {
    padding: 0.4rem 0.5rem;
    border-radius: 6px;
    font-size: 0.675rem;
    svg {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 640px) {
    gap: 0.125rem;
    font-size: 0.75rem;
    svg {
      font-size: 1rem;
    }
  }
`

export const ChangeAmountCoffeeInCartContainer = styled.div`
  background: ${props => props.theme['base/button']};
  display: flex;
  align-items: center;
  gap: 0.125rem;

  input {
    text-align: center;
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

    &:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }
  }

  @media (min-width: 320px) {
    padding: 0.2rem 0.25rem;
    border-radius: 3px;
    input {
      font-size: 0.8rem;
      width: 1rem;
    }
    button {
      svg {
        font-size: 0.8rem;
      }
    }
  }
  @media (min-width: 640px) {
    padding: 0.5rem;
    border-radius: 6px;
    input {
      font-size: 1rem;
      width: 1.35rem;
    }
    button {
      svg {
        font-size: 0.875rem;
      }
    }
  }
`
