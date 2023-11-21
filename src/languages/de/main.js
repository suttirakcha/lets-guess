import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faClose,faSun,faMoon,faSearch,faExclamationCircle,faChevronDown,faLanguage, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { cateLists, sortedCategories } from "./categories";

export default function MainPageDe(){
  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer-switch") === 'false');
  const [timerSixty, setTimerSixty] = useState(localStorage.getItem("timer-sixty") === 'true');
  const [title, setTitle] = useState('Lass uns erraten');

  const headApp = useRef(null);
  const mainApp = useRef(null);
  const footApp = useRef(null);

  const navigate = useNavigate()

  const [clicked, setClicked] = useState(false);

  const [settings, setSettings] = useState(false);

  localStorage.getItem('dark-mode');

  if (localStorage.getItem('dark-mode') == 'true'){
    document.body.classList.add("dark-mode");
  }

  const loadGame = () => {
    let howToPlay = document.getElementById("how-to-play");
    let selectLists = document.getElementById("select-list");
    let changeLangBtn = document.getElementById("changeLangBtn");
    headApp.current.style.animation = "headAnimOut 900ms forwards";
    mainApp.current.style.animation = "mainAnimOut 900ms forwards";
    footApp.current.style.display = "block";
    footApp.current.style.animation = "footAnimOut 900ms forwards";
    howToPlay.style.display = "block";
    selectLists.style.display = "none";
    changeLangBtn.style.animation = "mainAnimOut 900ms forwards";
    setTitle('Lass uns erraten');
  }

  const goBack = () => {
    let goBackBtn = document.getElementById("goBackBtn");
    let rightBtns = document.getElementById("right-btns-sec");
    let preventBlock = document.getElementById("prevent");
    headApp.current.style.animation = "headAnim 900ms forwards";
    mainApp.current.style.animation = "mainAnim 900ms forwards";
    footApp.current.style.animation = "footAnim 900ms forwards";
    goBackBtn.style.animation = "mainAnim 900ms forwards";
    rightBtns.style.animation = "mainAnim 900ms forwards";
    preventBlock.style.visibility = "visible";
    setTimeout(() => {
      preventBlock.style.visibility = "hidden";
    },900)

    if (document.body.classList.contains("dark-mode")){
      document.body.style.animation = "changeBgGoBackDarkMode 1.8s forwards";
    } else {
      document.body.style.animation = "changeBgGoBack 1.8s forwards";
    }

    const selectBack = () => {loadGame()}
    setTimeout(selectBack, 890)
    if (clicked){
      closeSearch();
    }
  }

  const playNow = () => {
    let howToPlay = document.getElementById("how-to-play");
    let selectLists = document.getElementById("select-list");
    let goBackBtn = document.getElementById("goBackBtn");
    let rightBtns = document.getElementById("right-btns-sec");
    let changeLangBtn = document.getElementById("changeLangBtn");
    let preventBlock = document.getElementById("prevent");
    headApp.current.style.animation = "headAnim 900ms forwards";
    mainApp.current.style.animation = "mainAnim 900ms forwards";
    footApp.current.style.animation = "footAnim 900ms forwards";
    changeLangBtn.style.animation = "mainAnim 900ms forwards";
    preventBlock.style.visibility = "visible";
    setTimeout(() => {
      preventBlock.style.visibility = "hidden";
    },900)
    
    if (document.body.classList.contains("dark-mode")){
      document.body.style.animation = "changeBgSelectCateDarkMode 1.8s";
      setTimeout(() => {
        document.body.style.backgroundColor = "#3f1b3c";
      },1790)
    } else {
      document.body.style.animation = "changeBgSelectCate 1.8s";
      setTimeout(() => {
        document.body.style.backgroundColor = "#FFE0FD";
      },1790)
    }

    const selectCate = () => {
      headApp.current.style.animation = "headAnimOut 900ms forwards";
      mainApp.current.style.animation = "mainAnimOut 900ms forwards";
      footApp.current.style.display = "none";
      goBackBtn.style.animation = "mainAnimOut 900ms forwards";
      rightBtns.style.animation = "mainAnimOut 900ms forwards";
      howToPlay.style.display = "none";
      selectLists.style.display = "block";
      setTitle("Kategorie auswählen");
    }

    setTimeout(selectCate, 890)
  }

  const clickToChangeLang = (lang) => {
    closeChangeLang();
    let changeLangBtn = document.getElementById("changeLangBtn");
    headApp.current.style.animation = "headAnim 900ms forwards";
    mainApp.current.style.animation = "mainAnim 900ms forwards";
    footApp.current.style.animation = "footAnim 900ms forwards";
    changeLangBtn.style.animation = "mainAnim 900ms forwards";

    setTimeout(() => navigate(lang, {replace:true}), 800)
  }

  const clickToCate = () => {
    let goBackBtn = document.getElementById("goBackBtn");
    let selectLists = document.getElementById("select-list");
    let allCates = document.getElementById("all-cates");
    let loadingTxt = document.getElementById("loading");
    let rightBtns = document.getElementById("right-btns-sec");
    let preventBlock = document.getElementById("prevent");
    headApp.current.style.animation = "headAnim 900ms forwards";
    mainApp.current.style.animation = "mainAnim 900ms forwards";
    footApp.current.style.animation = "footAnim 900ms forwards";
    goBackBtn.style.animation = "mainAnim 900ms forwards";
    rightBtns.style.animation = "mainAnim 900ms forwards";
    preventBlock.style.visibility = "visible";
    setTimeout(() => {
      preventBlock.style.visibility = "hidden";
    },900)

    if (document.body.classList.contains("dark-mode")){
      document.body.style.animation = "changeBgCateDarkMode 1.8s forwards";
    } else {
      document.body.style.animation = "changeBgCate 1.8s forwards";
    }

    const showLoading = () => {
      selectLists.style.display = "none";
      allCates.style.display = "none";
      loadingTxt.style.display = "block";
      mainApp.current.style.animation = "mainAnimOut 900ms forwards"
    }

    const hideLoading = () => {
      mainApp.current.style.animation = "mainAnim 900ms forwards";
    }

    setTimeout(showLoading,890);
    setTimeout(hideLoading,4000);
  }

  const CardCate = (props) => {
    const clickCate = () => {
      clickToCate();
      const setLink = () => navigate(props.link,{replace:true})
      setTimeout(setLink, 5000);
    }
    return (
      <div className="card" onClick={clickCate}>
        <h2>{props.category}</h2>
      </div>
    )
  }

  const openSettings = () => {
    setSettings(true);
    if (clicked) {
      closeSearch();
    }
    let settingsDrawer = document.getElementById("settings-drawer");
    let settingsDrawerMask = document.getElementById("settings-drawer-mask");
    let settingsDrawerBg = document.getElementById("settings-drawer-anim");
    let settingsDrawerAnim = document.getElementById("circle");
    let closeBtn = document.getElementById("close-settings-btn");

    settingsDrawerMask.style.animation = "mainAnimOut 400ms forwards";
    settingsDrawerAnim.style.animation = "settingsDrawerBg 800ms forwards";
    settingsDrawerBg.style.display = "block";
    closeBtn.style.animation = "mainAnimOut 300ms forwards";
    setTimeout(() => {
      settingsDrawer.style.display = "block";
      settingsDrawer.style.animation = "settingsDrawerOpen 500ms forwards";
    }, 200)
  }

  const closeSettings = (e) => {
    let hiddenText = document.getElementById("hidden-text");
    let warning = document.getElementById("warning-hidden-text");
    const accept = () => {
      setSettings(false);
      let settingsDrawer = document.getElementById("settings-drawer");
      let settingsDrawerMask = document.getElementById("settings-drawer-mask");
      let settingsDrawerBg = document.getElementById("settings-drawer-anim");
      let settingsDrawerAnim = document.getElementById("circle");
      let closeBtn = document.getElementById("close-settings-btn");
  
      settingsDrawer.style.animation = "settingsDrawerClose 400ms forwards";
      setTimeout(() => settingsDrawer.style.display = "none",400); 
      setTimeout(() => settingsDrawerBg.style.display = "none",600);
      
      setTimeout(() => {
        settingsDrawerMask.style.animation = "mainAnim 400ms forwards";
        settingsDrawerAnim.style.animation = "settingsDrawerBgClose 400ms ease-out forwards";
        closeBtn.style.animation = "mainAnim 300ms ease-in forwards";
      }, 200)
    }
    if (
      hiddenText.value.includes("ควย") ||
      hiddenText.value.includes("เย็ด") ||
      hiddenText.value.includes("เหี้ย") ||
      hiddenText.value.includes("หี") ||
      hiddenText.value.includes("แตด") ||
      hiddenText.value.includes("สัส") ||
      hiddenText.value.includes("ดอกทอง") ||
      hiddenText.value.includes("มึง") ||
      hiddenText.value.includes("โง่") ||
      hiddenText.value.includes("ตาย") ||
      hiddenText.value.includes("แดก") ||
      hiddenText.value.includes("อีดอก") ||
      hiddenText.value.includes("นรก") ||
      hiddenText.value.includes("พ่อง") ||
      hiddenText.value.includes("แม่ม") ||
      hiddenText.value.includes("แม่ง") ||
      hiddenText.value.includes("ดาก") ||
      hiddenText.value.includes("หัวดอ") ||
      hiddenText.value.includes("ตีน") ||
      hiddenText.value.includes("ตอแหล") ||
      hiddenText.value.includes("ฆ่า") ||
      hiddenText.value.includes("เงิน") ||
      hiddenText.value.includes("ห่า") ||
      hiddenText.value.includes("เสือก") ||
      hiddenText.value.includes("หำ") ||
      hiddenText.value.toUpperCase().includes("fuck".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("shit".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("damn".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("cunt".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("cum".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("hell".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bitch".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("ass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bastard".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("slut".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("dick".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("arschloch".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("fick".toUpperCase()) ||
      hiddenText.value.includes("@")
    ){
      hiddenText.focus();
      warning.classList.add("active");
      setTimeout(() => warning.classList.remove("active"), 400);
    } else {
      accept();
    }

    if (
      hiddenText.value.toUpperCase().includes("circum".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("hello".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("pass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("mass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bass".toUpperCase()) ||
      hiddenText.value.includes("ห่าง") ||
      hiddenText.value.includes("ห่าน") ||
      hiddenText.value.includes("หีบ")
    ){
      accept();
    }
  }

  const pressToCloseSettings = e => {
    let key = e.key;
    if (key == "Escape" && settings){
      closeSettings(e);
    }
  }

  const checkHiddenText = () => {
    let hiddenText = document.getElementById("hidden-text");
    let warning = document.getElementById("warning-hidden-text");

    if (
      hiddenText.value.includes("ควย") ||
      hiddenText.value.includes("เย็ด") ||
      hiddenText.value.includes("เหี้ย") ||
      hiddenText.value.includes("หี") ||
      hiddenText.value.includes("แตด") ||
      hiddenText.value.includes("สัส") ||
      hiddenText.value.includes("ดอกทอง") ||
      hiddenText.value.includes("มึง") ||
      hiddenText.value.includes("โง่") ||
      hiddenText.value.includes("ตาย") ||
      hiddenText.value.includes("แดก") ||
      hiddenText.value.includes("อีดอก") ||
      hiddenText.value.includes("นรก") ||
      hiddenText.value.includes("พ่อง") ||
      hiddenText.value.includes("แม่ม") ||
      hiddenText.value.includes("แม่ง") ||
      hiddenText.value.includes("ดาก") ||
      hiddenText.value.includes("หัวดอ") ||
      hiddenText.value.includes("ตีน") ||
      hiddenText.value.includes("ตอแหล") ||
      hiddenText.value.includes("ฆ่า") ||
      hiddenText.value.includes("เงิน") ||
      hiddenText.value.includes("ห่า") ||
      hiddenText.value.includes("เสือก") ||
      hiddenText.value.includes("หำ") ||
      hiddenText.value.toUpperCase().includes("fuck".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("shit".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("damn".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("cunt".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("cum".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("hell".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bitch".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("ass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bastard".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("slut".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("dick".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("arschloch".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("fick".toUpperCase()) ||
      (hiddenText.value.includes("@"))
    ){
      if (hiddenText.value.includes("@")){
        warning.innerHTML = "*@ ist in diesem Textfeld nicht erlaubt.";
      } else {
        warning.innerHTML = "*Bitte vermeiden Sie unhöfliche oder einfühlsame Wörter.";
      }
      hiddenText.classList.add("warning");
      localStorage.setItem("text-hidden-lo", "");
      warning.style.opacity = "1";
      warning.style.visibility = "visible";
      warning.style.transform = "translateY(0px)";
      warning.style.transition = "all 200ms";
    } else {
      hiddenText.classList.remove("warning");
      warning.style.opacity = "0";
      warning.style.visibility = "hidden";
      warning.style.transform = "translateY(5px)";
      warning.style.transition = "all 200ms";
    }

    if (
      hiddenText.value.toUpperCase().includes("circum".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("hello".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("pass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("mass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bass".toUpperCase()) ||
      hiddenText.value.includes("ห่าง") ||
      hiddenText.value.includes("ห่าน") ||
      hiddenText.value.includes("หีบ")
    ){
      warning.style.opacity = "0";
      warning.style.visibility = "hidden";
      warning.style.transition = "all 200ms";
      warning.style.transform = "translateY(5px)";
      hiddenText.classList.remove("warning");
    }
  }
  
  useEffect(() => {
    loadGame();
    let hiddenText = document.getElementById("hidden-text");
    if (localStorage.getItem("timer") == 60){
      setTimeout(()=>localStorage.setItem("timer-continue",60),1)
    }
    if (localStorage.getItem("timer") == 120){
      setTimeout(()=>localStorage.setItem("timer-continue",120),1)
    }
    if(localStorage.length == 0 || localStorage.getItem("timer-continue") == 'null'){
      localStorage.setItem("timer",60);
      localStorage.setItem("timer-continue", 60);
      localStorage.setItem("text-hidden", "")
      localStorage.setItem("text-hidden-th", "")
      localStorage.setItem("text-hidden-lo", "")
      localStorage.setItem("text-hidden-zh", "")
      localStorage.setItem("text-hidden-de", "")
      localStorage.setItem("point", 0);
      hiddenText.value = localStorage.setItem("text-hidden-de", "");
    }
    hiddenText.value = localStorage.getItem("text-hidden-de");
  }, [])
  window.addEventListener("keydown", pressToCloseSettings);

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
    console.log(localStorage);
  }

  const typeHiddenTextDe = () => {
    let hiddenText = document.getElementById("hidden-text").value;
    localStorage.setItem("text-hidden-de", hiddenText);
  }
  const changeLang = () => {
    let langList = document.getElementById("langList");
    let langListBg = document.getElementById("langList-bg");
    let closeBtn = document.getElementById("close-changeLang-btn");
    let langListOverlay = document.getElementById("langList-overlay");
    langList.classList.add("active");
    langListBg.classList.add("active");
    langList.style.transitionDelay = "300ms";
    langListBg.style.transitionDelay = "0ms";
    closeBtn.classList.add("active");
    langListOverlay.classList.add("active");
  }
  const closeChangeLang = () => {
    let langList = document.getElementById("langList");
    let langListBg = document.getElementById("langList-bg");
    let closeBtn = document.getElementById("close-changeLang-btn");
    let langListOverlay = document.getElementById("langList-overlay");
    langList.classList.remove("active");
    langList.style.transitionDelay = "0ms";
    langListBg.classList.remove("active");
    langListBg.style.transitionDelay = "200ms";
    closeBtn.classList.remove("active");
    langListOverlay.classList.remove("active");
  }
  const darkMode = () => {
    document.body.classList.add("dark-mode");
    document.body.style.backgroundColor = "#3f1b3c";
    document.body.style.transition = "all 300ms";
    localStorage.setItem('dark-mode', 'true');
  }

  const lightMode = () => {
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = "#FFE0FD";
    document.body.style.transition = "all 300ms";
    localStorage.setItem('dark-mode', 'false');
  }

  const openSearch = () => {
    let searchBtn = document.getElementById("searchBtn");
    let closeBtn = document.getElementById("searchCloseBtn");
    let searchInput = document.getElementById("search-input");
    let searchList = document.getElementById("select-list");
    let allCates = document.getElementById("all-cates");
    let heading = document.getElementById("heading");

    heading.classList.add("active");
    searchList.style.opacity = "0";
    searchList.style.transition = "all 200ms";
    setTimeout(() => {
      searchList.style.display = "none";
      allCates.style.display = "block";
    }, 200);
    setTimeout(() => {
      allCates.style.opacity = "1";
      allCates.style.transition = "opacity 300ms";
    },300)

    searchBtn.style.animation = "mainAnim 100ms forwards";
    searchInput.style.width = "40%";
    searchInput.style.visibility = "visible";
    searchInput.style.transition = "all 400ms";
    setTimeout(() => {
      searchInput.classList.add("place");
      closeBtn.style.animation = "mainAnimOut 300ms forwards"
    },300)
    setClicked(true);
  }

  const closeSearch = () => {
    let searchBtn = document.getElementById("searchBtn");
    let closeBtn = document.getElementById("searchCloseBtn");
    let searchInput = document.getElementById("search-input");
    let searchList = document.getElementById("select-list");
    let allCates = document.getElementById("all-cates");
    let noResult = document.getElementById("no-result");
    let heading = document.getElementById("heading");

    heading.classList.remove("active");
    searchInput.value = "";
    searchInput.classList.remove("place");
    noResult.style.display = "none";

    allCates.style.opacity = "0";
    allCates.style.transition = "all 200ms";
    setTimeout(() => {
      allCates.style.display = "none";
      searchList.style.display = "block";
    }, 200);
    setTimeout(() => {
      searchList.style.opacity = "1";
      searchList.style.transition = "opacity 300ms";
    },300)

    closeBtn.style.animation = "mainAnim 100ms forwards";
    searchInput.style.width = "55.2px";
    searchInput.style.transition = "width 400ms";
    setTimeout(() => {
      searchInput.style.visibility = "hidden";
      searchBtn.style.animation = "mainAnimOut 200ms forwards"
    },300)

    let selectList = document.getElementById("all-cates");
    let cards = selectList.querySelectorAll(".card");

    for (let k = 0; k < cards.length; k++){
      cards[k].style.display = "block";
    }
  }

  const AllCates = () => {
    return (
      <div className="select-lists">
        {sortedCategories.map((s) => (
          <CardCate category={s.category} link={s.link}/>
        ))}
      </div>
    )
  }

  const showNoResult = () => {
    let selectList = document.getElementById("all-cates");
    let cards = selectList.querySelectorAll(".card");
    let cardsNone = selectList.querySelectorAll(".card[style='display: none;']");
    let noResult = document.getElementById("no-result");
    if (cardsNone.length === cards.length){
      noResult.style.display = "block";
      setTimeout(() => {
        noResult.classList.add("active");
      }, 1)
    } else {
      noResult.style.display = "none";
      noResult.classList.remove("active");
    }
  }

  const searchCate = () => {
    let searchInput = document.getElementById("search-input");
    let searchValue = searchInput.value.toUpperCase();
    let selectList = document.getElementById("all-cates");
    let cards = selectList.querySelectorAll(".card");

    for (let k = 0; k < cards.length; k++){
      let cardHead = cards[k].getElementsByTagName("h2")[0];
      let cardText = cardHead.innerText;
      console.log(cardText);
      if (cardText.toUpperCase().indexOf(searchValue) < 0){
        cards[k].style.display = "none";
      } else {
        cards[k].style.display = "block";
      }
    }
    showNoResult();
  }

  return (
    <div className="App">
      <div id="prevent" className="invisible-block"></div>
      <div id="lets-start">
      <button onClick={goBack} id="goBackBtn" className="btn">
        <FontAwesomeIcon icon={faChevronLeft} className="back-arrow"/>
        Zurückgehen
      </button>
        <header className="app-head" ref={headApp}>
          <h1 id="heading">{title}</h1>
        </header>
          <div id="right-btns-sec">
            <button id="settingsBtn" className="btn small-btn" onClick={openSettings}>
              <FontAwesomeIcon icon={faGear}/>
            </button>
            <div id="settings-tooltip" className="tooltips">
              <p>Einstellungen</p>
            </div>
            <button id="searchBtn" className="btn small-btn" onClick={openSearch}>
              <FontAwesomeIcon icon={faSearch}/>
            </button>
            <div id="search-tooltip" className="tooltips">
              <p>Kategorie suchen</p>
            </div>
            <button id="searchCloseBtn" className="btn small-btn" onClick={closeSearch}>
              <FontAwesomeIcon icon={faClose}/>
            </button>
            <input type="text" id="search-input" onKeyUp={searchCate} className="text-input" placeholder="Kategorie suchen"/>
          </div>
          <div id="changeLangBtn">
            <button onClick={changeLang} className="btn small-btn">
              <FontAwesomeIcon icon={faLanguage} />
              Sprache auswählen
            </button>
          </div>
          <div id="langList-bg"></div>
          <div id="langList-overlay" onClick={closeChangeLang}></div>
          <div id="langList">
            <h1>Sprache auswählen</h1>
            <FontAwesomeIcon icon={faClose} id="close-changeLang-btn" onClick={closeChangeLang}/>
            <ul className="langs">
              <li className="active">ລາວ</li>
              <li onClick={() => clickToChangeLang("/")}>English / Englisch</li>
              <li onClick={() => clickToChangeLang("/th")}>ไทย / Thailändisch</li>
              <li onClick={() => clickToChangeLang("/zh")}>中文 / Chinesisch</li>
            </ul>
          </div>
        <main className="app-main" ref={mainApp}>
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
          <div id="all-cates">
            <AllCates />
            <div id="no-result">
              <FontAwesomeIcon icon={faExclamationCircle} style={{fontSize:"54px"}}/>
              <h1 style={{marginBottom:0,fontSize:"calc(30px + 0.5vw)"}}>Keine Ergebnisse</h1>
              <p style={{fontSize:"calc(12px + 0.5vw)"}}>Bitte versuchen Sie mit einem anderen Stichwort.</p>
            </div>
          </div>
          <div id="select-list">
            <h2 className="list-titles">Essen</h2>
            <div className="select-lists">
              {
                cateLists.eatingDe.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>

            <h2 className="list-titles">Geografie</h2>
            <div className="select-lists">
              {
                cateLists.geographyDe.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>
          </div>
          <div id="loading">
            <div className="loading-icon">
                <div className="inner-icon"></div>
            </div>
            <h2>Wird geladen...</h2>
          </div>
        </main>
        <footer className="app-foot" ref={footApp}>
          <h2>Sind Sie bereit?</h2>
          <button onClick={playNow} className="btn">Jetzt spielen</button>
        </footer>

        <div id="settings-drawer-mask" onClick={closeSettings}></div>
        <div id="settings-drawer-anim">
          <div id="circle"></div>
          <FontAwesomeIcon icon={faClose} id="close-settings-btn" onClick={closeSettings}/>
        </div>
        <div id="settings-drawer">
          <h1>Einstellungen</h1>
          <p style={{marginBottom:0}}><strong>Notiz: </strong>Ihre Einstellungen werden gespeichert, wenn Sie diese Seitenleiste schließen.</p>
          <div className="setting-sec">
            <h2>Timer</h2>
            <label className="switch" htmlFor="switch-timer">
              <input type="checkbox" id="switch-timer" checked={timerSwitch} onChange={toggleTimer}/>
              <span className="switch-toggle"></span>
              <div className="setting-text">
                <p className="second-th">60 Sekunden</p>
                <p className="second-th">120 Sekunden</p>
              </div>
            </label>
            <div id="block" className={`${timerSwitch ? "active" : ""}`}></div>
            <p>Der Timer wird über dem Bildschirm angezeigt, wenn Sie spielen.</p>
          </div>
          <div className="setting-sec">
            <h2>Bildschirmdastellung</h2>
            <button className="appear light-btn" onClick={lightMode}>
            <FontAwesomeIcon icon={faSun} style={{marginRight:"8px"}}/> Heller Modus
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
            <FontAwesomeIcon icon={faMoon} style={{marginRight:"8px"}}/> Dunkler Modus
            </button>
          </div>
          <div className="setting-sec">
            <h2>Verborgener Antworttext</h2>
            <input type="text" id="hidden-text" className="text-input" placeholder="Die Antwort wird verborgen" onInput={checkHiddenText} onChange={typeHiddenTextDe} autoComplete="off"/>
            <p>Der Text wird angezeigt, wenn die Hint-Spieler auf „Antwort verbergen“ klicken. <br/>Der Standardtext ist „Die Antwort wird verborgen“.</p>
            <p id="warning-hidden-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}