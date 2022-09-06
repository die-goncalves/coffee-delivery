import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  & form {
    display: flex;
    gap: 2rem;

    & > div h1 {
      font-size: 1.125rem;
      font-family: 'Baloo 2', cursive;
      font-size: 700;
      margin-bottom: 1rem;
    }
  }

  input {
    color: ${props => props.theme.colors['base/title']};
  }

  @media (min-width: 320px) {
    padding: 2rem 0rem;
    & form {
      flex-direction: column;
      & > div h1 {
        margin-left: 1rem;
      }
    }
  }
  @media (min-width: 640px) {
    padding: 2rem 2rem;
    & form {
      & > div h1 {
        margin-left: 0;
      }
    }
  }
  @media (min-width: 1280px) {
    padding: 2rem 5rem;
    & form {
      & > div:first-child {
        flex: 1;
      }
      flex-direction: initial;
      align-items: start;
      gap: 2.125rem;
    }
  }
  @media (min-width: 1440px) {
    padding: 2.5rem 10rem;
    & form {
      /* flex-direction: initial; */
      /* flex-wrap: wrap; */
      /* align-items: start; */
      gap: 1.3125rem;
      /* justify-content: space-between; */
    }
  }
`

export const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors['base/card']};
  border-radius: 6px;

  header {
    display: flex;
    margin-bottom: 2rem;

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme.colors['brand/yellow-dark']};
      margin-right: 0.5rem;
    }

    & > div {
      flex: 1;

      span {
        color: ${props => props.theme.colors['base/text']};
      }

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          color: ${props => props.theme.colors['base/subtitle']};
        }
        button {
          display: flex;
          font-size: 1rem;
          width: max-content;
          border: none;
          color: ${props => props.theme.colors['brand/yellow']};
          background: ${props => props.theme.colors['base/card']};
          cursor: pointer;
          outline: none;

          font-family: 'Baloo 2', cursive;
          font-weight: 700;

          transition-duration: 0.2s;
          transition-property: color;
          transition-timing-function: ease-out;

          &:hover {
            color: ${props => props.theme.colors['brand/yellow-dark']};
          }

          @media (min-width: 320px) {
            font-size: 0.9rem;
          }
          @media (min-width: 480px) {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media (min-width: 320px) {
    padding: 1rem;
    width: 100%;

    header {
      p {
        font-size: 0.9rem;
      }
      span {
        font-size: 0.7875rem;
      }
    }
  }
  @media (min-width: 480px) {
    header {
      p {
        font-size: 1rem;
      }
      span {
        font-size: 0.875rem;
      }
    }
  }
  @media (min-width: 640px) {
    padding: 2.5rem;
  }
  @media (min-width: 1440px) {
    /* width: 40rem; */
  }
`

