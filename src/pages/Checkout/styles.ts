import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;

  & form {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    gap: 2rem;

    & > div h1 {
      font-size: 1.125rem;
      font-family: 'Baloo 2', cursive;
      font-size: 700;
      margin-bottom: 1rem;
    }
  }
`

export const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 40rem;
  background: ${props => props.theme['base/card']};
  border-radius: 6px;

  header {
    display: flex;
    margin-bottom: 2rem;

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme['brand/yellow-dark']};
      margin-right: 0.5rem;
    }
    p {
      color: ${props => props.theme['base/subtitle']};
    }
    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base/text']};
    }
  }
`

export const InputsDeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input[name='postalCode'] {
    width: 12.5rem;
  }

  & > div:first-of-type {
    display: flex;
    gap: 0.75rem;

    input[name='number'] {
      width: 12.5rem;
    }
    div {
      display: flex;
      position: relative;
      flex: 1;

      input {
        flex: 1;
        padding-right: 62px;
      }
      span {
        position: absolute;
        font-size: 0.75rem;
        font-style: italic;
        color: ${props => props.theme['base/label']};

        top: 50%;
        right: 0;
        transform: translate(-0.75rem, -50%);
      }
    }
  }

  & > div:last-of-type {
    display: flex;
    gap: 0.75rem;

    input[name='neighborhood'] {
      width: 12.5rem;
    }
    input[name='state'] {
      width: 3.75rem;
    }
    input[name='city'] {
      flex: 1;
    }
  }
`

type PaymentMethodProps = {
  hasError: boolean
}
export const PaymentMethod = styled.div<PaymentMethodProps>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 40rem;
  background: ${props => props.theme['base/card']};
  border-radius: 6px;

  header {
    display: flex;
    margin-bottom: 2rem;

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme['brand/purple']};
      margin-right: 0.5rem;
    }
    p {
      color: ${props => props.theme['base/subtitle']};
    }
    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base/text']};
    }
  }

  ${props =>
    props.hasError &&
    `box-shadow: inset 0 0 0 2px ${props.theme['base/error']};`}
`

export const InputsPaymentMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 0.75rem;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type='radio']:checked + label {
    box-shadow: inset 0 0 0 1px ${props => props.theme['brand/purple']};
    background: ${props => props.theme['brand/purple-light']};
  }

  input[type='radio']:hover + label {
    background: ${props => props.theme['base/hover']};
  }

  input[type='radio']:focus:not(:checked) + label {
    background: ${props => props.theme['base/hover']};
  }

  label {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 6px;
    background: ${props => props.theme['base/button']};

    cursor: pointer;

    transition-duration: 0.2s;
    transition-property: background-color;
    transition-timing-function: ease-out;

    svg {
      flex: none;
      font-size: 1rem;
      color: ${props => props.theme['brand/purple']};
    }
    span {
      color: ${props => props.theme['base/text']};
      font-size: 0.75rem;
      line-height: 1.6;
      text-transform: uppercase;
    }
  }
`

export const CoffeesInCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 28rem;
  background: ${props => props.theme['base/card']};
  border-radius: 6px 44px;

  & > div + div {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    border-top: 1px solid ${props => props.theme['base/button']};
  }

  & > input {
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    background: ${props => props.theme['brand/yellow']};
    color: ${props => props.theme['base/white']};

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;

    cursor: pointer;

    transition-duration: 0.2s;
    transition-property: background-color;
    transition-timing-function: ease-out;

    &:hover:not(:disabled) {
      background: ${props => props.theme['brand/yellow-dark']};
    }
    &:disabled {
      cursor: wait;
      opacity: 0.75;
    }
  }
`

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div:nth-child(1),
  & > div:nth-child(2) {
    color: ${props => props.theme['base/text']};
    span:first-child {
      font-size: 0.875rem;
    }
  }
  & > div:nth-child(3) {
    strong {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`

const Input = styled.input`
    font-size: 0.875rem;
    padding: 0.75rem;
    border-radius: 4px;
    border: none;
    background: ${props => props.theme['base/input']};
    caret-color: ${props => props.theme['base/label']};

    outline: none;

    transition-duration: 0.2s;
    transition-property: box-shadow;
    transition-timing-function: ease-out;

    &::placeholder {
      font-size: 0.875rem;
      color: ${props => props.theme['base/label']};
    }
  }
`
type InputStyleProps = {
  hasError: boolean
}
export const InputStyle = styled(Input)<InputStyleProps>`
  ${props =>
    props.hasError
      ? `box-shadow: inset 0 0 0 2px ${props.theme['base/error']};`
      : `
        box-shadow: inset 0 0 0 2px ${props.theme['base/button']};
        &:focus {
          box-shadow: inset 0 0 0 2px ${props.theme['brand/yellow-dark']};
        }
      `}
`
