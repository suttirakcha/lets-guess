import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./button";
import TextInput from "./textinput";

export default function SearchBar({open, onOpen, onClose, onSearch}){
  return (
    <>
      {/* <div id="search-tooltip" className="tooltips">
        <p>Search category</p>
      </div> */}
      {open ? (
        <div>
          <button id="searchCloseBtn" className="btn small-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faClose}/>
          </button>
          <TextInput onInput={onSearch} placeholder="Search category"/>
        </div>
      ) : (
        <div>
          <Button size='small' onClick={onOpen}>
            <FontAwesomeIcon icon={faSearch}/>
          </Button>
        </div>
      )}
    </>
  )
}