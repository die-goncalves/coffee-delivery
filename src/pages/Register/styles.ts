import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RegisterContainer = styled.div`
  @media (min-width: 320px), (max-width: 320px) {
    padding: 1.5rem 0;
  }
  @media (min-width: 640px) {
    padding: 2rem 1rem;
  }
  @media (min-width: 1280px) {
    padding: 2rem 5rem;
  }
  @media (min-width: 1440px) {
    padding: 2rem 10rem;
  }
`

export const RegisterCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  margin: auto;
  width: 25rem;
  background: ${props => props.theme.colors['base/card']};
  border-radius: 6px;

  & > h1 {
    margin: auto;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${props => props.theme.colors['base/title']};
  }

  @media (min-width: 320px), (max-width: 320px) {
    padding: 1rem;
    width: 100%;
    & > h1 {
      font-size: 1.125rem;
    }
  }
  @media (min-width: 480px) {
    width: 25rem;
  }
  @media (min-width: 640px) {
    & > h1 {
      font-size: 1.5rem;
    }
  }
`

export const RegisterForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;

  input[type='submit'] {
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background: ${props =>
      props.theme.name === 'dark-theme'
        ? props.theme.colors['brand/yellow']
        : props.theme.colors['brand/yellow']};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.125rem;
    font-size: 0.875rem;
    color: ${props => props.theme.colors['base/background']};

    cursor: pointer;

    transition-duration: 0.2s;
    transition-property: all;
    transition-timing-function: ease-out;

    &:hover {
      background: ${props =>
        props.theme.name === 'dark-theme'
          ? props.theme.colors['brand/yellow-dark']
          : props.theme.colors['brand/yellow-dark']};
    }
  }

  @media (min-width: 320px), (max-width: 320px) {
    input[type='submit'] {
      font-size: 0.75rem;
    }
  }
  @media (min-width: 640px) {
    input[type='submit'] {
      font-size: 0.875rem;
    }
  }
`

export const InputAndErrors = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

const Input = styled.input`
  font-size: 0.875rem;
  padding: 0.75rem;
  border-radius: 4px;
  border: none;
  background: ${props => props.theme.colors['base/input']};
  caret-color: ${props => props.theme.colors['base/label']};
  color: ${props => props.theme.colors['base/title']};

  outline: none;

  transition-duration: 0.2s;
  transition-property: box-shadow;
  transition-timing-function: ease-out;

  &::placeholder {
    font-size: 0.875rem;
    color: ${props => props.theme.colors['base/label']};
  }

  &[type='password'] {
    &::-ms-reveal {
      display: none;
    }
  }
`

type InputStyleProps = {
  hasError: boolean
}
export const InputStyle = styled(Input)<InputStyleProps>`
  ${props =>
    props.hasError
      ? `box-shadow: inset 0 0 0 2px ${props.theme.colors['base/error']};`
      : `
        box-shadow: inset 0 0 0 2px ${props.theme.colors['base/button']};
        &:focus {
          box-shadow: inset 0 0 0 2px ${props.theme.colors['brand/yellow-dark']};
        }
      `}
`

export const ErrorStyle = styled.span`
  margin-top: 0.25rem;
  color: ${props => props.theme.colors['base/error']};
  font-size: 0.8rem;

  @media (min-width: 320px), (max-width: 320px) {
    font-size: 0.75rem;
  }
  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`

export const EyeContainer = styled.button`
  display: flex;
  position: absolute;
  border: none;
  z-index: 5;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.colors['base/input']};

  cursor: pointer;

  &:focus {
    outline: none;
  }

  & > svg {
    flex: none;
    font-size: 1.25rem;
    color: ${props => props.theme.colors['brand/yellow']};
  }
`

export const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${props => props.theme.colors['base/label']};

    &::after {
      content: '';
      margin-left: 0.5rem;
      background: ${props => props.theme.colors['base/hover']};
      flex: 1;
      height: 2px;
    }
    &::before {
      content: '';
      margin-right: 0.5rem;
      flex: 1;
      background: ${props => props.theme.colors['base/hover']};
      height: 2px;
    }
  }

  @media (min-width: 320px), (max-width: 320px) {
    p {
      font-size: 0.75rem;
    }
  }
  @media (min-width: 640px) {
    p {
      font-size: 0.875rem;
    }
  }
`

export const SessionLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  padding: 0.75rem;
  border-radius: 4px;
  text-decoration: none;

  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.125rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors['base/background']};

  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-out;

  background: ${props => props.theme.colors['brand/purple']};

  &:hover {
    background: ${props => props.theme.colors['brand/purple-dark']};
  }

  @media (min-width: 320px), (max-width: 320px) {
    font-size: 0.75rem;
  }
  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`
