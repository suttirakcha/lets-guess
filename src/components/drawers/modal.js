export default function Modal({children, open, onClose}){
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape'){
      e.preventDefault()
      onClose()
    }
  })
  
  return (
    <>
      <div class={`modal-overlay ${open ? 'active' : 'inactive'}`} onClick={onClose}/>
      <div className="modal-center">
        <div className={`inner-modal ${open ? 'active' : 'inactive'}`}>
          {children}
        </div>
      </div>
    </>
  )
}