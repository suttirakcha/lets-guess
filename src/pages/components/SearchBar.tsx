import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import Tooltip from "./Tooltip";
import { ChangeEvent, useState, KeyboardEvent } from "react";

interface SearchBarProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value: string
}

export default function SearchBar({ open, onOpen, onClose, onSearch, placeholder, value } : SearchBarProps){
  const [hover, setHover] = useState(false)
  const openSearch = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 's'){
      e.preventDefault()
      onOpen()
    }
  }
  const closeSearch = (e: KeyboardEvent) => {
    if (e.key === 'Escape'){
      e.preventDefault()
      onClose()
    }
  }

  // window.addEventListener('keydown', openSearch);

  return (
    <div className="relative">
      <div className="searchbar">
        <button className={`close-search-btn ${open ? 'active' : 'inactive'}`} onClick={onClose}>
          <FontAwesomeIcon icon={faClose}/>
        </button>
        <TextInput value={value} onKeyDown={closeSearch} onInput={onSearch} className={`${open ? 'active' : 'inactive'}`} placeholder={placeholder} id='search-input' autoComplete='off'/>
      </div>
      <div className="search-btn">
        <div className={`open-search-btn ${open ? 'inactive' : 'active'}`}>
          <Button size='icon' onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} disabled={open ? true : false}>
            <FontAwesomeIcon icon={faSearch}/>
          </Button>
          <Tooltip text={`${placeholder} (Ctrl + S)`} appear={hover}/>
        </div>
      </div>
    </div>
  )
}