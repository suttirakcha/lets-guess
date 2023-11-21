import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./button";
import TextInput from "./textinput";

export default function SearchBar({open, onOpen, onClose, onSearch}){
  return (
    <div className="searchbar-sec">
      <div className="searchbar">
        <button className={`close-search-btn ${open ? 'active' : 'inactive'}`} onClick={onClose}>
          <FontAwesomeIcon icon={faClose}/>
        </button>
        <TextInput onInput={onSearch} className={`${open ? 'active' : 'inactive'}`} placeholder="Search category" id='search-input'/>
      </div>
      <div className={`open-search-btn ${open ? 'inactive' : 'active'}`}>
        <Button size='icon' onClick={onOpen}>
          <FontAwesomeIcon icon={faSearch}/>
        </Button>
      </div>
    </div>
  )
}