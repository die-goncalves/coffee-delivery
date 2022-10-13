import styled from 'styled-components'
import { Link } from 'react-router-dom'

type DropdownMenuContentProps = {
  hasDeliveryAddress: boolean
}
export const DropdownMenuContent = styled.div<DropdownMenuContentProps>`
  display: flex;
  margin-top: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  flex-direction: column;
  position: absolute;
  right: 0;
  padding: 0.5rem;
  background: ${props => props.theme.colors['base/card']};
  width: max-content;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem 1rem;
    border-bottom: 2px solid ${props => props.theme.colors['base/hover']};

    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    font-weight: 700;

    color: ${props => props.theme.colors['base/text']};

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme.colors['brand/purple']};
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.5rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &.visible {
    display: initial;
  }
  &:not(.visible) {
    display: none;
  }

  @media (min-width: 320px), (max-width: 320px) {
    ${props =>
      props.hasDeliveryAddress
        ? 'transform: translate(51.5%, 0%);'
        : 'transform: translate(28.5%, 0%);'}
  }
  @media (min-width: 480px) {
    transform: translate(0);
  }
`

export const DashboardLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;

  background: ${props => props.theme.colors['base/card']};

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: linear;

  font-size: 1rem;
  color: ${props => props.theme.colors['base/subtitle']};

  &:hover {
    background: ${props => props.theme.colors['base/button']};
  }

  svg {
    flex: none;
    font-size: 1.375rem;
    color: ${props => props.theme.colors['brand/purple']};
  }
`

export const SignOutButton = styled.button`
  display: flex;
  gap: 0.5rem;
  border-radius: 6px;
  padding: 0.5rem;
  border: none;

  background: ${props => props.theme.colors['base/card']};

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: linear;

  font-size: 1rem;
  color: ${props => props.theme.colors['base/subtitle']};

  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors['base/button']};
  }

  svg {
    flex: none;
    font-size: 1.375rem;
    color: ${props => props.theme.colors['brand/purple']};
  }
`

export const DropdownMenuTrigger = styled.button`
  display: flex;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;

  background: ${props => props.theme.colors['base/card']};

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: linear;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors['base/button']};
  }

  svg {
    flex: none;
    font-size: 1.375rem;
    color: ${props => props.theme.colors['brand/purple']};
  }
`
