import { ReactNode } from "react"

interface ModalProps {
  children: ReactNode
  open: boolean
  onClose: () => void
}

export default function Modal({ children, open, onClose } : ModalProps){
  const checkIfOpen = open ? 'active' : 'inactive';
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape'){
      e.preventDefault()
      onClose()
    }
  })
  return (
    <>
      <div className={`modal-overlay ${checkIfOpen}`} onClick={onClose}/>
      <div className="modal-center">
        <div className={`inner-modal ${checkIfOpen}`}>
          {children}
        </div>
      </div>
    </>
  )
}