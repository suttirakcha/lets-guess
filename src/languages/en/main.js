import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faLanguage,faSun,faMoon,faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { cateLists, sortedCategories, cateTitles } from "./categories";
import { CardCate, CardCateWithTitle } from "../../components/card";
import SearchBar from "../../components/searchbar";
import { Button, ButtonWithIcon } from "../../components/button";
import Loading from "../../components/loading";
import { getStorages, startStorages } from "../../components/lists/storage";
import InvisibleOverlay from "../../components/drawers/invisible-overlay";
import TextInput from "../../components/textinput";
import { sensitiveWords } from "../../components/lists/sensitiveWords";
import DrawerCircle from "../../components/drawers/drawerCircle";
import ToggleSelect from "../../components/toggleSelect";
import { useNavigate } from "react-router";
import Tooltip from "../../components/tooltip";
import setColorMap from "../../components/lists/colorMap";

export default function MainPage(){
  const navigate = useNavigate()
  const [title, setTitle] = useState("Let's Guess")
  const [currentSec, setCurrentSec] = useState(0)
  const [search, setSearch] = useState('');
  const [searchCate, setSearchCate] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [loadPage, setLoadPage] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [startPage, setStartPage] = useState(true)
  const [headerFading, setHeaderFading] = useState(true)
  const [switchToSearchAnim, setSwitchToSearchAnim] = useState(false);
  const [switchToSearch, setSwitchToSearch] = useState(false);
  const [openSelectLang, setOpenSelectLang] = useState(false);
  const [tooltipAppear, setTooltipAppear] = useState(false);

  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer-switch") === 'false');
  const [timerSixty, setTimerSixty] = useState(localStorage.getItem("timer-sixty") === 'true');
  const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState('')
  const [typeHiddenText, setTypeHiddenText] = useState(localStorage.getItem('text-hidden') || '');

  const toggleTimer = (e) => {
    localStorage.setItem("timer-switch", timerSwitch);
    localStorage.setItem("timer-sixty", timerSixty);
    setTimerSwitch(e.target.checked);
    if (!timerSwitch){
      setTimerSixty(true);
      setTimerSwitch(true);
      localStorage.setItem("timer", 120);
      localStorage.setItem("timer-continue", 120);
    } else {
      setTimerSixty(false);
      setTimerSwitch(false);
      localStorage.setItem("timer", 60);
      localStorage.setItem("timer-continue", 60);
    }
  }

  const darkMode = () => {
    document.body.classList.add("dark-mode");
    document.body.style.backgroundColor = "#3f1b3c";
    document.body.style.transition = "all 300ms";
    localStorage.setItem('mode', 'dark')
  }

  const lightMode = () => {
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = "#FFE0FD";
    document.body.style.transition = "all 300ms";
    localStorage.setItem('mode', 'light')
  }

  const handleCloseSettings = () => {
    if (!warning){
      setOpenSettings(false)
    }
  }

  const switchPage = {
    first: () => {
      setHeaderFading(false)
      if (searchCate){
        clickSearch.close();
      }
      switchSec("Let's Guess", 0, localStorage.mode == 'dark' ? "pink_to_green_dark 900ms forwards" : "pink_to_green 900ms forwards", localStorage.mode == 'dark' ? "#313c26" : "#D4FFA8");
      setTimeout(() => {
        setHeaderFading(true)
      }, 900)
    },
    second: () => {
      setHeaderFading(false)
      switchSec('Select category', 1,  localStorage.mode == 'dark' ? "green_to_pink_dark 900ms forwards" : "green_to_pink 900ms forwards", localStorage.mode == 'dark' ? "#3f1b3c" : "#FFE0FD")
      setTimeout(() => {
        setHeaderFading(true)
      }, 900)
    },
    third: () => {
      setHeaderFading(false)
      document.body.style.animation = localStorage.mode === 'dark' ? "pink_to_blue_dark 900ms forwards" : "pink_to_blue 900ms forwards"
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
      setSearch('')
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

    if (localStorage.length === 0){
      startStorages()
    }
  }, [])

  useEffect(() => {
    const textErrors = {
      containSensitiveWords: sensitiveWords.some(word => typeHiddenText.toUpperCase().includes(word.toUpperCase())),
      containAtSign: typeHiddenText.includes('@')
    }
    document.title = title;
    if (textErrors.containSensitiveWords){
      setWarning(true);
      setWarningText('*Please avoid using impolite or sensitive words.')
      localStorage.setItem('text-hidden', '')
    } else if (textErrors.containAtSign){
      setWarning(true);
      setWarningText('*@ is not allowed in this text field.')
      localStorage.setItem('text-hidden', '')
    } else {
      setWarning(false);
      localStorage.setItem('text-hidden', typeHiddenText)
    }
  }, [typeHiddenText])

  useEffect(() => {
    setColorMap(currentSec)
  }, [localStorage.mode])

  localStorage.getItem('dark-mode');
  if (localStorage.mode == 'dark'){
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const clickToChangeLang = (lang) => {
    setHeaderFading(false);
    setOpenSelectLang(false);
    setSwitching(true);
    setTimeout(() => navigate(lang, {replace:true}), 900)
  }

  const filterSearch = sortedCategories.filter(cate => cate.category.toUpperCase().includes(search.toUpperCase()))

  return (
    <div className="App">
      {switching && <InvisibleOverlay />}

      {!loadPage && (
        <>
          <div className={`header-btns${currentSec === 1 ? ' between' : ' end'}${headerFading ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
            {currentSec === 1 ? (
              <>
                <ButtonWithIcon text="Go back" icon={faChevronLeft} onClick={switchPage.first}/>
                <div className="right-menu-top">
                  <SearchBar open={searchCate} onOpen={clickSearch.open} value={search} onClose={clickSearch.close} isActive={searchCate} onSearch={(e) => setSearch(e.target.value)} placeholder="Search category"/>
                  <div className="relative">
                    <Button size='icon' onClick={() => setOpenSettings(true)} onMouseEnter={() => setTooltipAppear(true)} onMouseLeave={() => setTooltipAppear(false)}>
                      <FontAwesomeIcon icon={faGear}/>
                    </Button>
                    <Tooltip text='Settings' appear={tooltipAppear}/>
                  </div>
                </div>
              </>
            ) : (
              <Button size='small' className='icon-front' onClick={() => setOpenSelectLang(true)}>
                <FontAwesomeIcon icon={faLanguage}/>
                Select language
              </Button>
            )}
          </div>
          <header className={`app-head ${switching ? 'active' : 'inactive'}${startPage ? ' start' : ''}`}>
            <h1 id="heading" className={`${searchCate ? 'active' : ''}`}>{title}</h1>
          </header>
        </>
      )}

      <main className={`app-main ${switching ? 'active' : 'inactive'}${startPage ? ' start' : ''}`}>
        {currentSec === 1 ? (
          <section className={`select-list ${switchToSearchAnim ? 'switching' : ''}`}>
            {switchToSearch ? (
              <>
                <div className="select-lists">
                  {filterSearch.map((cate) => (
                    <CardCate key={cate.category} category={cate.category} link={cate.link} onSelect={switchPage.third}/>
                  ))}
                </div>

                <div id="no-result" className={`${filterSearch.length < 1 ? 'active' : ''}`}>
                  {filterSearch.length < 1 && (
                    <>
                      <FontAwesomeIcon icon={faExclamationCircle} style={{fontSize:"54px"}}/>
                      <h1 style={{marginBottom:0,fontSize:"calc(30px + 0.5vw)"}}>No search results</h1>
                      <p style={{fontSize:"calc(12px + 0.5vw)"}}>Please try another keyword.</p>
                    </>
                  )}
                </div>
              </>
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

      <DrawerCircle open={openSelectLang} onClose={() => setOpenSelectLang(false)}>
        <h1>Select language</h1>
        <div id='langList'>
          <ul className="langs">
            <li className="active">English</li>
            <li onClick={() => clickToChangeLang("/de")}>Deutsch / German</li>
            <li onClick={() => clickToChangeLang("/lo")}>ລາວ / Lao</li>
            <li onClick={() => clickToChangeLang("/th")}>ไทย / Thai</li>
            <li onClick={() => clickToChangeLang("/zh")}>中文 / Chinese</li>
          </ul>
        </div>
      </DrawerCircle>

      <DrawerCircle open={openSettings} onClose={handleCloseSettings}>
        <h1>Settings</h1>
        <p style={{marginBottom:0}}><strong>Note: </strong> Your settings will be automatically saved when you close this sidebar.</p>
        <div className="setting-sec">
          <h2>Timer</h2>

          <ToggleSelect id='switch-timer' checked={timerSwitch} onChange={toggleTimer} valueOne="60 seconds" valueTwo="120 seconds"/>
          <p>The timer is displayed at the top of the screen when playing the game.</p>
        </div>
        <div className="setting-sec">
          <h2>Screen appearance</h2>
          <div className="screen-appearance">
            <button className="appear light-btn" onClick={lightMode}>
              <FontAwesomeIcon icon={faSun} /> Light Mode
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
              <FontAwesomeIcon icon={faMoon} /> Dark Mode
            </button>
          </div>
        </div>
        <div className="setting-sec">
          <h2>Hidden answer text</h2>
          <TextInput className={`${warning ? 'warning' : ''}`} placeholder="The answer is hidden" id="hidden-answer-text" value={typeHiddenText} onChange={e => setTypeHiddenText(e.target.value)} autoComplete="off"/>
          <p>This text will be shown when the hint giver presses 'Hide answer' button, the default text is 'The answer is hidden'.</p>
          <p id="warning-hidden-text" className={`${warning ? 'active' : 'inactive'}`}>{warningText}</p>
        </div>
      </DrawerCircle>
    </div>
  )
}