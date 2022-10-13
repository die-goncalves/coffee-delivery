import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, MainContainer } from './styles'

export function DefaultLayout() {
  return (
    <MainContainer>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </MainContainer>
  )
}
