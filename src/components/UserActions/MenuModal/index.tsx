import { Buildings, IdentificationCard, SignOut, User } from 'phosphor-react'
import { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import {
  DashboardLink,
  MenuButton,
  ModalContainer,
  SignOutButton
} from './styles'

export function MenuModal() {
  const { authState, signOut } = useAuth()

  useEffect(() => {
    function handleClick() {
      const menuElement = document.querySelector<HTMLDivElement>('#menu-modal')

      if (menuElement) {
        const isVisible = menuElement.classList.contains('visible')
        if (isVisible) {
          menuElement.classList.remove('visible')
        } else {
          menuElement.classList.add('visible')
        }
      }
    }

    const triggerElement =
      document.querySelector<HTMLButtonElement>('#trigger-menu')

    triggerElement?.addEventListener('click', handleClick)

    return () => {
      triggerElement?.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node
      const menuElement = document.querySelector<HTMLDivElement>('#menu-modal')
      const triggerElement =
        document.querySelector<HTMLButtonElement>('#trigger-menu')

      const isClickInsideTrigger = triggerElement?.contains(target)
      const isClickInsideMenu = menuElement?.contains(target)

      if (isClickInsideTrigger !== undefined && !isClickInsideTrigger) {
        if (isClickInsideTrigger !== undefined && !isClickInsideMenu) {
          menuElement?.classList.remove('visible')
        }
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    const linkElement =
      document.querySelector<HTMLAnchorElement>('#link-dashboard')

    function handleClick() {
      const menuElement = document.querySelector<HTMLDivElement>('#menu-modal')
      menuElement?.classList.remove('visible')
    }

    linkElement?.addEventListener('click', handleClick)

    return () => {
      linkElement?.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <MenuButton id="trigger-menu" type="button">
        <User />
      </MenuButton>

      <ModalContainer id="menu-modal">
        <div>
          <IdentificationCard weight="fill" />
          <p>{authState.customer?.email}</p>
        </div>
        <div>
          <DashboardLink id="link-dashboard" to="/account/dashboard">
            <Buildings weight="fill" />
            <p>Dashboard</p>
          </DashboardLink>
          <SignOutButton onClick={signOut}>
            <SignOut weight="fill" />
            <p>Sair</p>
          </SignOutButton>
        </div>
      </ModalContainer>
    </>
  )
}
