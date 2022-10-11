import { useEffect } from 'react'
import { DialogOverlayContainer } from './styles'

type DialogOverlayProps = {
  onCloseDialog: () => void
}
export function DialogOverlay({ onCloseDialog }: DialogOverlayProps) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node
      const dialogOverlayElement =
        document.querySelector<HTMLDivElement>('#dialog-overlay')
      const isClickInsideOverlay = target === dialogOverlayElement
      if (isClickInsideOverlay) {
        onCloseDialog()
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    function clickEvent(e: KeyboardEvent) {
      console.log({ e })
      if (!e.repeat) {
        console.log(`Key "${e.key}" pressed [event: keydown]`)
      } else {
        console.log(`Key "${e.key}" repeating [event: keydown]`)
      }
    }
    document.addEventListener('keydown', clickEvent)

    return () => {
      document.removeEventListener('keydown', clickEvent)
    }
  }, [])

  return <DialogOverlayContainer id="dialog-overlay" />
}
