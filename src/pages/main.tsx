import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faLanguage,faSun,faMoon,faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/button";
import InvisibleOverlay from "../components/drawers/invisible-overlay";
import { startStorages, getStorages } from "../data/initial-storages";
import { CardCateWithTitle, CardCate } from "../components/card";
import { ButtonWithIcon } from "../components/button";
import SearchBar from "../components/searchbar";
import Tooltip from "../components/tooltip";
import { BackgroundChange, PageSec, Background } from "../types/main-page";
import DrawerCircle from "../components/drawers/drawer-circle";
import { TextInput } from "../components/textinput";
import ToggleSelect from "../components/toggle-select";
import useLanguage from "../hooks/use-language";
import useSearch from "../hooks/use-search";
import useTimer from "../hooks/use-timer";
import useChangeMode from "../hooks/use-change-mode";

export default function MainPage(){

  const { lang } = useParams()
  const { mainLang, checkLang } = useLanguage(lang)
  const { searchSec, openSearch, closeSearch, handleSearch } = useSearch()
  const { timerSwitch, toggleTimer } = useTimer()
  const { checkIfDarkMode, changeMode } = useChangeMode()

  const [pageSec, setPageSec] = useState<PageSec>({
    current: 0,
    isChanging: false,
    isLoaded: true,
    headerFading: false
  })

  const [tooltipAppear, setTooltipAppear] = useState(false);
  const [openSettings, setOpenSettings] = useState(false)

  const changePage = (page: number, animation: string, bgColor?: string) => {
    setPageSec(prev => ({...prev, isChanging: true, headerFading: true}))
    document.body.style.animation = animation
    setTimeout(() => {
      setPageSec(prev => ({...prev, current: page, isChanging: false, headerFading: false}))
      document.body.style.animation = "none"
      if (bgColor) document.body.style.backgroundColor = bgColor
    }, 900)
  }

  const filterSearch = mainLang.sortedCate.filter(cate => cate.category.toUpperCase().includes(searchSec.result.toUpperCase()))

  const selectCate = () => {
    changePage(2, BackgroundChange.PinkToBlue)
  }

  useEffect(() => {
    localStorage.length == 0 ? startStorages() : getStorages()

    setTimeout(() => {
      setPageSec(prevSec => ({ ...prevSec, isLoaded: false }))
    }, 900)
  }, [pageSec])

  return (
    <div className="App">
    {pageSec.isChanging && <InvisibleOverlay />}

    <div className={`header-btns${pageSec.current === 1 ? ' between' : ' end'}${pageSec.headerFading ? ' inactive' : ' active'}${pageSec.isLoaded ? ' start' : ''}`}>
      {pageSec.current == 1 ? (
        <>
          <ButtonWithIcon 
            text={mainLang.language.go_back} 
            icon={faChevronLeft} 
            onClick={() => 
              changePage(0, 
                checkIfDarkMode ? BackgroundChange.PinkToGreenDark : BackgroundChange.PinkToGreen, 
                checkIfDarkMode ? Background.GreenDark : Background.Green
              )
            }
          />
          <div className="right-menu-top">
            <SearchBar open={searchSec.isOpen} onOpen={openSearch} value={searchSec.result} onClose={closeSearch} onSearch={handleSearch} placeholder={mainLang.language.search_category}/>
            <div className="relative">
              <Button size='icon' onClick={() => setOpenSettings(true)} onMouseEnter={() => setTooltipAppear(true)} onMouseLeave={() => setTooltipAppear(false)}>
                <FontAwesomeIcon icon={faGear}/>
              </Button>
              <Tooltip text='Settings' appear={tooltipAppear}/>
            </div>
          </div>
        </>
      ) : (
        <Button size='small' className='icon-front' onClick={() => {}}>
          <FontAwesomeIcon icon={faLanguage}/>
          {mainLang.language.select_language}
        </Button>
      )}
    </div>

    <header className={`app-head ${pageSec.isChanging ? 'active' : 'inactive'}${pageSec.isLoaded ? ' start' : ''}`}>
      <h1 id="heading" className={`${searchSec.isOpen ? 'active' : ''}`}>
        {pageSec.current === 1 ? mainLang.language.select_category : mainLang.language.title}
      </h1>
    </header>

    <main className={`app-main ${pageSec.isChanging ? 'active' : 'inactive'}${pageSec.isLoaded ? ' start' : ''}`}>
      {pageSec.current === 1 ? (
        <section className={`select-list ${searchSec.isSwitching ? 'switching' : ''}`}>

          {searchSec.isSwitched ? (
            <>
              <div className="select-lists">
                {filterSearch.map((cate) => (
                  <CardCate key={cate.category} category={cate.category} href={cate.link} onSelect={() => changePage(2, BackgroundChange.PinkToGreen)}/>
                ))}
              </div>

              <div id="no-result" className={`${filterSearch.length < 1 ? 'active' : ''}`}>
                {filterSearch.length < 1 && (
                  <>
                    <FontAwesomeIcon icon={faExclamationCircle} style={{fontSize:"54px"}}/>
                    <h1 style={{marginBottom:0,fontSize:"calc(30px + 0.5vw)"}}>{mainLang.language.no_results}</h1>
                    <p style={{fontSize:"calc(12px + 0.5vw)"}}>{mainLang.language.try_another_keyword}</p>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              {mainLang.categories.map((cate: any) => (
                <CardCateWithTitle key={cate.key || cate} title={cate.title || cate} data={mainLang.cateList[cate.dataKey] || mainLang.cateList[cate.toLowerCase()]} onSelect={() => {}}/>
              ))}
            </>
          )}
        </section>
      ) : (
        <div id="how-to-play">
          <h2>{mainLang.language.how_to_play_title}</h2>

          {mainLang.language.how_to_play_desc}
        </div>
      )}
    </main>

    <footer className={`app-foot ${pageSec.isChanging ? 'active' : pageSec.current > 0 ? 'hide-footer' : 'inactive'}${pageSec.isLoaded ? ' start' : ''}`}>
      <h2>{mainLang.language.ready}</h2>
      <Button 
        onClick={() => changePage(1, 
          checkIfDarkMode ? BackgroundChange.GreenToPinkDark : BackgroundChange.GreenToPink, 
          checkIfDarkMode ? Background.PinkDark : Background.Pink)
        }
      >
        {mainLang.language.play_now}
      </Button>
    </footer>

    <DrawerCircle open={openSettings} onClose={() => setOpenSettings(false)}>
      <h1>{mainLang.language.settings}</h1>

      {mainLang.language.settings_note}

      <div className="setting-sec">
        <h2>{mainLang.language.timer}</h2>

        <ToggleSelect id='switch-timer' checked={timerSwitch} onChange={toggleTimer} valueOne={mainLang.language.sixty_seconds} valueTwo={mainLang.language.hundred_twenty_seconds}/>
        <p>{mainLang.language.timer_note}</p>
      </div>
      <div className="setting-sec">
        <h2>{mainLang.language.screen_appearance}</h2>
        <div className="screen-appearance">
          <button className="appear light-btn" onClick={() => changeMode('light')}>
            <FontAwesomeIcon icon={faSun} /> {mainLang.language.light_mode}
          </button>
          <button className="appear dark-btn" onClick={() => changeMode('dark')}>
            <FontAwesomeIcon icon={faMoon} /> {mainLang.language.dark_mode}
          </button>
        </div>
      </div>
     
      {/* <div className="setting-sec">
        <h2>ข้อความเมื่อซ่อนคำตอบ</h2>
        <TextInput className={`${warning ? 'warning' : ''}`} placeholder="คำตอบถูกซ่อนไว้" id="hidden-answer-text" value={typeHiddenText} onChange={e => setTypeHiddenText(e.target.value)} autoComplete="off"/>
        <p>ข้อความจะถูกแสดงเมื่อผู้บอกใบ้กดปุ่ม 'ซ่อนคำตอบ'<br/> ข้อความเริ่มต้นคือ 'คำตอบถูกซ่อนไว้'</p>
        <p id="warning-hidden-text" className={`${warning ? 'active' : 'inactive'}`}>{warningText}</p>
      </div> */}
    </DrawerCircle>
  </div>
  )
}