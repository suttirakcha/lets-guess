import { useState } from "react"
import { SearchSec } from "../types/main-page"

const useSearch = () => {
  const [searchSec, setSearchSec] = useState<SearchSec>({
    isOpen: false,
    isSwitching: false,
    isSwitched: false,
    result: "",
  })

  const openSearch = () => {
    setSearchSec({ isOpen: true, isSwitching:true, isSwitched: false, result: '' })
    setTimeout(() => {
      setSearchSec(prev => ({ ...prev, isSwitching:false, isSwitched: true }))
    }, 300)
  }

  const closeSearch = () => {
    setSearchSec({ isOpen: false, isSwitching:true, isSwitched: true, result: '' })
    setTimeout(() => {
      setSearchSec(prev => ({ ...prev, isSwitching:false, isSwitched: false }))
    }, 300)
  }

  const handleSearch = (e: any) => {
    setSearchSec(prev => ({...prev, result: e.target.value}))
  }

  return { searchSec, openSearch, closeSearch, handleSearch }
}

export default useSearch