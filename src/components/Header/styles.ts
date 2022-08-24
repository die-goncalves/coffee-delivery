import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 99999;
  top: 0;
  justify-content: space-between;
  background: ${props => props.theme['base/background']};

  & > a {
    font-size: 0;
    img:last-child {
      display: none;
    }
  }

  @media (min-width: 320px) {
    padding: 1.5rem 1rem;

    & > a {
      img:first-child {
        display: none;
      }
      img:last-child {
        display: initial;
      }
    }
  }
  @media (min-width: 640px) {
    padding: 2rem;

    & > a {
      img:first-child {
        display: initial;
      }
      img:last-child {
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

export const LocationAndCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  & > a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    text-decoration: none;
    color: ${props => props.theme['brand/purple-dark']};
    background: ${props => props.theme['brand/purple-light']};

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme['brand/purple']};
    }
  }

  @media (min-width: 320px) {
    & > a {
      span {
        font-size: 0.9rem;
      }
    }
  }
  @media (min-width: 480px) {
    & > a {
      span {
        font-size: 1rem;
      }
    }
  }
`

export const CartContainer = styled.div`
  display: flex;
  position: relative;
  margin: auto 0;

  & > a {
    padding: 0.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0;
    background: ${props => props.theme['brand/yellow-light']};

    svg {
      flex: none;
      font-size: 1.375rem;
      color: ${props => props.theme['brand/yellow-dark']};
    }
  }

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
    background: ${props => props.theme['brand/yellow-dark']};
    color: ${props => props.theme['base/white']};

    & > span:first-child {
      font-weight: 400;
    }
    & > span:last-child {
      font-weight: 700;
    }
  }

  @media (min-width: 320px) {
    & > div {
      & > span:first-child {
        font-size: 0.45rem;
      }
      & > span:last-child {
        font-size: 0.675rem;
      }
    }
  }
  @media (min-width: 480px) {
    & > div {
      & > span:first-child {
        font-size: 0.5rem;
      }
      & > span:last-child {
        font-size: 0.75rem;
      }
    }
  }
`
