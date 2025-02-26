import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useState } from "react";

interface DrawerCircleProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  title?: string | ReactNode
}

export default function DrawerCircle({ open, onClose, children, title } : DrawerCircleProps){
  
  const [isDrawerActive, setIsDrawerActive] = useState(false)
  const activeDrawer = () => {
    if (open){
      setTimeout(() => {
        setIsDrawerActive(true)
      }, 300)
    } else {
      setTimeout(() => {
        setIsDrawerActive(false)
      }, 1)
    }
    return isDrawerActive
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape'){
      e.preventDefault()
      onClose()
    }
  })

  return (
    <div>
      <div className={`drawer-mask${open ? ' active' : ' inactive'}`} onClick={onClose}></div>
      <div className={`drawer-anim${open ? ' active' : ' inactive'}`}>
        <div className={`drawer-bg-circle${open ? ' active' : ' inactive'}`} />
      </div>

      <main className={`drawer-sec${activeDrawer() ? ' active' : ''}`}>
        <h1 className="drawer-header">
          {title}
          <FontAwesomeIcon icon={faClose} className={`drawer-close${open ? ' active' : ' inactive'}`} onClick={onClose}/>
        </h1>
        {children}
      </main>
    </div>
  )
}