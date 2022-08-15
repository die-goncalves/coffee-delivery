import styled from 'styled-components'

export const HomeContainer = styled.div``

export const IntroContainer = styled.div`
  display: flex;
  position: relative;

  & > img {
    position: absolute;
    width: 100%;
    height: auto;
    filter: blur(80px);
    z-index: 0;
  }
`

export const MainContainer = styled.div`
  z-index: 10;
  display: flex;
  align-items: start;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
  justify-content: space-between;

  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4.125rem;
  }

  & > img {
    width: 476px;
    height: auto;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme['base/title']};
  }
  p {
    font-size: 1.25rem;
    color: ${props => props.theme['base/subtitle']};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 1.25rem 2.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme['base/text']};
  background: transparent;
`

const BACKGROUND_COLOR_ICON = {
  'yellow-dark': 'brand/yellow-dark',
  yellow: 'brand/yellow',
  text: 'base/text',
  purple: 'brand/purple'
} as const

type IconStyleProps = {
  backgroundColor: keyof typeof BACKGROUND_COLOR_ICON
}

export const IconStyle = styled.div<IconStyleProps>`
  display: flex;
  padding: 0.5rem;
  border-radius: 99999px;
  background: ${props =>
    props.theme[BACKGROUND_COLOR_ICON[props.backgroundColor]]};
  margin-right: 0.75rem;

  svg {
    flex: none;
    font-size: 1rem;
    color: ${props => props.theme['base/white']};
  }
`

export const CoffeeListContainer = styled.div`
  margin-top: 2rem;
  padding: 0 10rem;

  & > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme['base/subtitle']};
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem 2rem;
  margin-top: 3.375rem;
  margin-bottom: 10rem;
`
