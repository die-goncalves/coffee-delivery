import { ReactNode } from 'react'
import { DialogContentContainer } from './styles'

type DialogContentProps = {
  children: ReactNode
}

export function DialogContent({ children }: DialogContentProps) {
  return (
    <DialogContentContainer id="dialog-content">
      {children}
    </DialogContentContainer>
  )
}
