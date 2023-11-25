import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./button";
import TextInput from "./textinput";
import Tooltip from "./tooltip";
import { useState } from "react";

export default function SearchBar({open, onOpen, onClose, onSearch, placeholder, value}){
  const [hover, setHover] = useState(false)

  const openSearch = e => {
    if (e.ctrlKey && e.key === 's'){
      e.preventDefault()
      onOpen()
    }
  }
  const closeSearch = e => {
    if (e.key === 'Escape'){
      e.preventDefault()
      onClose()
    }
  }

  document.addEventListener('keydown', openSearch)

  return (
    <div className="relative">
      <div className="searchbar">
        <button className={`close-search-btn ${open ? 'active' : 'inactive'}`} onClick={onClose}>
          <FontAwesomeIcon icon={faClose}/>
        </button>
        <TextInput value={value} onInput={onSearch} className={`${open ? 'active' : 'inactive'}`} placeholder={placeholder} id='search-input' onKeyDown={closeSearch} autocomplete='off'/>
      </div>
      <div className="search-btn">
        <div className={`open-search-btn ${open ? 'inactive' : 'active'}`}>
          <Button size='icon' onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <FontAwesomeIcon icon={faSearch}/>
          </Button>
          <Tooltip text={`${placeholder} (Ctrl + S)`} appear={hover}/>
        </div>
      </div>
    </div>
  )
}