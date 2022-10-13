import styled from 'styled-components'

export const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid transparent;
  background: linear-gradient(
        ${props => props.theme.colors['base/input']},
        ${props => props.theme.colors['base/input']}
      )
      padding-box,
    linear-gradient(
        ${props => props.theme.colors['base/button']},
        ${props => props.theme.colors['base/button']}
      )
      border-box;

  #map-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 320px) {
    border-radius: 0;
  }
  @media (min-width: 480px) {
    border-radius: 6px;
  }
`

export const PinContainer = styled.div`
  #popup-pin-location {
    display: flex;
    align-items: end;
    position: absolute;
    top: calc(100% - calc(50% + 68px));
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    padding: 0.75rem;
    background: ${props => props.theme.colors['base/white']};
    border-bottom: 2px solid ${props => props.theme.colors['brand/purple-dark']};
    border-left: 2px solid ${props => props.theme.colors['brand/purple-dark']};
    border-radius: 6px;

    transition: all 0.25s linear;

    & > span {
      color: ${props => props.theme.colors['brand/purple-dark']};
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
    }
    & > button {
      display: flex;
      padding: 0;
      border: none;
      cursor: pointer;
      background: ${props => props.theme.colors['base/white']};

      & > svg {
        width: 1.5rem;
        height: 1.5rem;
        background: ${props => props.theme.colors['base/white']};
        & > path {
          fill: ${props => props.theme.colors['base/white']};
          stroke: ${props => props.theme.colors['brand/purple-dark']};
        }
        & > polyline {
          filter: grayscale(100%) opacity(35%);
        }
      }

      &.active {
        & > svg {
          & > polyline {
            filter: none;
            stroke: green;
          }
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 0.5rem;
      height: 0.5rem;
      background: ${props => props.theme.colors['base/white']};
      border-bottom: 2px solid
        ${props => props.theme.colors['brand/purple-dark']};
    }

    &:not(.placed) {
      opacity: 0;
      visibility: hidden;
    }

    @media (min-width: 320px) {
      padding: 0.5rem;
      width: max-content;
    }
    @media (min-width: 480px) {
      padding: 0.75rem;
    }
  }

  #pin-location {
    position: absolute;
    font-size: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -12.75px;
    z-index: 5;

    & > svg {
      overflow: visible;
      & > path {
        fill: #7b7a72;
        opacity: 0.8;
      }
    }

    &.placed > svg {
      & > path {
        transform: translate(5%, 10%) scale(0.9);
        transition: all 0.5s linear;
      }
      g {
        transform: translate(0%, 0%);
        transition: transform 0.5s linear;
        & > path {
          fill: ${props =>
            props.theme.name === 'dark-theme'
              ? props.theme.colors['brand/yellow']
              : props.theme.colors['brand/purple-dark']};
          transition: all 0.5s linear;
        }
      }
    }
    &:not(.placed) > svg {
      & > path {
        filter: blur(2px);
        transform: translate(0, 0) scale(1);
        transition: all 0.5s linear;
      }
      g {
        transform: translate(0%, -20%);
        transition: transform 0.5s linear;
        & > path {
          fill: ${props =>
            props.theme.name === 'dark-theme'
              ? props.theme.colors['brand/yellow-light']
              : props.theme.colors['brand/purple']};
          transition: all 0.5s linear;
        }
      }
    }

    &:not(.inside) > svg {
      g {
        & > path {
          filter: ${props =>
            props.theme.name === 'dark-theme'
              ? 'brightness(75%)'
              : 'grayscale(100%)'};
        }
      }
    }
  }
`
