import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const UserActionsContainer = styled.div`
  position: relative;

  transition: all 2s ease-out;
`

export const LinkSendToSession = styled(Link)`
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;

  background: ${props => props.theme.colors['base/card']};

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: ease-out;

  &:hover {
    background: ${props => props.theme.colors['base/button']};
  }

  svg {
    flex: none;
    font-size: 1.375rem;
    color: ${props => props.theme.colors['brand/purple']};
  }
`
