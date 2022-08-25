import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scrollbar-gutter: stable;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.8vw;
    height: 0.8vw;
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
`

export const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
