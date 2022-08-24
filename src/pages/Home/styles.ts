import styled from 'styled-components'

export const HomeContainer = styled.div``

export const IntroContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100vw;

  @media (min-width: 320px) {
    & > img {
      max-width: inherit;
      position: absolute;
      height: 20rem;
      object-fit: cover;
      filter: blur(80px);
    }
  }
  @media (min-width: 640px) {
    & > img {
      width: 100%;
      top: 1.5rem;
      height: auto;
    }
  }
  @media (min-width: 1440px) {
    & > img {
      top: -1.5rem;
    }
  }
`

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  align-items: start;
  gap: 3.5rem;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    z-index: 10;
    gap: 4.125rem;
  }

  @media (min-width: 320px) {
    padding: 2rem 1rem;
    gap: 0rem;
    & > div {
      gap: 3.3rem;
    }
    & > img {
      display: none;
    }
  }
  @media (min-width: 480px) {
    text-align: center;
  }
  @media (min-width: 640px) {
    padding: 4.75rem 2rem;
    & > img {
      display: none;
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    width: 100%;
    text-align: initial;
    justify-content: initial;
    gap: 1rem;
    & > img {
      width: 380.8px;
      height: 288px;
      display: initial;
    }
  }
  @media (min-width: 1280px) {
    padding: 5.75rem 5rem;
  }
  @media (min-width: 1440px) {
    padding: 5.75rem 10rem;
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

  @media (min-width: 320px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 640px) {
    h1 {
      font-size: 2.7rem;
    }
    p {
      font-size: 1.125rem;
    }
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;

  gap: 1.25rem 2.5rem;

  @media (min-width: 320px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  @media (min-width: 480px) {
    margin: 0 auto;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    margin: initial;
    gap: 1.25rem;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme['base/text']};
  background: transparent;

  @media (min-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
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
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  & > h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    color: ${props => props.theme['base/subtitle']};
  }

  @media (min-width: 320px) {
    padding: 0 1rem;
    & > h1 {
      margin: 0 auto;
      font-size: 1.6rem;
    }
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
    padding: 0 2rem;
    & > h1 {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 768px) {
    & > h1 {
      font-size: 2rem;
    }
  }
  @media (min-width: 1024px) {
    padding: 0rem 5rem;
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1440px) {
    padding: 0rem 10rem;
    & > h1 {
      margin: initial;
    }
  }
`

export const CoffeeList = styled.div`
  display: grid;
  margin: 3.375rem auto 10rem auto;

  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
    margin: 3.375rem auto 6.75rem auto;
  }
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 3.375rem auto 6.75rem auto;
  }
  @media (min-width: 640px) {
    grid-gap: 2rem;
  }
  @media (min-width: 768px) {
    grid-gap: 4rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5rem 2rem;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
