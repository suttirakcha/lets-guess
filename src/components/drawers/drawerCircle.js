import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DrawerCircle({open, onClose, children}){
  const [isDrawerActive, setIsDrawerActive] = useState(false)
  const activeDrawer = () => {
    if (open){
      setTimeout(() => {
        setIsDrawerActive(true)
      }, 300)
    } else {
      setTimeout(() => {
        setIsDrawerActive(false)
      })
    }
    return isDrawerActive
  }

  return (
    <>
      <div className={`drawer-mask${open ? ' active' : ' inactive'}`} onClick={onClose}></div>
      <div className={`drawer-anim${open ? ' active' : ' inactive'}`}>
        <div className={`drawer-bg-circle${open ? ' active' : ' inactive'}`} />
        <FontAwesomeIcon icon={faClose} className={`drawer-close${open ? ' active' : ' inactive'}`} onClick={onClose}/>
      </div>
      <main className={`drawer-sec${activeDrawer() ? ' active' : ''}`}>
        {children}
      </main>
    </>
  )
}