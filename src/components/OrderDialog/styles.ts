import styled from 'styled-components'

export const OrderDialogContainer = styled.div`
  display: flex;
`

export const SectionOrder = styled.section`
  position: relative;
  background: ${props => props.theme.colors['base/card']};
  border-radius: 6px;
  overflow: hidden;

  color: ${props => props.theme.colors['base/text']};
`

export const Header = styled.div`
  display: flex;
  position: relative;
  height: 4.375rem;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 0 0 32px -24px ${props => props.theme.colors['base/black']};
  background: ${props => props.theme.colors['base/card']};

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${props => props.theme.colors['base/subtitle']};
    font-size: 1rem;
  }
  & > button {
    all: unset;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-25%, 25%);
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    background: red;
    padding: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme.colors['base/card']};

    transition: all 0.2s linear;
    &:hover {
      background: ${props => props.theme.colors['base/button']};
    }

    svg {
      color: ${props => props.theme.colors['brand/purple']};
    }
  }

  @media (min-width: 320px), (max-width: 320px) {
    height: 3rem;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0 0 32px -20px ${props => props.theme.colors['base/black']};
    h2 {
      font-size: 1.125rem;
    }
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
    height: 4.375rem;
    align-items: center;
    padding: 1.5rem;
  }
`

export const TriggerButton = styled.button`
  align-items: center;
  all: unset;
  cursor: pointer;
  color: ${props => props.theme.colors['brand/purple']};
  transition: all 0.2s linear;
  &:hover {
    color: ${props => props.theme.colors['brand/purple-dark']};
  }

  @media (min-width: 320px), (max-width: 320px) {
    font-size: 0.875rem;
  }
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: auto;
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    background: ${props => props.theme.colors['base/background']};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props =>
      props.theme.name === 'dark-theme'
        ? props.theme.colors['brand/purple']
        : props.theme.colors['brand/purple-light']};
    &:hover {
      background: ${props =>
        props.theme.name === 'dark-theme'
          ? props.theme.colors['brand/purple-dark']
          : props.theme.colors['brand/purple']};
    }
    &:active {
      background: ${props =>
        props.theme.name === 'dark-theme'
          ? props.theme.colors['brand/purple-light']
          : props.theme.colors['brand/purple-dark']};
    }
  }

  @media (min-width: 320px), (max-width: 320px) {
    padding: 0 0.5rem 0.5rem;
    max-height: 28rem;
    &::-webkit-scrollbar {
      width: 1vw;
      height: 1vw;
    }
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
    padding: 0 1.5rem 1.5rem;
    max-height: 30.25rem;
    &::-webkit-scrollbar {
      width: 0.6vw;
      height: 0.6vw;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.colors['base/title']};

    margin: 0.5rem auto;
  }

  @media (min-width: 320px), (max-width: 320px) {
    & > h2 {
      font-size: 1rem;
    }
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
  }
`

export const CoffeeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Coffee = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${props => props.theme.colors['base/background']};
  box-shadow: inset 0 0 0 1px ${props => props.theme.colors['brand/purple']};

  & > div {
    display: flex;
    flex-direction: column;

    & > p {
      font-size: 0.9rem;
      span {
        font-weight: 700;
      }
    }

    & > div {
      p:first-child {
        font-family: 'Baloo 2', cursive;
        font-size: 1rem;
        font-weight: 700;
        color: ${props => props.theme.colors['base/subtitle']};
      }
      span {
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 320px), (max-width: 320px) {
    align-items: start;
    & > div {
      & > p {
        font-size: 0.875rem;
      }
      & > div {
        p:first-child {
          font-size: 0.875rem;
        }
        span {
          font-size: 0.875rem;
        }
      }
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
    align-items: center;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  @media (min-width: 768px) {
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  @media (min-width: 1024px) {
    align-items: center;
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`

export const Payment = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div:first-child {
    span {
      text-transform: capitalize;
    }
  }
  & > div:last-child {
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 320px), (max-width: 320px) {
    font-size: 0.875rem;

    div + div {
      margin-top: 0.5rem;
    }
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
  }
`

export const DeliveryLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div:first-child {
    & > p {
      font-weight: 700;
    }
    & > div {
      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  & > div:last-child {
    & > p {
      font-weight: 700;
    }
    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;

      div {
        display: flex;
        border-radius: 6px;
        justify-content: space-between;
      }
    }
  }

  @media (min-width: 320px), (max-width: 320px) {
    gap: 0.5rem;
    font-size: 0.875rem;

    div + div {
      margin-top: 0.5rem;
    }
    p + div {
      margin-top: 0.5rem;
    }
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
  }
`
