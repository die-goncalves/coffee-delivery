import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { StockProvider } from './hooks/useStock'
import { CartProvider } from './hooks/useCart'
import {
  ThemePreferenceContext,
  ThemePreferenceContextProvider
} from './hooks/useThemes'
import { DeliveryProvider } from './hooks/useDelivery'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemePreferenceContextProvider>
      <ThemePreferenceContext.Consumer>
        {({ currentTheme }) => (
          <ThemeProvider theme={currentTheme}>
            <StockProvider>
              <CartProvider>
                <BrowserRouter>
                  <DeliveryProvider>
                    <Router />
                  </DeliveryProvider>
                </BrowserRouter>
              </CartProvider>
            </StockProvider>

            <GlobalStyle />
          </ThemeProvider>
        )}
      </ThemePreferenceContext.Consumer>
    </ThemePreferenceContextProvider>
  )
}

export default App
