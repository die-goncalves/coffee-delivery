import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { InventoryProvider } from './hooks/useInventory'
import { CartProvider } from './hooks/useCart'
import {
  ThemePreferenceContext,
  ThemePreferenceContextProvider
} from './hooks/useThemes'
import { DeliveryProvider } from './hooks/useDelivery'
import { AuthProvider } from './hooks/useAuth'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './styles/global'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemePreferenceContextProvider>
      <ThemePreferenceContext.Consumer>
        {({ currentTheme }) => (
          <ThemeProvider theme={currentTheme}>
            <InventoryProvider>
              <CartProvider>
                <BrowserRouter>
                  <DeliveryProvider>
                    <AuthProvider>
                      <Router />
                    </AuthProvider>
                  </DeliveryProvider>
                </BrowserRouter>
              </CartProvider>
            </InventoryProvider>

            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={currentTheme.name === 'dark-theme' ? 'dark' : 'light'}
            />
            <GlobalStyle />
          </ThemeProvider>
        )}
      </ThemePreferenceContext.Consumer>
    </ThemePreferenceContextProvider>
  )
}

export default App
