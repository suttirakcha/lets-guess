import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faGear,faLanguage,faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonWithIcon } from "./components/Button";
import InvisibleOverlay from "./components/drawers/InvisibleOverlay";
import { startStorages, getStorages } from "../data/initial-storages";
import { CardCateWithTitle, CardCate } from "./components/Card";
import SearchBar from "./components/SearchBar";
import Tooltip from "./components/Tooltip";
import { BackgroundChange, PageSec, Background } from "../types/main-page";
import useLanguage from "../hooks/useLanguage";
import useSearch from "../hooks/useSearch";
import useChangeMode from "../hooks/useChangeMode";
import Loading from "./components/Loading";
import useAnswerIsHidden from "../hooks/useAnswerIsHidden";
import Settings from "./components/drawers/Settings";
import ChangeLangDrawer from "./components/drawers/ChangeLangDrawer";

export default function MainPage(){

  const { lang } = useParams()
  const navigate = useNavigate()
  const { hasSensitiveWords } = useAnswerIsHidden(lang)
  const { mainLang, checkLang } = useLanguage(lang)
  const { searchSec, openSearch, closeSearch, handleSearch } = useSearch()
  const { checkIfDarkMode } = useChangeMode()

  const [pageSec, setPageSec] = useState<PageSec>({
    current: 0,
    isChanging: false,
    isLoaded: true,
    headerFading: false
  })

  const [tooltipAppear, setTooltipAppear] = useState(false);
  const [openSettings, setOpenSettings] = useState(false)
  const [openSelectLang, setOpenSelectLang] = useState(false)

  const closeSettings = () => {
    hasSensitiveWords ? setOpenSettings(true) : setOpenSettings(false)
  }

  const changePage = (page: number, animation: string, bgColor?: string) => {
    setPageSec(prev => ({...prev, isChanging: true, headerFading: true}))
    document.body.style.animation = animation
    setTimeout(() => {
      setPageSec(prev => ({...prev, current: page, isChanging: false, headerFading: false}))
      document.body.style.animation = "none"
      if (bgColor) document.body.style.backgroundColor = bgColor
    }, 900)
  }

  const goToTheFirstPage = () => {
    searchSec.isOpen && closeSearch()
    changePage(0, 
      checkIfDarkMode ? BackgroundChange.PinkToGreenDark : BackgroundChange.PinkToGreen, 
      checkIfDarkMode ? Background.GreenDark : Background.Green
    )
  }

  const changeLang = (link: string) => {
    setPageSec(prev => ({...prev, headerFading: true, isChanging: true}));
    setOpenSelectLang(false);
    setTimeout(() => {
      navigate(link, {replace:true})
      setPageSec(prev => ({...prev, headerFading: false, isChanging: false}));
      lang && localStorage.setItem("lang", link)
    }, 900)
  }

  const filterSearch = mainLang.sortedCate.filter(cate => cate.category.toUpperCase().includes(searchSec.result.toUpperCase()))

  useEffect(() => {
    localStorage.length == 0 ? startStorages() : getStorages()

    document.title = 
      pageSec.current === 1 ? `${mainLang.language.select_category} - ${mainLang.language.title}` : 
      pageSec.current === 2 ? `${mainLang.language.loading} - ${mainLang.language.title}` : 
      mainLang.language.title

    setTimeout(() => {
      setPageSec(prevSec => ({ ...prevSec, isLoaded: false }))
    }, 900)
  }, [pageSec, document.title])

  return (
    <>
      {checkLang ? <div className="App">
        {pageSec.isChanging && <InvisibleOverlay />}

        <div className={`header-btns${pageSec.current === 1 ? ' between' : ' end'}${pageSec.headerFading ? ' inactive' : ' active'}${pageSec.isLoaded ? ' start' : ''}`}>
          {pageSec.current == 1 ? (
            <>
              <ButtonWithIcon 
                text={mainLang.language.go_back} 
                icon={faChevronLeft} 
                onClick={goToTheFirstPage}
              />
              <div className="right-menu-top">
                <SearchBar 
                  open={searchSec.isOpen} 
                  onOpen={openSearch} 
                  value={searchSec.result} 
                  onClose={closeSearch} 
                  onSearch={handleSearch} 
                  placeholder={mainLang.language.search_category}
                />

                <div className="relative">
                  <Button size='icon' onClick={() => setOpenSettings(true)} onMouseEnter={() => setTooltipAppear(true)} onMouseLeave={() => setTooltipAppear(false)}>
                    <FontAwesomeIcon icon={faGear}/>
                  </Button>
                  <Tooltip text={mainLang.language.settings} appear={tooltipAppear}/>
                </div>
              </div>
            </>
          ) : pageSec.current == 0 ? (
            <Button size='small' className='icon-front' onClick={() => setOpenSelectLang(true)}>
              <FontAwesomeIcon icon={faLanguage}/>
              {mainLang.language.select_language}
            </Button>
          ) : null}
        </div>

        {pageSec.current !== 2 && <header className={`app-head ${pageSec.isChanging ? 'active' : 'inactive'}${pageSec.isLoaded ? ' start' : ''}`}>
          <h1 id="heading" className={`${searchSec.isOpen ? 'active' : ''}`}>
            {pageSec.current === 1 ? mainLang.language.select_category : mainLang.language.title}
          </h1>
        </header>}

        <main className={`app-main ${pageSec.isChanging ? 'active' : 'inactive'}${pageSec.isLoaded ? ' start' : ''}`}>
          {pageSec.current === 1 ? (
            <section className={`select-list ${searchSec.isSwitching ? 'switching' : ''}`}>

              {searchSec.isSwitched ? (
                <>
                  <div className="select-lists">
                    {filterSearch.map((cate) => (
                      <CardCate 
                        key={cate.category} 
                        category={cate.category} 
                        href={cate.link} 
                        onSelect={() => changePage(2, 
                          checkIfDarkMode ? BackgroundChange.PinkToBlueDark : BackgroundChange.PinkToBlue,
                          checkIfDarkMode ? Background.BlueDark : Background.Blue
                        )}
                      />
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
                    <CardCateWithTitle 
                      key={cate.key || cate} 
                      title={cate.title || cate} 
                      data={mainLang.cateList[cate.dataKey] || mainLang.cateList[cate.toLowerCase()]} 
                      onSelect={() => changePage(2, 
                        checkIfDarkMode ? BackgroundChange.PinkToBlueDark : BackgroundChange.PinkToBlue,
                        checkIfDarkMode ? Background.BlueDark : Background.Blue
                      )}
                    />
                  ))}
                </>
              )}
            </section>
          ) : pageSec.current === 0 ? (
            <div id="how-to-play">
              <h2>{mainLang.language.how_to_play_title}</h2>

              {mainLang.language.how_to_play_desc}
            </div>
          ) : (
            <div className="loading-center">
              <Loading text={mainLang.language.loading}/>
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

        <Settings open={openSettings} onClose={closeSettings} lang={lang}/>
        <ChangeLangDrawer open={openSelectLang} onClose={() => setOpenSelectLang(false)} lang={lang} onChange={changeLang}/>
      </div> : <Navigate to="/404"/>}
    </>
  )
}