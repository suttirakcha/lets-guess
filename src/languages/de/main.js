import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faLanguage,faSun,faMoon,faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { cateLists, sortedCategories, cateTitles } from "./categories";
import { CardCate, CardCateWithTitle } from "../../components/card";
import SearchBar from "../../components/searchbar";
import { Button, ButtonWithIcon } from "../../components/button";
import Loading from "../../components/loading";
import { startStorages } from "../../components/lists/storage";
import InvisibleOverlay from "../../components/drawers/invisible-overlay";
import TextInput from "../../components/textinput";
import { sensitiveWords } from "../../components/lists/sensitiveWords";
import DrawerCircle from "../../components/drawers/drawerCircle";
import ToggleSelect from "../../components/toggleSelect";
import { useNavigate } from "react-router";
import Tooltip from "../../components/tooltip";
import setColorMap from "../../components/lists/colorMap";

export default function MainPageDe(){
  const navigate = useNavigate()
  const [title, setTitle] = useState("Lass uns erraten")
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
  const [typeHiddenText, setTypeHiddenText] = useState(localStorage.getItem('text-hidden-de') || '');

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
      switchSec("Lass uns erraten", 0, localStorage.mode == 'dark' ? "pink_to_green_dark 900ms forwards" : "pink_to_green 900ms forwards", localStorage.mode == 'dark' ? "#313c26" : "#D4FFA8");
      setTimeout(() => {
        setHeaderFading(true)
      }, 900)
    },
    second: () => {
      setHeaderFading(false)
      switchSec('Kategorie auswählen', 1,  localStorage.mode == 'dark' ? "green_to_pink_dark 900ms forwards" : "green_to_pink 900ms forwards", localStorage.mode == 'dark' ? "#3f1b3c" : "#FFE0FD")
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

    if(localStorage.length === 0){
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
      setWarningText('*Bitte vermeiden Sie unhöfliche oder einfühlsame Wörter.')
      localStorage.setItem('text-hidden-de', '')
    } else if (textErrors.containAtSign){
      setWarning(true);
      setWarningText('*@ ist in diesem Textfeld nicht erlaubt.')
      localStorage.setItem('text-hidden-de', '')
    } else {
      setWarning(false);
      localStorage.setItem('text-hidden-de', typeHiddenText)
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
                <ButtonWithIcon text="Zurückgehen" icon={faChevronLeft} onClick={switchPage.first}/>
                <div className="right-menu-top">
                  <SearchBar open={searchCate} onOpen={clickSearch.open} onClose={clickSearch.close} isActive={searchCate} onSearch={(e) => setSearch(e.target.value)} placeholder="Kategorie suchen"/>
                  <div className="relative">
                    <Button size='icon' onClick={() => setOpenSettings(true)} onMouseEnter={() => setTooltipAppear(true)} onMouseLeave={() => setTooltipAppear(false)}>
                      <FontAwesomeIcon icon={faGear}/>
                    </Button>
                    <Tooltip text='Einstellungen' appear={tooltipAppear}/>
                  </div>
                </div>
              </>
            ) : (
              <Button size='small' className='icon-front' onClick={() => setOpenSelectLang(true)}>
                <FontAwesomeIcon icon={faLanguage}/>
                Sprache auswählen
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
              <>
                <div className="select-lists">
                  {filterSearch.map((cate) => (
                    <CardCate key={cate.category} category={cate.category} link={cate.link} onSelect={switchPage.third}/>
                  ))}

                </div>

                {filterSearch.length < 1 && (
                  <div id="no-result">
                    <FontAwesomeIcon icon={faExclamationCircle} style={{fontSize:"54px"}}/>
                    <h1 style={{marginBottom:0,fontSize:"calc(30px + 0.5vw)"}}>Keine Ergebnisse</h1>
                    <p style={{fontSize:"calc(12px + 0.5vw)"}}>Bitte versuchen Sie mit einem anderen Stichwort.</p>
                  </div>
                )}
              </>
            ) : (
              <>
                {cateTitles.map((cate) => (
                  <CardCateWithTitle key={cate.key} title={cate.title} data={cateLists[cate.dataKey]} onSelect={switchPage.third}/>
                ))}
              </>
            )}
          </section>
        ) : currentSec === 2 ? (
          <div className="loading-center">
            <Loading text='Wird geladen...'/>
          </div>
        ) : (
          <div id="how-to-play">
            <h2>Spielanleitung:</h2>
            <ol>
              <li>Die Hint-Spieler(innen) können nur die Antwort sehen und anzudeuten, damit die Spieler(innen) die Antwort auf dem Bildschirm erraten können.</li>
              <li>Die Hint-Spieler(innen) können die Antwort ausblenden, indem sie „Die Antwort ausblenden“ Schaltfläche klicken.</li>
              <li>Wenn Spieler(innen) richtig erraten, klicken Sie <FontAwesomeIcon icon={faCheck}/> um zu nächster Antwort zu fortsetzen.</li>
              <li>Wenn Spieler(innen) unrichtig erraten, oder die Antwort nicht kennen, klicken Sie <FontAwesomeIcon icon={faXmark}/>, um zu nächster Antwort zu springen.</li>
              <li>Sie haben 60 oder 120 Sekunden, abhängig von Ihrer Erstellung, um Frage zu erraten.</li>
            </ol>
          </div>
        )}
      </main>
      <footer className={`app-foot ${switching ? 'active' : currentSec > 0 ? 'hide-footer' : 'inactive'}${startPage ? ' start' : ''}`}>
        <h2>Sind Sie bereit?</h2>
        <Button onClick={switchPage.second}>Jetzt spielen</Button>
      </footer>

      <DrawerCircle open={openSelectLang} onClose={() => setOpenSelectLang(false)}>
        <h1>Sprache auswählen</h1>
        <div id='langList'>
          <ul className="langs">
            <li className="active">Deutsch</li>
            <li onClick={() => clickToChangeLang("/zh")}>中文 / Chinesisch</li>
            <li onClick={() => clickToChangeLang("/")}>English / Englisch</li>
            <li onClick={() => clickToChangeLang("/lo")}>ລາວ / Laotisch</li>
            <li onClick={() => clickToChangeLang("/th")}>ไทย / Thailändisch</li>
          </ul>
        </div>
      </DrawerCircle>

      <DrawerCircle open={openSettings} onClose={handleCloseSettings}>
        <h1>Einstellungen</h1>
        <p style={{marginBottom:0}}><strong>Notiz: </strong>Ihre Einstellungen werden automatisch gespeichert, wenn Sie diese Seitenleiste schließen.</p>
        <div className="setting-sec">
          <h2>Schaltuhr</h2>

          <ToggleSelect id='switch-timer' checked={timerSwitch} onChange={toggleTimer} valueOne="60 Sekunden" valueTwo="120 Sekunden"/>
          <p>Die Schaltuhr wird über dem Bildschirm angezeigt, wenn Sie spielen.</p>
        </div>
        <div className="setting-sec">
          <h2>Bildschirmdarstellung</h2>
          <div className="screen-appearance">
            <button className="appear light-btn" onClick={lightMode}>
              <FontAwesomeIcon icon={faSun} /> Heller Modus
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
              <FontAwesomeIcon icon={faMoon} /> Dunkler Modus
            </button>
          </div>
        </div>
        <div className="setting-sec">
          <h2>Verborgener Antworttext</h2>
          <TextInput className={`${warning ? 'warning' : ''}`} placeholder="Die Antwort wird verborgen" id="hidden-answer-text" value={typeHiddenText} onChange={e => setTypeHiddenText(e.target.value)} autoComplete="off"/>
          <p>Der Text wird angezeigt, wenn die Hint-Spieler auf „Antwort verbergen“ klicken. <br/>Der Standardtext ist „Die Antwort wird verborgen“.</p>
          <p id="warning-hidden-text" className={`${warning ? 'active' : 'inactive'}`}>{warningText}</p>
        </div>
      </DrawerCircle>
    </div>
  )
}