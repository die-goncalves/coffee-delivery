import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 16rem;
  background: ${props => props.theme['base/card']};
  border-radius: 6px 36px;

  & > h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${props => props.theme['base/subtitle']};
  }
  & > p {
    color: ${props => props.theme['base/label']};
  }

  @media (min-width: 320px) {
    width: auto;
    padding: 0 1rem 1rem;

    & > img {
      margin-top: -1rem;
      width: 6rem;
      height: 6rem;
    }
    & > h1 {
      font-size: 1rem;
    }
    & > p {
      font-size: 0.7rem;
    }

    & h1 + p {
      margin-top: 0.4rem;
    }
  }
  @media (min-width: 640px) {
    width: auto;
    padding: 0 1.5rem 1.25rem;

    & > img {
      margin-top: -1.25rem;
      width: 7.5rem;
      height: 7.5rem;
    }
    & > h1 {
      font-size: 1.25rem;
    }
    & > p {
      font-size: 0.875rem;
    }

    & h1 + p {
      margin-top: 0.5rem;
    }
  }
`

export const BuyContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  & > div:first-child {
    color: ${props => props.theme['base/text']};

    & span:last-child {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
    }
  }

  @media (min-width: 320px) {
    & > div:first-child {
      & span:first-child {
        font-size: 0.7rem;
      }
      & span:last-child {
        font-size: 1.2rem;
      }
    }
  }
  @media (min-width: 640px) {
    & > div:first-child {
      & span:first-child {
        font-size: 0.875rem;
      }
      & span:last-child {
        font-size: 1.5rem;
      }
    }
  }
`

export const Actions = styled.form`
  display: flex;
  gap: 0.5rem;
  & > div {
    background: ${props => props.theme['base/button']};
    display: flex;
    align-items: center;
    gap: 0.125rem;
    border-radius: 6px;

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

      svg {
        font-size: 0.875rem;
      }
    }
  }

  button[type='submit'] {
    display: flex;
    border: none;
    border-radius: 6px;
    color: ${props => props.theme['base/card']};
    background: ${props => props.theme['brand/purple-dark']};

    cursor: pointer;

    transition-duration: 0.2s;
    transition-property: background;
    transition-timing-function: ease-out;

    &:hover {
      background: ${props => props.theme['brand/purple']};
    }

    svg {
      flex: none;
      font-size: 1.375rem;
    }
  }

  @media (min-width: 320px) {
    & > div {
      padding: 0.4rem;
      input {
        width: 1.08rem;
      }
    }
    button[type='submit'] {
      padding: 0.4rem;
    }
  }

  @media (min-width: 640px) {
    & > div {
      padding: 0.5rem;
      input {
        width: 1.35rem;
      }
    }
    button[type='submit'] {
      padding: 0.5rem;
    }
  }
`

export const Tags = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 4px;

  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 4px;
    background: ${props => props.theme['base/background']};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme['brand/purple-light']};
    &:hover {
      background: ${props => props.theme['brand/purple']};
    }
    &:active {
      background: ${props => props.theme['brand/purple-dark']};
    }
  }

  & > span {
    width: fit-content;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
    color: ${props => props.theme['brand/yellow-dark']};
    background: ${props => props.theme['brand/yellow-light']};
  }

  & > span + span {
    margin-left: 0.25rem;
  }

  @media (min-width: 320px) {
    max-width: 11.40625rem;
    & > span {
      font-size: 0.5rem;
    }
  }
  @media (min-width: 480px) {
    max-width: 11.375rem;
  }
  @media (min-width: 640px) {
    max-width: 13.75rem;
    & > span {
      font-size: 0.625rem;
    }
  }
  @media (min-width: 640px) {
    max-width: 13rem;
  }
`
