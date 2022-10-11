import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scrollbar-gutter: stable;
  overflow: auto;

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
    &::-webkit-scrollbar {
      width: 1vw;
      height: 1vw;
    }
  }
  @media (min-width: 640px) {
    &::-webkit-scrollbar {
      width: 0.6vw;
      height: 0.6vw;
    }
  }
`

export const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
