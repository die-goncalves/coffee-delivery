import styled from 'styled-components'

export const DialogOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  background: ${props => props.theme.colors['base/black']};
  opacity: ${props => (props.theme.name === 'dark-theme' ? 0.9 : 0.7)};
`
