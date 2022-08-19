import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scrollbar-gutter: stable;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.8vw;
    height: 0.8vw;
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
  &::-webkit-scrollbar-thumb {
  }
`

export const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