export const InputsDeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input[name='postalCode'] {
    width: 12.5rem;
  }

  // Grupo de inputs: número e complemento
  & > div:nth-child(3) {
    display: flex;
    align-items: start;
    gap: 0.75rem;

    input[name='number'] {
      width: 12.5rem;
    }

    // Input de complemento
    & > div:last-child {
      display: flex;
      position: relative;
      flex: 1;

      input {
        flex: 1;
        padding-right: 62px;
      }

      span {
        position: absolute;
        font-style: italic;
        color: ${props => props.theme.colors['base/label']};

        top: 50%;
        right: 0;
        transform: translate(-0.75rem, -50%);
      }
    }
  }

  @media (min-width: 320px) {
    input {
      font-size: 0.9rem;
      &::placeholder {
        font-size: 0.9rem;
      }
    }

    input[name='postalCode'] {
      width: 100%;
    }

    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > div {
        width: 100%;

        &:first-child {
          input[name='number'] {
            width: 100%;
          }
        }

        &:last-child {
          span {
            font-size: 0.675rem;
          }
        }
      }
    }

    & > div:last-of-type {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;

      input[name='neighborhood'],
      input[name='state'],
      input[name='city'] {
        width: inherit;
      }
    }
  }

  @media (min-width: 480px) {
    input {
      font-size: 1rem;
      &::placeholder {
        font-size: 1rem;
      }
    }

    & > div:nth-child(3) {
      div {
        span {
          font-size: 0.75rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    input[name='postalCode'] {
      width: 12.5rem;
    }

    & > div:nth-child(3) {
      display: flex;
      flex-direction: row;
      gap: 0.75rem;

      & > div {
        &:first-child {
          width: 12.5rem;
          input[name='number'] {
            width: 100%;
          }
        }
        &:last-child {
          flex: 1;
        }
      }
    }

    // Grupo de inputs: bairro, estado e cidade
    & > div:last-of-type {
      display: flex;
      flex-direction: row;
      gap: 0.75rem;

      input[name='neighborhood'] {
        width: 12.5rem;
      }
      & > div:nth-child(2) {
        flex: 1;
      }
      input[name='state'] {
        width: 7.125rem;
      }
    }
  }
`

type PaymentMethodProps = {
  hasError: boolean
}
export const PaymentMethod = styled.div<PaymentMethodProps>`
  display: flex;
  flex-direction: column;
  width: 40rem;
  background: ${props => props.theme.colors['base/card']};
  border-radius: 6px;

  header {
    display: flex;
    margin-bottom: 2rem;

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme.colors['brand/purple']};
      margin-right: 0.5rem;
    }
    p {
      color: ${props => props.theme.colors['base/subtitle']};
    }
    span {
      color: ${props => props.theme.colors['base/text']};
    }
  }

  ${props =>
    props.hasError &&
    `box-shadow: inset 0 0 0 2px ${props.theme.colors['base/error']};`}

  @media (min-width: 320px) {
    padding: 1rem;
    width: 100%;

    header {
      p {
        font-size: 0.9rem;
      }
      span {
        font-size: 0.7875rem;
      }
    }
  }

  @media (min-width: 480px) {
    header {
      p {
        font-size: 1rem;
      }
      span {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 640px) {
    padding: 2.5rem;
    width: 100%;
  }
`

export const InputsPaymentMethod = styled.div`
  display: grid;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type='radio']:checked + label {
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors['brand/purple']};
    background: ${props =>
      props.theme.name === 'dark-theme'
        ? props.theme.colors['base/background']
        : props.theme.colors['brand/purple-light']};
  }

  input[type='radio']:hover:not(:checked) + label {
    background: ${props => props.theme.colors['base/hover']};
  }

  input[type='radio']:focus:not(:checked) + label {
    background: ${props => props.theme.colors['base/hover']};
  }

  label {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 6px;
    background: ${props => props.theme.colors['base/button']};

    cursor: pointer;

    transition-duration: 0.2s;
    transition-property: background-color;
    transition-timing-function: ease-out;

    svg {
      flex: none;
      font-size: 1rem;
      color: ${props => props.theme.colors['brand/purple']};
    }
    span {
      color: ${props => props.theme.colors['base/text']};
      line-height: 1.6;
      text-transform: uppercase;
    }
  }

  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem 0;

    label {
      span {
        font-size: 0.675rem;
      }
    }
  }
  @media (min-width: 480px) {
    label {
      span {
        font-size: 0.75rem;
      }
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    gap: 0 0.75rem;
  }
`

type CoffeesInCartProps = {
  items: boolean
}
export const CoffeesInCart = styled.div<CoffeesInCartProps>`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors['base/card']};
  border-radius: 6px 44px;

  & > div + div {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    border-top: 1px solid ${props => props.theme.colors['base/button']};
  }

  & > input {
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    background: ${props => props.theme.colors['brand/yellow']};
    color: ${props => props.theme.colors['base/background']};

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;

    cursor: pointer;

    transition-duration: 0.2s;
    transition-property: background-color;
    transition-timing-function: ease-out;

    /* &:hover:not(:disabled) {
      background: ${props => props.theme.colors['brand/yellow-dark']};
    }
    &:disabled {
      cursor: wait;
      opacity: 0.75;
    } */

    ${props =>
      props.items
        ? `
            &:hover:not(:disabled) {
              background: ${props.theme.colors['brand/yellow-dark']};
            }
            &:disabled {
              cursor: wait;
              opacity: 0.75;
            };
          `
        : `
            &:disabled {
              cursor: not-allowed;
              opacity: 0.75;
            };
          `}
  }

  @media (min-width: 320px) {
    padding: 1rem;
    width: 100%;

    & > input {
      font-size: 0.7875rem;
    }
  }
  @media (min-width: 640px) {
    padding: 2.5rem;
  }
  @media (min-width: 1280px) {
    width: 28rem;
  }
  @media (min-width: 1440px) {
    width: 28rem;
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
    color: ${props => props.theme.colors['base/text']};
  }
  & > div:nth-child(3) {
    strong {
      font-weight: 700;
    }
  }

  @media (min-width: 320px) {
    & > div:nth-child(1),
    & > div:nth-child(2) {
      span:first-child {
        font-size: 0.7875rem;
      }
      span:last-child {
        font-size: 0.9rem;
      }
    }
    & > div:nth-child(3) {
      strong {
        font-size: 1.125rem;
      }
    }
  }
  @media (min-width: 480px) {
    & > div:nth-child(1),
    & > div:nth-child(2) {
      span:first-child {
        font-size: 0.875rem;
      }
      span:last-child {
        font-size: 1rem;
      }
    }
    & > div:nth-child(3) {
      strong {
        font-size: 1.25rem;
      }
    }
  }
`

export const InputAndErrors = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
    font-size: 0.875rem;
    padding: 0.75rem;
    border-radius: 4px;
    border: none;
    background: ${props => props.theme.colors['base/input']};
    caret-color: ${props => props.theme.colors['base/label']};

    outline: none;

    transition-duration: 0.2s;
    transition-property: box-shadow;
    transition-timing-function: ease-out;

    &::placeholder {
      font-size: 0.875rem;
      color: ${props => props.theme.colors['base/label']};
    }
  }
`
type InputStyleProps = {
  hasError: boolean
}
export const InputStyle = styled(Input)<InputStyleProps>`
  ${props =>
    props.hasError
      ? `box-shadow: inset 0 0 0 2px ${props.theme.colors['base/error']};`
      : `
        box-shadow: inset 0 0 0 2px ${props.theme.colors['base/button']};
        &:focus {
          box-shadow: inset 0 0 0 2px ${props.theme.colors['brand/yellow-dark']};
        }
      `}
`

export const ErrorStyle = styled.span`
  margin-top: 0.25rem;
  color: ${props => props.theme.colors['base/error']};
  font-size: 0.8rem;

  @media (min-width: 320px) {
    font-size: 0.675rem;
  }
  @media (min-width: 480px) {
    font-size: 0.75rem;
  }
`

export const MessageNoItems = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  text-align: center;

  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${props => props.theme.colors['base/subtitle']};
`
