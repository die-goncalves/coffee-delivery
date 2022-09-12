import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors['base/background']};
    color: ${props => props.theme.colors['base/text']};

    transition-duration: 0.2s;
    transition-property: background-color;
    transition-timing-function: linear;
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1rem;
  }

  .Toastify__toast-container {
    z-index: 999999;
  }
  .Toastify__toast {
    background: ${props => props.theme.colors['base/card']};
    color: ${props => props.theme.colors['base/title']};
  }
  .Toastify__close-button {
    color: ${props => props.theme.colors['base/title']};
  }
`
