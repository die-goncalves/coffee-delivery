import { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

type DialogProps = {
  children: ReactNode
}

export function DialogPortal({ children }: DialogProps) {
  const rootElement = document.querySelector('#root')
  const dialogElement = document.createElement('div')
  dialogElement.setAttribute('role', 'dialog')
  dialogElement.classList.add('dialog-root')

  useEffect(() => {
    rootElement?.appendChild(dialogElement)

    return () => {
      rootElement?.removeChild(dialogElement)
    }
  }, [])

  return ReactDOM.createPortal(children, dialogElement)
}
