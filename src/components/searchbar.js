import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./button";
import { TextInput } from "./textinput";
import Tooltip from "./tooltip";
import React, { useEffect, useRef, useState } from "react";

export default function SearchBar({open, onOpen, onClose, onSearch, placeholder, value}){
  const [hover, setHover] = useState(false)
  const searchRef = useRef(null)

  const focusSearch = () => {
    if (searchRef.current){
      searchRef.current.focus()
    }
  }

  const openSearch = e => {
    if (e.ctrlKey && e.key === 's'){
      e.preventDefault()
      onOpen()
    }
    focusSearch()
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
        <TextInput value={value} ref={searchRef} onInput={onSearch} className={`${open ? 'active' : 'inactive'}`} placeholder={placeholder} id='search-input' onKeyDown={closeSearch} autoComplete='off'/>
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