import { Buildings, IdentificationCard, SignOut, User } from 'phosphor-react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks/useAuth'
import { useDelivery } from '../../../hooks/useDelivery'
import {
  DashboardLink,
  DropdownMenuTrigger,
  DropdownMenuContent,
  SignOutButton
} from './styles'

export function DropdownMenu() {
  const { authState, signOut } = useAuth()
  const { deliveryState } = useDelivery()
  const hasDeliveryAddress = !!deliveryState.currentDelivery?.street

  function handleSignOut() {
    signOut()
    toast.success('Sessão encerrada!')
  }

  useEffect(() => {
    function handleClick() {
      const menuElement =
        document.querySelector<HTMLDivElement>('#dropdown-menu')

      if (menuElement) {
        const isVisible = menuElement.classList.contains('visible')
        if (isVisible) {
          menuElement.classList.remove('visible')
        } else {
          menuElement.classList.add('visible')
        }
      }
    }

    const triggerElement = document.querySelector<HTMLButtonElement>(
      '#dropdown-menu-trigger'
    )

    triggerElement?.addEventListener('click', handleClick)

    return () => {
      triggerElement?.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node
      const menuElement =
        document.querySelector<HTMLDivElement>('#dropdown-menu')
      const triggerElement = document.querySelector<HTMLButtonElement>(
        '#dropdown-menu-trigger'
      )

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
      const menuElement =
        document.querySelector<HTMLDivElement>('#dropdown-menu')
      menuElement?.classList.remove('visible')
    }

    linkElement?.addEventListener('click', handleClick)

    return () => {
      linkElement?.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <DropdownMenuTrigger id="dropdown-menu-trigger" type="button">
        <User />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        hasDeliveryAddress={hasDeliveryAddress}
        id="dropdown-menu"
      >
        <div>
          <IdentificationCard weight="fill" />
          <p>{authState.customer?.email}</p>
        </div>
        <div>
          <DashboardLink id="link-dashboard" to="/account/dashboard">
            <Buildings weight="fill" />
            <p>Dashboard</p>
          </DashboardLink>
          <SignOutButton onClick={handleSignOut}>
            <SignOut weight="fill" />
            <p>Sair</p>
          </SignOutButton>
        </div>
      </DropdownMenuContent>
    </>
  )
}
