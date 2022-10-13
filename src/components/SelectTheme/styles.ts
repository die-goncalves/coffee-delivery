import styled from 'styled-components'

export const ThemesContainer = styled.button`
  display: flex;
  padding: 0.5rem;

  cursor: pointer;
  border-radius: 6px;
  border: none;

  background: ${props => props.theme.colors['base/card']};

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: linear;

  svg {
    flex: none;
    font-size: 1.375rem;
    color: ${props => props.theme.colors['brand/purple']};
  }

  &:hover {
    background: ${props => props.theme.colors['base/button']};
  }
`
