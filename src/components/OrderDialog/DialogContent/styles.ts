import styled from 'styled-components'

export const DialogContentContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  z-index: 30;

  @media (min-width: 320px), (max-width: 320px) {
    margin-top: 1.5rem;
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 640px) {
    margin-top: 3.5rem;
  }
`
