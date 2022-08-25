import styled from 'styled-components'

export const SuccessContainer = styled.div`
  @media (min-width: 320px) {
    padding: 2rem 1rem;
    display: flex;
  }
  @media (min-width: 640px) {
    padding: 2rem;
    display: flex;
  }
  @media (min-width: 1440px) {
    padding: 5rem 10rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6.375rem;
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  & > div:first-child {
    h1 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      color: ${props => props.theme.colors['brand/yellow-dark']};
    }
    span {
      color: ${props => props.theme.colors['base/subtitle']};
    }
  }

  @media (min-width: 320px) {
    margin: 0 auto;
    & > div:first-child {
      h1 {
        font-size: 1.6rem;
      }
      span {
        font-size: 1rem;
      }
    }
  }
  @media (min-width: 640px) {
    & > div:first-child {
      h1 {
        font-size: 2rem;
      }
      span {
        font-size: 1.25rem;
      }
    }
  }
  @media (min-width: 1440px) {
    width: 526px;
    margin: initial;
  }
`

export const OrderInfo = styled.div`
  position: relative;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid transparent;
  background: linear-gradient(
        ${props => props.theme.colors['base/background']},
        ${props => props.theme.colors['base/background']}
      )
      padding-box,
    linear-gradient(
        120deg,
        ${props => props.theme.colors['brand/yellow']},
        ${props => props.theme.colors['brand/purple']}
      )
      border-box;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  span {
    font-weight: 700;
  }
  p,
  span {
    color: ${props => props.theme.colors['base/text']};
  }

  @media (min-width: 320px) {
    padding: 1rem;

    p,
    span {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 640px) {
    padding: 2.5rem;

    p,
    span {
      font-size: 1rem;
    }
  }
`

const BACKGROUND_COLOR_ICON = {
  purple: 'brand/purple',
  yellow: 'brand/yellow',
  'yellow-dark': 'brand/yellow-dark'
} as const
type IconStyleProps = {
  backgroundColor: keyof typeof BACKGROUND_COLOR_ICON
}
export const IconStyle = styled.div<IconStyleProps>`
  display: flex;
  background: ${props =>
    props.theme.colors[BACKGROUND_COLOR_ICON[props.backgroundColor]]};
  border-radius: 99999px;
  padding: 0.5rem;

  svg {
    flex: none;
    font-size: 1rem;
    color: ${props => props.theme.colors['base/background']};
  }
`

export const Illustration = styled.div`
  display: flex;
  align-self: end;
  margin-bottom: -18px;

  img {
    width: 100%;
  }
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: initial;
  }
`
