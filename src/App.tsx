import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { StockProvider } from './hooks/useStock'
import { CartProvider } from './hooks/useCart'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StockProvider>
          <CartProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </CartProvider>
        </StockProvider>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
