import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6.375rem;
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  & > div:first-child {
    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 2rem;
      font-weight: 800;
      color: ${props => props.theme['brand/yellow-dark']};
    }
    span {
      font-size: 1.25rem;
      color: ${props => props.theme['base/subtitle']};
    }
  }
`

export const OrderInfo = styled.div`
  position: relative;
  padding: 2.5rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid transparent;
  background: linear-gradient(
        ${props => props.theme['base/background']},
        ${props => props.theme['base/background']}
      )
      padding-box,
    linear-gradient(
        120deg,
        ${props => props.theme['brand/yellow']},
        ${props => props.theme['brand/purple']}
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
    color: ${props => props.theme['base/text']};
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
    props.theme[BACKGROUND_COLOR_ICON[props.backgroundColor]]};
  border-radius: 99999px;
  padding: 0.5rem;

  svg {
    flex: none;
    font-size: 1rem;
    color: ${props => props.theme['base/background']};
  }
`

export const Illustration = styled.div`
  display: flex;
  align-self: end;
  margin-bottom: -18px;

  img {
    width: 100%;
  }
`
