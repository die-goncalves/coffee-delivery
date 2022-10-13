import styled from 'styled-components'

export const DashboardContainer = styled.div`
  @media (min-width: 320px), (max-width: 320px) {
    padding: 1.5rem 1rem;
    max-width: 22.5rem;
    margin: 0 auto;
    strong {
      font-size: 0.875rem;
    }
    span {
      font-size: 0.75rem;
    }
    .group-order {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 1rem;
    }
  }
  @media (min-width: 640px) {
    max-width: initial;
    strong {
      font-size: 1rem;
    }
    span {
      font-size: 0.875rem;
    }
    .group-order {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1024px) {
    .group-order {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1280px) {
    padding: 2rem 5rem;
    .group-order {
      grid-gap: 1.5rem;
    }
  }
  @media (min-width: 1440px) {
    padding: 2rem 10rem;
  }
`

export const OrderCardContainer = styled.div`
  display: flex;
  border-radius: 6px 36px;
  background: ${props => props.theme.colors['base/card']};

  transform: translate(0);
  box-shadow: none;

  transition: all 0.2s linear;

  &:hover {
    box-shadow: -4px 0px 0 0 ${props => props.theme.colors['brand/purple']};
    transform: translate(4px, 0px);
  }
`

export const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  padding: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  strong {
    display: block;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${props => props.theme.colors['base/subtitle']};
  }
  span {
    color: ${props => props.theme.colors['base/label']};
  }

  & > div {
    & > button {
      margin: 0 auto;
    }
  }
`
