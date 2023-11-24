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

export default function MainPageLao(){
  const navigate = useNavigate()
  const [title, setTitle] = useState("ມາທາຍຄຳກັນເດີ")
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
  const [typeHiddenText, setTypeHiddenText] = useState(localStorage.getItem('text-hidden-lo') || '');

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
      switchSec("ມາທາຍຄຳກັນເດີ", 0, localStorage.mode == 'dark' ? "pink_to_green_dark 900ms forwards" : "pink_to_green 900ms forwards", localStorage.mode == 'dark' ? "#313c26" : "#D4FFA8");
      setTimeout(() => {
        setHeaderFading(true)
      }, 900)
    },
    second: () => {
      setHeaderFading(false)
      switchSec('ເລືອກໝວດໝູ່', 1,  localStorage.mode == 'dark' ? "green_to_pink_dark 900ms forwards" : "green_to_pink 900ms forwards", localStorage.mode == 'dark' ? "#3f1b3c" : "#FFE0FD")
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
      setWarningText('*ກະລຸນາຫຼີກລ່ຽງການນຳໃຊ້ຄຳທີ່ບໍ່ສຸພາບ ຫຼືຄຳທີ່ອ່ອນໄຫວ') 
      localStorage.setItem('text-hidden-lo', '')
    } else if (textErrors.containAtSign){
      setWarning(true);
      setWarningText('*ບໍ່ອະນຸຍາດໃຫ້ໃຊ້ @ ໃນພື້ນທີ່ຂໍ້ຄວາມນີ້')
      localStorage.setItem('text-hidden-lo', '')
    } else {
      setWarning(false);
      localStorage.setItem('text-hidden-lo', typeHiddenText)
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
    <div className="App lao">
      {switching && <InvisibleOverlay />}

      {!loadPage && (
        <>
          <div className={`header-btns${currentSec === 1 ? ' between' : ' end'}${headerFading ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
            {currentSec === 1 ? (
              <>
                <ButtonWithIcon text="ກັບ" icon={faChevronLeft} onClick={switchPage.first}/>
                <div className="right-menu-top">
                  <SearchBar open={searchCate} onOpen={clickSearch.open} onClose={clickSearch.close} isActive={searchCate} onSearch={(e) => setSearch(e.target.value)} placeholder="ຊອກຫາໝວດໝູ່"/>
                  <div className="searchbar-sec">
                    <Button size='icon' onClick={() => setOpenSettings(true)} onMouseEnter={() => setTooltipAppear(true)} onMouseLeave={() => setTooltipAppear(false)}>
                      <FontAwesomeIcon icon={faGear}/>
                    </Button>
                    <Tooltip text='ການຕັ້ງຄ່າ' appear={tooltipAppear}/>
                  </div>
                </div>
              </>
            ) : (
              <Button size='small' className='icon-front' onClick={() => setOpenSelectLang(true)}>
                <FontAwesomeIcon icon={faLanguage}/>
                ເລືອກພາສາ
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
                    <h1 style={{marginBottom:0,fontSize:"calc(30px + 0.5vw)"}}>ບໍ່ພົບຜົນໄດ້ຮັບ</h1>
                    <p style={{fontSize:"calc(12px + 0.5vw)"}}>ກະລຸນາລອງຄີເວິດອື່ນ</p>
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
            <Loading text='ກຳລັງໂຫຼດ...'/>
          </div>
        ) : (
          <div id="how-to-play">
            <h2>ວິທີຫຼິ້ນ:</h2>
            <ol>
              <li>ຄົນໃບ້ຄຳສາມາດເຫັນຄຳຕອບໄດ້ເທົ່ານັ້ນ ແລະໃຫ້ໃບ້ຄຳຕອບເພື່ອໃຫ້ຄົນຫຼິ້ນສາມາດເດົາຄຳຕອບທີ່ປະກົດໃນໜ້າຈໍໄດ້.</li>
              <li>ຄົນໃບ້ຄຳສາມາດເຊື່ອງຄຳຕອບໄດ້ໂດຍກົດປຸ່ມ "ເຊື່ອງຄຳຕອບ" ໃນມຸມຂວາຂອງຈໍ.</li>
              <li>ຖ້າຄົນຫຼິ້ນເດົາຖືກ ໃຫ້ກົດປຸ່ມ <FontAwesomeIcon icon={faCheck}/> ເພື່ອໄປຍັງຄຳຕໍ່ໄປ.</li>
              <li>ຖ້າຄົນຫຼິ້ນເດົາຜິດ ຫຼືບໍ່ຮູ້ຄຳຕອບ ໃຫ້ກົດປຸ່ມ <FontAwesomeIcon icon={faXmark}/> ເພື່ອຂ້າມຄຳຕອບ.</li>
              <li>ເຈົ້າມີເວລາ 60 ຫຼື 120 ວິນາທີ (ຂຶ້ນຢູ່ກັບການຕັ້ງຄ່າຂອງເຈົ້າ) ໃນການເດົາຄຳຕອບ.</li>
            </ol>
          </div>
        )}
      </main>
      <footer className={`app-foot ${switching ? 'active' : currentSec > 0 ? 'hide-footer' : 'inactive'}${startPage ? ' start' : ''}`}>
        <h2>ພ້ອມແລ້ວບໍ່?</h2>
        <Button onClick={switchPage.second}>ຫຼິ້ນເລີຍ</Button>
      </footer>

      <DrawerCircle open={openSelectLang} onClose={() => setOpenSelectLang(false)}>
        <h1>ເລືອກພາສາ</h1>
        <div id='langList'>
          <ul className="langs">
            <li className="active">ລາວ</li>
            <li onClick={() => clickToChangeLang("/")}>English / ອັງກິດ</li>
            <li onClick={() => clickToChangeLang("/th")}>ไทย / ໄທ</li>
            <li onClick={() => clickToChangeLang("/zh")}>中文 / ຈົນ</li>
            <li onClick={() => clickToChangeLang("/de")}>Deutsch / ເຢຍລະມັນ</li>
          </ul>
        </div>
      </DrawerCircle>

      <DrawerCircle open={openSettings} onClose={handleCloseSettings}>
        <h1>ການຕັ້ງຄ່າ</h1>
        <p style={{marginBottom:0}}><strong>ໝາຍເຫດ: </strong> ການຕັ້ງຄ່າຂອງເຈົ້າຈະຖືກບັນທຶກໂດຍອັດຕະໂນມັດເມື່ອເຈົ້າປິດແຖບດ້ານຂ້າງນີ້.</p>
        <div className="setting-sec">
          <h2>ໂມງຈັບເວລາ</h2>

          <ToggleSelect id='switch-timer' checked={timerSwitch} onChange={toggleTimer} valueOne="60 ວິນາທີ" valueTwo="120 ວິນາທີ"/>
          <p>ໂມງຈັບເວລາຈະຖືກສະແດງດ້ານເທິງຂອງຈໍເມື່ອຫຼິ້ນເກມ.</p>
        </div>
        <div className="setting-sec">
          <h2>ໂໝດໜ້າຈໍ</h2>
          <div className="screen-appearance">
            <button className="appear light-btn" onClick={lightMode}>
              <FontAwesomeIcon icon={faSun} /> ໂໝດສີສະຫວ່າງ
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
              <FontAwesomeIcon icon={faMoon} /> ໂໝດສີເຂົ້ມ
            </button>
          </div>
        </div>
        <div className="setting-sec">
          <h2>ຂໍ້ຄວາມເມື່ອເຊື່ອງຄຳຕອບ</h2>
          <TextInput className={`${warning ? 'warning' : ''}`} placeholder="ຄຳຕອບຖືກເຊື່ອງໄວ້" id="hidden-answer-text" value={typeHiddenText} onChange={e => setTypeHiddenText(e.target.value)} autoComplete="off"/>
          <p>ຂໍ້ຄວາມຈະຖືກສະແດງເມື່ອຄົນໃບ້ຄຳກົດປຸ່ມ 'ເຊື່ອງຄຳຕອບ'<br/> ຂໍ້ຄວາມເລິ່ມຕົ້ນຄື 'ຄຳຕອບຖືກເຊື່ອງໄວ້'</p>
          <p id="warning-hidden-text" className={`${warning ? 'active' : 'inactive'}`}>{warningText}</p>
        </div>
      </DrawerCircle>
    </div>
  )
}