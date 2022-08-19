import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 99999;
  top: 0;
  justify-content: space-between;
  padding: 2rem 10rem;
  background: ${props => props.theme['base/background']};

  & > a {
    font-size: 0;
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
      font-size: 0.5rem;
      font-weight: 400;
    }
    & > span:last-child {
      font-size: 0.75rem;
      font-weight: 700;
    }
  }
`
