import styled from 'styled-components'

export const SVGContainer = styled.svg`
  path[fill='#403937'] {
    fill: ${props =>
      props.theme.name === 'dark-theme'
        ? props.theme.colors['base/title']
        : props.theme.colors['base/subtitle']};
  }
  transition: all 0.2s linear;
  &:hover {
    filter: opacity(75%);
  }
`
