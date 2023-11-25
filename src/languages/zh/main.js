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

export default function MainPageZh(){
  const navigate = useNavigate()
  const [title, setTitle] = useState("我们猜吧")
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
  const [openSelectLang, setOpenSelectLang] = useState(false)
  const [tooltipAppear, setTooltipAppear] = useState(false);

  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer-switch") === 'false');
  const [timerSixty, setTimerSixty] = useState(localStorage.getItem("timer-sixty") === 'true');
  const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState('')
  const [typeHiddenText, setTypeHiddenText] = useState(localStorage.getItem('text-hidden-zh') || '');

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
      switchSec("我们猜吧", 0, localStorage.mode == 'dark' ? "pink_to_green_dark 900ms forwards" : "pink_to_green 900ms forwards", localStorage.mode == 'dark' ? "#313c26" : "#D4FFA8");
      setTimeout(() => {
        setHeaderFading(true)
      }, 900)
    },
    second: () => {
      setHeaderFading(false)
      switchSec('选择类别', 1,  localStorage.mode == 'dark' ? "green_to_pink_dark 900ms forwards" : "green_to_pink 900ms forwards", localStorage.mode == 'dark' ? "#3f1b3c" : "#FFE0FD")
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
      setWarningText('*请避免用不礼貌或敏感的词。')
      localStorage.setItem('text-hidden-zh', '')
    } else if (textErrors.containAtSign){
      setWarning(true);
      setWarningText('*此文本字段中不允许用 @。')
      localStorage.setItem('text-hidden-zh', '')
    } else {
      setWarning(false);
      localStorage.setItem('text-hidden-zh', typeHiddenText)
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
                <ButtonWithIcon text="回去" icon={faChevronLeft} onClick={switchPage.first}/>
                <div className="right-menu-top">
                  <SearchBar open={searchCate} onOpen={clickSearch.open} onClose={clickSearch.close} isActive={searchCate} onSearch={(e) => setSearch(e.target.value)} placeholder="搜索分类"/>
                  <div className="relative">
                    <Button size='icon' onClick={() => setOpenSettings(true)} onMouseEnter={() => setTooltipAppear(true)} onMouseLeave={() => setTooltipAppear(false)}>
                      <FontAwesomeIcon icon={faGear}/>
                    </Button>
                    <Tooltip text='设置' appear={tooltipAppear}/>
                  </div>
                </div>
              </>
            ) : (
              <Button size='small' className='icon-front' onClick={() => setOpenSelectLang(true)}>
                <FontAwesomeIcon icon={faLanguage}/>
                选择语言
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
                    <h1 style={{marginBottom:0,fontSize:"calc(30px + 0.5vw)"}}>无结果</h1>
                    <p style={{fontSize:"calc(12px + 0.5vw)"}}>请试试其他的关键词</p>
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
            <Loading text='加载中...'/>
          </div>
        ) : (
          <div id="how-to-play">
            <h2>玩法:</h2>
            <ol>
              <li>暗示人只可以见答案，也可以暗示答案，所以玩家可以猜在屏幕上的答案。</li>
              <li>暗示人可以在屏幕的右上角按 ”隐藏答案“ 隐藏答案。</li>
              <li>如果玩家猜正确，按 “<FontAwesomeIcon icon={faCheck}/>” 转到下一个的单词。</li>
              <li>如果玩家猜不正确或不知道答案是什么，按 “<FontAwesomeIcon icon={faXmark}/>” 跳过到下一步的单词。</li>
              <li>你有60或120秒（根据你的设置）暗示答案。</li>
            </ol>
          </div>
        )}
      </main>
      <footer className={`app-foot ${switching ? 'active' : currentSec > 0 ? 'hide-footer' : 'inactive'}${startPage ? ' start' : ''}`}>
        <h2>准备好了吗？</h2>
        <Button onClick={switchPage.second}>玩吧</Button>
      </footer>

      <DrawerCircle open={openSelectLang} onClose={() => setOpenSelectLang(false)}>
        <h1>选择语言</h1>
        <div id='langList'>
          <ul className="langs">
            <li className="active">中文</li>
            <li onClick={() => clickToChangeLang("/")}>English / 英文</li>
            <li onClick={() => clickToChangeLang("/th")}>ไทย / 泰语</li>
            <li onClick={() => clickToChangeLang("/lo")}>ລາວ / 老挝语</li>
            <li onClick={() => clickToChangeLang("/de")}>Deutsch / 德文</li>
          </ul>
        </div>
      </DrawerCircle>

      <DrawerCircle open={openSettings} onClose={handleCloseSettings}>
        <h1>设置</h1>
        <p style={{marginBottom:0}}><strong>注意: </strong>你关此边栏时，你的设置将自动保存。</p>
        <div className="setting-sec">
          <h2>定时器</h2>

          <ToggleSelect id='switch-timer' checked={timerSwitch} onChange={toggleTimer} valueOne="60 秒" valueTwo="120 秒"/>
          <p>定时器玩游戏时在屏幕上展示。</p>
        </div>
        <div className="setting-sec">
          <h2>屏幕出现</h2>
          <div className="screen-appearance">
            <button className="appear light-btn" onClick={lightMode}>
              <FontAwesomeIcon icon={faSun} /> 灯光模式
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
              <FontAwesomeIcon icon={faMoon} /> 黑暗模式
            </button>
          </div>
        </div>
        <div className="setting-sec">
          <h2>隐藏答案的本文</h2>
          <TextInput className={`${warning ? 'warning' : ''}`} placeholder="答案被隐藏" id="hidden-answer-text" value={typeHiddenText} onChange={e => setTypeHiddenText(e.target.value)} autoComplete="off"/>
          <p>暗示人按 “隐藏答案” 的时候，<br/>文本会展示。默认文本是 “答案被隐藏”</p>
          <p id="warning-hidden-text" className={`${warning ? 'active' : 'inactive'}`}>{warningText}</p>
        </div>
      </DrawerCircle>
    </div>
  )
}