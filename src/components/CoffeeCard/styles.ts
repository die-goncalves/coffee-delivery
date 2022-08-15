import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 16rem;
  padding: 0 1.5rem 1.25rem;
  background: ${props => props.theme['base/card']};
  border-radius: 6px 36px;

  & > img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
  & > span {
    width: fit-content;
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
    color: ${props => props.theme['brand/yellow-dark']};
    background: ${props => props.theme['brand/yellow-light']};

    margin-top: 0.75rem;
    margin-bottom: 1rem;
  }
  & > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['base/subtitle']};
  }
  & > p {
    font-size: 0.875rem;
    color: ${props => props.theme['base/label']};
  }

  & h1 + p {
    margin-top: 0.5rem;
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

    & span:first-child {
      font-size: 0.875rem;
    }
    & span:last-child {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  & > div {
    background: ${props => props.theme['base/button']};
    display: flex;
    align-items: center;
    gap: 0.125rem;
    padding: 0.5rem;
    border-radius: 6px;

    span {
      color: ${props => props.theme['base/title']};
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
  }

  & > button {
    display: flex;
    padding: 0.5rem;
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
`
