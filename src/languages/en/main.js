import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faLanguage } from "@fortawesome/free-solid-svg-icons";
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
  const [search, setSearch] = useState('');
  const [searchCate, setSearchCate] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [loadPage, setLoadPage] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [startPage, setStartPage] = useState(true)
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') == 'true')
  const [headerFading, setHeaderFading] = useState(true)
  const [switchToSearchAnim, setSwitchToSearchAnim] = useState(false);
  const [switchToSearch, setSwitchToSearch] = useState(false);

  const switchPage = {
    first: () => {
      setHeaderFading(false)
      clickSearch.close();
      switchSec("Let's Guess", 0, darkMode ? "pink_to_green_dark 900ms forwards" : "pink_to_green 900ms forwards", darkMode ? "#313c26" : "#D4FFA8");
      setTimeout(() => {
        setHeaderFading(true)
      }, 900)
    },
    second: () => {
      setHeaderFading(false)
      switchSec('Select category', 1, darkMode ? "green_to_pink_dark 900ms forwards" : "green_to_pink 900ms forwards", darkMode ? "#3f1b3c" : "#FFE0FD")
      setTimeout(() => {
        setHeaderFading(true)
      }, 900)
    },
    third: () => {
      setHeaderFading(false)
      document.body.style.animation = darkMode ? "pink_to_blue_dark 900ms forwards" : "pink_to_blue 900ms forwards"
      setSwitching(true);
      setTimeout(() => {
        setCurrentSec(2)
        setLoadPage(true)
        setSwitching(false);
      }, 900)
    }
  }

  const clickSearch = {
    open: () => {
      setSearchCate(true);
      setSwitchToSearchAnim(true);
      setTimeout(() => {
        setSwitchToSearchAnim(false);
        setSwitchToSearch(true);
      }, 300)
    },
    close: () => {
      setSearchCate(false);
      setSwitchToSearchAnim(true);
      setTimeout(() => {
        setSwitchToSearchAnim(false);
        setSwitchToSearch(false);
      }, 300)
    }
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
      <Settings open={openSettings} onClose={() => setOpenSettings(false)} setIsDarkMode={setDarkMode}/>

      {!loadPage && (
        <>
          <div className={`header-btns${headerFading ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
            {currentSec === 1 ? (
              <>
                <ButtonWithIcon text="Go back" icon={faChevronLeft} onClick={switchPage.first}/>
                <div className="right-menu-top">
                  <SearchBar open={searchCate} onOpen={clickSearch.open} onClose={clickSearch.close} isActive={searchCate} onSearch={(e) => setSearch(e.target.value)}/>
                  <Button size='icon' onClick={setOpenSettings}>
                    <FontAwesomeIcon icon={faGear}/>
                  </Button>
                </div>
              </>
            ) : (
              <Button size='small' className='icon-front'>
                <FontAwesomeIcon icon={faLanguage}/>
                Select language
              </Button>
            )}
          </div>
          <header className={`app-head ${switching ? 'active' : 'inactive'}${startPage ? ' start' : ''}`}>
            <h1 id="heading">{title}</h1>
          </header>
        </>
      )}

      <main className={`app-main ${switching ? 'active' : 'inactive'}${startPage ? ' start' : ''}`}>
        {currentSec === 1 ? (
          <section className={`select-list ${switchToSearchAnim ? 'switching' : ''}`}>
            {switchToSearch ? (
              <div className="select-lists">
                {sortedCategories.filter(cate => cate.category.toUpperCase().includes(search.toUpperCase())).map((cate) => (
                  <CardCate key={cate.category} category={cate.category} link={cate.link} onSelect={switchPage.third}/>
                ))}
              </div>
            ) : (
              <>
                {cateTitles.map((cate) => (
                  <CardCateWithTitle key={cate} title={cate} data={cateLists[cate.toLowerCase()]} onSelect={switchPage.third}/>
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
        <Button onClick={switchPage.second}>Play now</Button>
      </footer>
    </div>
  )
}