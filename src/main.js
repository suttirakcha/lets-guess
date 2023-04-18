import React, { useEffect, useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faClose, faSun, faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function MainPage(){
  if (localStorage.getItem("lang") === "th"){
    window.location.replace("/th")
  }

  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer-switch") === 'false');
  const [timerSixty, setTimerSixty] = useState(localStorage.getItem("timer-sixty") === 'true');

  localStorage.getItem('dark-mode');

  if (localStorage.getItem('dark-mode') == 'true'){
    document.body.classList.add("dark-mode");
  }

  const [settings, setSettings] = useState(false);

  const loadGame = () => {
    let headApp = document.querySelector(".app-head");
    let mainApp = document.querySelector(".app-main");
    let footApp = document.querySelector(".app-foot");
    let heading = document.getElementById("heading");
    let howToPlay = document.getElementById("how-to-play");
    let selectLists = document.getElementById("select-list");
    let changeLangBtn = document.getElementById("changeLangBtn");
    headApp.style.animation = "headAnimOut 900ms forwards";
    mainApp.style.animation = "mainAnimOut 900ms forwards";
    footApp.style.display = "block";
    footApp.style.animation = "footAnimOut 900ms forwards";
    heading.innerHTML = "Let's Guess";
    howToPlay.style.display = "block";
    selectLists.style.display = "none";
    changeLangBtn.style.animation = "mainAnimOut 900ms forwards";
  }

  const goBack = () => {
    let headApp = document.querySelector(".app-head");
    let mainApp = document.querySelector(".app-main");
    let footApp = document.querySelector(".app-foot");
    let goBackBtn = document.getElementById("goBackBtn");
    let settingsBtn = document.getElementById("settingsBtn");
    let preventBlock = document.getElementById("prevent");
    headApp.style.animation = "headAnim 900ms forwards";
    mainApp.style.animation = "mainAnim 900ms forwards";
    footApp.style.animation = "footAnim 900ms forwards";
    goBackBtn.style.animation = "mainAnim 900ms forwards";
    settingsBtn.style.animation = "mainAnim 900ms forwards";
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
  }

  const playNow = () => {
    let headApp = document.querySelector(".app-head");
    let mainApp = document.querySelector(".app-main");
    let footApp = document.querySelector(".app-foot");
    let heading = document.getElementById("heading");
    let howToPlay = document.getElementById("how-to-play");
    let selectLists = document.getElementById("select-list");
    let goBackBtn = document.getElementById("goBackBtn");
    let settingsBtn = document.getElementById("settingsBtn");
    let changeLangBtn = document.getElementById("changeLangBtn");
    let preventBlock = document.getElementById("prevent");
    headApp.style.animation = "headAnim 900ms forwards";
    mainApp.style.animation = "mainAnim 900ms forwards";
    footApp.style.animation = "footAnim 900ms forwards";
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
      headApp.style.animation = "headAnimOut 900ms forwards";
      mainApp.style.animation = "mainAnimOut 900ms forwards";
      footApp.style.display = "none";
      goBackBtn.style.animation = "mainAnimOut 900ms forwards";
      settingsBtn.style.animation = "mainAnimOut 900ms forwards";
      heading.innerHTML = "Select category";
      howToPlay.style.display = "none";
      selectLists.style.display = "block";
    }

    setTimeout(selectCate, 890)
  }

  const clickToCate = () => {
    let headApp = document.querySelector(".app-head");
    let mainApp = document.querySelector(".app-main");
    let footApp = document.querySelector(".app-foot");
    let goBackBtn = document.getElementById("goBackBtn");
    let selectLists = document.getElementById("select-list");
    let loadingTxt = document.getElementById("loading");
    let settingsBtn = document.getElementById("settingsBtn");
    let preventBlock = document.getElementById("prevent");
    headApp.style.animation = "headAnim 900ms forwards";
    mainApp.style.animation = "mainAnim 900ms forwards";
    footApp.style.animation = "footAnim 900ms forwards";
    goBackBtn.style.animation = "mainAnim 900ms forwards";
    settingsBtn.style.animation = "mainAnim 900ms forwards";
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
        loadingTxt.style.display = "block";
        mainApp.style.animation = "mainAnimOut 900ms forwards"
    }

    const hideLoading = () => {
        mainApp.style.animation = "mainAnim 900ms forwards";
    }
    setTimeout(showLoading,890);
    setTimeout(hideLoading,4000);
  }

  const CardCate = (props) => {
    const clickCate = () => {
      clickToCate();
      const setLink = () => {window.location.replace(props.link)}
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
      hiddenText.value.includes("@")
    ){
      hiddenText.focus();
      warning.classList.add("active");
      setTimeout(() => warning.classList.remove("active"), 400);
    } else {
      accept();
    }

    if(
      hiddenText.value.toUpperCase().includes("circum".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("hello".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("pass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("mass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bass".toUpperCase()) ||
      hiddenText.value.includes("ห่าน") ||
      hiddenText.value.includes("ห่าง") ||
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
      hiddenText.value.includes("@")
    ){
      if (hiddenText.value.includes("@")){
        warning.innerHTML = "*@ is not allowed in this text field.";
      } else {
        warning.innerHTML = "*Please avoid using impolite or sensitive words.";
      }
      hiddenText.classList.add("warning");
      localStorage.removeItem("text-hidden");
      warning.style.opacity = "1";
      warning.style.visibility = "visible";
      warning.style.transform = "translateY(0px)";
      warning.style.transition = "all 200ms";
    } else {
      warning.style.opacity = "0";
      warning.style.visibility = "hidden";
      warning.style.transform = "translateY(5px)";
      warning.style.transition = "all 200ms";
      hiddenText.classList.remove("warning");
    }

    if (
      hiddenText.value.toUpperCase().includes("circum".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("hello".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("pass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("mass".toUpperCase()) ||
      hiddenText.value.toUpperCase().includes("bass".toUpperCase()) ||
      hiddenText.value.includes("ห่าน") ||
      hiddenText.value.includes("ห่าง") ||
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
    if(localStorage.length == 0 || localStorage.getItem("timer-continue") == 'null'){
      localStorage.setItem("timer",60);
      localStorage.setItem("timer-continue",60);
      localStorage.setItem("text-hidden", "")
      localStorage.setItem("text-hidden-th", "")
      localStorage.setItem("point", 0);
      localStorage.setItem("dark-mode", 'false')
      hiddenText.value = localStorage.setItem("text-hidden", "");
    }
    hiddenText.value = localStorage.getItem("text-hidden");
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

  const typeHiddenText = () => {
    let hiddenText = document.getElementById("hidden-text").value;
    localStorage.setItem("text-hidden", hiddenText);
  }
  
  const changeLang = () => {
    localStorage.setItem("lang", "th");
    window.location.replace("/th");
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
  return (
    <div className="App">
      <div id="prevent" className="invisible-block"></div>
      <div id="lets-start">
      <button onClick={goBack} id="goBackBtn" className="btn">
        <FontAwesomeIcon icon={faChevronLeft} className="back-arrow"/>
        Go back
      </button>
      <button id="settingsBtn" className="btn small-btn" onClick={openSettings}>
        <FontAwesomeIcon icon={faGear}/>
      </button>
        <header className="app-head">
          <h1 id="heading">Let's Guess</h1>
        </header>
        <button onClick={changeLang} id="changeLangBtn" className="btn">ไทย</button>
        <main className="app-main">
          <div id="how-to-play">
            <h2>How to play:</h2>
            <ol>
              <li>The hinter can only see the answer on the screen, and try to hint the answer so that the players can guess what the answer will be.</li>
              <li>The hinter should hide the answer by clicking "Hide answer" button at the top right of the screen.</li>
              <li>If the players guess correctly, press "<FontAwesomeIcon icon={faCheck}/>" button to go to the next word.</li>
              <li>If the players guess incorrectly or don't know the answer, press "<FontAwesomeIcon icon={faXmark}/>" button to skip the word.</li>
              <li>You have 60 or 120 seconds (depending on your setting) to hint the answers.</li>
            </ol>
          </div>
          <div id="select-list">
            <h2 className="list-titles">Eating</h2>
            <div className="select-lists">
              <CardCate category="Desserts" link="/desserts"/>
              <CardCate category="Drinks" link="/drinks"/>
              <CardCate category="Foods" link="/foods"/>
              <CardCate category="Sauces" link="/sauces"/>
            </div>

            <h2 className="list-titles">Geography</h2>
            <div className="select-lists">
              <CardCate category="Capital Cities" link="/capital-cities"/>
              <CardCate category="Countries in the World" link="/countries-in-the-world"/>
              <CardCate category="Landmarks" link="/landmarks"/>
            </div>

            <h2 className="list-titles">Films</h2>
            <div className="select-lists">
              <CardCate category="Fast and Furious Characters" link="/fast-and-furious-characters"/>
              <CardCate category="Film Genres" link="/film-genres"/>
              <CardCate category="Harry Potter Characters" link="/harry-potter-characters"/>
            </div>

            <h2 className="list-titles">Music</h2>
            <div className="select-lists">
              <CardCate category="Blackpink" link="/blackpink"/>
            </div>

            <h2 className="list-titles">Games</h2>
            <div className="select-lists">
              <CardCate category="Characters in Mario Games" link="/characters-in-mario-games"/>
              <CardCate category="Mobile Games" link="/mobile-games"/>
            </div>

            <h2 className="list-titles">Other</h2>
            <div className="select-lists">
              <CardCate category="Animals" link="/animals"/>
              <CardCate category="Marketing Words" link="/marketing-words"/>
            </div>
          </div>
          <div id="loading">
            <div className="loading-icon">
              <div className="inner-icon"></div>
            </div>
            <h2>Loading...</h2>
          </div>
        </main>
        <footer className="app-foot">
          <h2>Are you ready?</h2>
          <button onClick={playNow} className="btn">Play now</button>
        </footer>

        <div id="settings-drawer-mask" onClick={closeSettings}></div>
        <div id="settings-drawer-anim">
          <div id="circle"></div>
          <FontAwesomeIcon icon={faClose} id="close-settings-btn" onClick={closeSettings}/>
        </div>
        <div id="settings-drawer">
          <h1>Settings</h1>
          <p style={{marginBottom:0}}><strong>Note: </strong> Your settings will be automatically saved when you close this sidebar.</p>
          <div className="setting-sec">
            <h2>Timer</h2>
            <label className="switch" htmlFor="switch-timer">
              <input type="checkbox" id="switch-timer" checked={timerSwitch} onChange={toggleTimer}/>
              <span className="switch-toggle"></span>
              <div className="setting-text">
                <p className="second">60 seconds</p>
                <p className="second">120 seconds</p>
              </div>
            </label>
            <div id="block" className={`${timerSwitch ? "active" : ""}`}></div>
            <p>The timer will be displayed at the top of the screen when playing the game.</p>
          </div>
          <div className="setting-sec">
            <h2>Screen Appearance</h2>
            <button className="appear light-btn" onClick={lightMode}>
            <FontAwesomeIcon icon={faSun} style={{marginRight:"8px"}}/> Light Mode
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
            <FontAwesomeIcon icon={faMoon} style={{marginRight:"8px"}}/> Dark Mode
            </button>
          </div>
          <div className="setting-sec">
            <h2>Answer-hidden Text</h2>
            <input type="text" id="hidden-text" className="text-input" placeholder="The answer is hidden" onKeyUp={checkHiddenText} onChange={typeHiddenText} autoComplete="off"/>
            <p>This text will be shown when the hinter presses "Hide answer" button, the default text is "The answer is hidden".</p>
            <p id="warning-hidden-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}