import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['base/background']};
    color: ${props => props.theme['base/text']};
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Baloo 2', cursive; */
    font-weight: 400;
    line-height: 1.3;
    font-size: 1rem;
  }

  :focus {
    outline: 0;
  }
`
