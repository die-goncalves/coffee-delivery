import styled from 'styled-components'

export const MapLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 10rem 2rem;
  width: 100%;

  @media (min-width: 320px) {
    padding: 0rem 0rem 2rem;
    gap: 1.5rem;
  }
  @media (min-width: 480px) {
    padding: 0rem 1rem 1.5rem;
  }
  @media (min-width: 640px) {
    padding: 0rem 2rem 2rem;
    gap: 2rem;
  }
  @media (min-width: 1280px) {
    padding: 0rem 5rem 2rem;
  }
  @media (min-width: 1440px) {
    padding: 0rem 10rem 2rem;
  }
`

export const Presentation = styled.div`
  display: flex;
  justify-content: center;

  & > h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${props => props.theme.colors['base/title']};
  }

  @media (min-width: 320px) {
    & > h1 {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 640px) {
    & > h1 {
      font-size: 1.5rem;
    }
  }
`

export const GridContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;
  padding: 2rem;
  border-radius: 6px;
  background: ${props => props.theme.colors['base/card']};

  @media (min-width: 320px) {
    grid-template-columns: 1fr;
    grid-template-rows: 16.875rem 1fr;
    gap: 1.5rem;
    padding: 0rem;
    border-radius: 0;
    background: ${props => props.theme.colors['base/background']};
  }
  @media (min-width: 640px) {
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
  @media (min-width: 1280px) {
    padding: 2rem;
    background: ${props => props.theme.colors['base/card']};
    border-radius: 6px;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    border-radius: 6px;
    padding: 0.75rem;
    background: ${props =>
      props.theme.name === 'dark-theme'
        ? props.theme.colors['brand/yellow']
        : props.theme.colors['brand/purple']};
    border: 2px solid ${props => props.theme.colors['base/background']};
    color: ${props => props.theme.colors['base/background']};
    cursor: pointer;

    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    text-transform: uppercase;

    transition-duration: 0.2s;
    transition-property: all;
    transition-timing-function: ease-out;

    &:hover {
      background: ${props =>
        props.theme.name === 'dark-theme'
          ? props.theme.colors['brand/yellow-dark']
          : props.theme.colors['brand/purple-dark']};
    }
  }

  @media (min-width: 320px) {
    button {
      border-radius: 0px;
      font-size: 0.875rem;
    }
  }
  @media (min-width: 480px) {
    button {
      border-radius: 6px;
    }
  }
  @media (min-width: 640px) {
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`

export const InputPosition = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 4px;
  background: ${props => props.theme.colors['base/input']};
  border: 2px solid ${props => props.theme.colors['base/button']};

  p {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 0.875rem;
    color: ${props =>
      props.theme.name === 'dark-theme'
        ? props.theme.colors['brand/yellow']
        : props.theme.colors['brand/purple']};

    &::after {
      margin: 0 0.75rem;
      content: '|';
      color: ${props => props.theme.colors['base/button']};
    }
  }

  span {
    font-size: 0.875rem;
    text-align: center;
    flex: 1;
    color: ${props => props.theme.colors['base/label']};
    opacity: 0.5;

    &.hasAttribute {
      color: ${props => props.theme.colors['base/text']};
      opacity: 1;
    }
  }

  @media (min-width: 320px) {
    border-radius: 0px;
  }
  @media (min-width: 480px) {
    border-radius: 4px;
  }
`

export const InfoPosition = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 0.75rem;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    & > div:last-child {
      & > p {
        &::after {
          margin: 0 0.75rem 0 1.375rem;
          content: '|';
          color: ${props => props.theme.colors['base/hover']};
        }
      }
    }
  }

  & > div:last-child {
    display: flex;
    gap: 0.75rem;

    & > div:nth-child(2) {
      flex: 1;
    }
  }

  @media (min-width: 320px) {
    & > div:last-child {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 0.75rem;
    }
  }
  @media (min-width: 1024px) {
    & > div:last-child {
      display: flex;
      gap: 0.75rem;

      & > div:nth-child(2) {
        flex: 1;
      }
    }
  }
`

export const TutorialContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  border-radius: 6px;
  padding: 0.5rem;
  border: 1px solid transparent;
  background: linear-gradient(
        ${props => props.theme.colors['base/background']},
        ${props => props.theme.colors['base/background']}
      )
      padding-box,
    linear-gradient(
        120deg,
        ${props => props.theme.colors['brand/yellow']},
        ${props => props.theme.colors['brand/purple']}
      )
      border-box;

  & > svg {
    flex: none;
    font-size: 1.5rem;
    margin-top: -0.2rem;
    color: ${props => props.theme.colors['brand/purple']};
  }
  & > div {
    p {
      font-size: 0.9rem;
      color: ${props => props.theme.colors['base/subtitle']};

      & + p {
        margin-top: 0.5rem;
      }
    }
  }

  @media (min-width: 320px) {
    border-radius: 0;
    gap: 0.25rem;
    padding: 0.25rem;
    & > svg {
      font-size: 1.25rem;
      margin-top: -0.16rem;
    }
    & > div {
      p {
        font-size: 0.8rem;
        & + p {
          margin-top: 0.25rem;
        }
      }
    }
  }
  @media (min-width: 480px) {
    border-radius: 6px;
    gap: 0.5rem;
    padding: 0.5rem;

    & > svg {
      font-size: 1.5rem;
      margin-top: -0.2rem;
    }
    & > div {
      p {
        font-size: 0.8rem;
        & + p {
          margin-top: 0.5rem;
        }
      }
    }
  }
  @media (min-width: 640px) {
    & > div {
      p {
        font-size: 0.9rem;
      }
    }
  }
`
