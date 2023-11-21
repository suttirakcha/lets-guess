import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faClose,faSun,faMoon,faSearch,faExclamationCircle,faChevronDown,faLanguage, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { cateLists, sortedCategories, cateTitles } from "./categories";
import { CardCate, CardCateWithTitle } from "../../components/card";
import SearchBar from "../../components/searchbar";
import { Button, ButtonWithIcon } from "../../components/button";
import Loading from "../../components/loading";
import Settings from "../../components/settings";
import { startStorages } from "../../components/lists/storage";
import InvisibleOverlay from "../../components/drawers/invisible-overlay";

export default function MainPage(){
  const [title, setTitle] = useState("Let's Guess")
  const [currentSec, setCurrentSec] = useState(0)
  const [searchCate, setSearchCate] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [loadPage, setLoadPage] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [startPage, setStartPage] = useState(true)
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') == 'true')
  const [headerFading, setHeaderFading] = useState(false)

  const goBackToTheFirstPage = () => {
    setHeaderFading(true)
    switchSec("Let's Guess", 0, darkMode ? "pink_to_green_dark 900ms forwards" : "pink_to_green 900ms forwards", darkMode ? "#313c26" : "#D4FFA8");
  }

  const switchSec = (title, index, animation, bg) => {
    document.body.style.animation = animation;
    setSwitching(true);
    setTimeout(() => {
      setTitle(title);
      setCurrentSec(index);
      setSwitching(false);
      document.body.style.animation = 'none';
      document.body.style.backgroundColor = bg
    }, 900)
  }

  const selectedCate = () => {
    document.body.style.animation = "pink_to_blue 900ms forwards"
    setHeaderFading(true)
    setSwitching(true);
    setTimeout(() => {
      setCurrentSec(2)
      setLoadPage(true)
      setSwitching(false);
    }, 900)
  }

  useEffect(() => {
    setTimeout(() => {
      setStartPage(false)
    }, 900)

    if(localStorage.length == 0){
      startStorages()
    }

    localStorage.getItem('dark-mode');
    if (darkMode){
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [])

  return (
    <div className="App">
      {switching && <InvisibleOverlay />}
      <Settings open={openSettings} onClose={() => setOpenSettings(false)}/>

      {!loadPage && (
        <>
          <div className={`header-btns${currentSec === 1 ? ' active' : ' inactive'}${headerFading ? ' inactive' : ''}`}>
            <ButtonWithIcon text="Go back" icon={faChevronLeft} onClick={goBackToTheFirstPage}/>
            <div className="right-menu-top">
              <SearchBar open={searchCate} onOpen={setSearchCate} onClose={() => setSearchCate(false)}/>
              <Button size='small' onClick={setOpenSettings}>
                <FontAwesomeIcon icon={faGear}/>
              </Button>
            </div>
          </div>
          <header className={`app-head ${switching ? 'active' : 'inactive'}${startPage ? ' start' : ''}`}>
            <h1 id="heading">{title}</h1>
          </header>
        </>
      )}

      <main className={`app-main ${switching ? 'active' : 'inactive'}${startPage ? ' start' : ''}`}>
        {currentSec === 1 ? (
          <section id="select-list">
            {searchCate ? (
              <div className="select-lists">
                {sortedCategories.map((cate) => (
                  <CardCate key={cate.category} category={cate.category} link={cate.link} onSelect={selectedCate}/>
                ))}
              </div>
            ) : (
              <>
                {cateTitles.map((cate) => (
                  <CardCateWithTitle key={cate} title={cate} data={cateLists[cate.toLowerCase()]} onSelect={selectedCate}/>
                ))}
              </>
            )}
          </section>
        ) : currentSec === 2 ? (
          <div className="loading-center">
            <Loading text='Loading...'/>
          </div>
        ) : (
          <div id="how-to-play">
            <h2>How to play:</h2>
            <ol>
              <li>The hint giver can only see the answer on the screen, and try to hint the answer so that the players can guess what the answer is.</li>
              <li>The hint giver can hide the answer by clicking 'Hide answer' button at the top right of the screen.</li>
              <li>If the players guess correctly, press <FontAwesomeIcon icon={faCheck}/> button to go to the next word.</li>
              <li>If the players guess incorrectly or don't know the answer, press <FontAwesomeIcon icon={faXmark}/> button to skip the word.</li>
              <li>You have 60 or 120 seconds, depending on your setting, to hint the answers.</li>
            </ol>
          </div>
        )}
      </main>
      <footer className={`app-foot ${switching ? 'active' : currentSec > 0 ? 'hide-footer' : 'inactive'}${startPage ? ' start' : ''}`}>
        <h2>Are you ready?</h2>
        <Button onClick={() => switchSec('Select category', 1, darkMode ? "green_to_pink_dark 900ms forwards" : "green_to_pink 900ms forwards", darkMode ? "#3f1b3c" : "#FFE0FD")}>Play now</Button>
      </footer>
    </div>
  )
}