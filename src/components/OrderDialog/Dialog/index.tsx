import { ReactNode, useEffect } from 'react'
import { DialogContainer } from './styles'

type DialogProps = {
  showDialog: boolean
  handleHideDialog: () => void
  children: ReactNode
}
export function Dialog({
  showDialog,
  handleHideDialog,
  children
}: DialogProps) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleHideDialog()
    }

    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [])

  return <DialogContainer open={showDialog}>{children}</DialogContainer>
}
