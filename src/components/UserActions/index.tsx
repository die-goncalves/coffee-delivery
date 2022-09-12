import { SignIn } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { MenuModal } from './MenuModal'
import { LinkSendToSession, UserActionsContainer } from './styles'

export function UserActions() {
  const { authState } = useAuth()

  return (
    <UserActionsContainer>
      {(() => {
        if (authState.isAuthenticated) {
          return <MenuModal />
        } else {
          return (
            <LinkSendToSession to="/account/session" title="Ir para sessão">
              <SignIn />
            </LinkSendToSession>
          )
        }
      })()}
    </UserActionsContainer>
  )
}
