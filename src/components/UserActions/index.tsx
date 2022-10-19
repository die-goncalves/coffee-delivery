import { SignIn } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { DropdownMenu } from './DropdownMenu'
import { LinkSendToSession, UserActionsContainer } from './styles'

export function UserActions() {
  const { authState } = useAuth()
  const { pathname } = useLocation()

  return (
    <UserActionsContainer>
      {(() => {
        if (authState.isAuthenticated) {
          return <DropdownMenu />
        } else {
          return (
            <LinkSendToSession
              to="/account/session"
              title="Ir para sessão"
              state={{ previousPath: pathname }}
            >
              <SignIn />
            </LinkSendToSession>
          )
        }
      })()}
    </UserActionsContainer>
  )
}
