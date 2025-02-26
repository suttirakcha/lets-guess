import { ReactNode } from "react"

interface ModalProps {
  children: ReactNode
  open: boolean
  onClose: () => void
}

export default function Modal({ children, open, onClose } : ModalProps){
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape'){
      e.preventDefault()
      onClose()
    }
  })
  return (
    <>
      <div className={`modal-overlay ${open ? 'active' : 'inactive'}`} onClick={onClose}/>
      <div className="modal-center">
        <div className={`inner-modal ${open ? 'active' : 'inactive'}`}>
          {children}
        </div>
      </div>
    </>
  )
}