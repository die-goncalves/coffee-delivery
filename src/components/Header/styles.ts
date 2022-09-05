import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 99999;
  top: 0;
  justify-content: space-between;
  background: ${props => props.theme.colors['base/background']};

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: linear;

  & > a {
    display: flex;
    font-size: 0;
  }

  & > div {
    display: flex;
    gap: 0.75rem;
  }

  @media (min-width: 320px) {
    padding: 1.5rem 1rem;

    & > a {
      svg:first-child {
        display: none;
      }
      svg:last-child {
        display: initial;
      }
    }
  }
  @media (min-width: 640px) {
    padding: 2rem;

    & > a {
      svg:first-child {
        display: initial;
      }
      svg:last-child {
        display: none;
      }
    }
  }
  @media (min-width: 1280px) {
    padding: 2rem 5rem;
  }
  @media (min-width: 1440px) {
    padding: 2rem 10rem;
  }
`

export const LocationAndCartContainer = styled.nav`
  display: flex;
  gap: 0.75rem;

  a {
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
  }

  a:first-child {
    align-items: center;
    color: ${props => props.theme.colors['brand/purple']};

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme.colors['brand/purple']};
    }

    span {
      max-width: 4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  a:last-child {
    position: relative;
    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props =>
        props.theme.name === 'dark-theme'
          ? props.theme.colors['brand/purple']
          : props.theme.colors['brand/yellow-dark']};
    }
  }

  @media (min-width: 320px) {
    a {
      span {
        font-size: 0.9rem;
      }
    }
  }
  @media (min-width: 480px) {
    a {
      span {
        font-size: 1rem;
      }
    }
    a:first-child {
      span {
        max-width: 8rem;
      }
    }
  }
  @media (min-width: 640px) {
    a:first-child {
      span {
        max-width: 12rem;
      }
    }
  }
  @media (min-width: 768px) {
    a:first-child {
      span {
        max-width: 16rem;
      }
    }
  }
  @media (min-width: 1024px) {
    a:first-child {
      span {
        max-width: 20rem;
      }
    }
  }
`

export const CartContainer = styled.div`
  display: flex;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 99999px;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    background: ${props =>
      props.theme.name === 'dark-theme'
        ? props.theme.colors['brand/purple']
        : props.theme.colors['brand/yellow-dark']};
    color: ${props => props.theme.colors['base/background']};

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 320px) {
    & > div {
      span {
        font-size: 0.675rem;
      }
    }
  }
  @media (min-width: 480px) {
    & > div {
      span {
        font-size: 0.7rem;
      }
    }
  }
`
