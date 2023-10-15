import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({onOpen, onClose, onSearch}){
  return (
    <>
      <button id="searchBtn" className="btn small-btn" onClick={onOpen}>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
      <div id="search-tooltip" className="tooltips">
        <p>搜索类别</p>
      </div>
      <button id="searchCloseBtn" className="btn small-btn" onClick={onClose}>
        <FontAwesomeIcon icon={faClose}/>
      </button>
      <input type="text" id="search-input" onKeyUp={onSearch} className="text-input" placeholder="搜索类别"/>
    </>
  )
}