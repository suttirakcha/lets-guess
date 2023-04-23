import React, { useState, useEffect } from "react";
import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faChevronLeft,faXmark,faGear,faClose,faSun,faMoon,faSearch } from "@fortawesome/free-solid-svg-icons";

export default function MainPage(){
  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer-switch") === 'false');
  const [timerSixty, setTimerSixty] = useState(localStorage.getItem("timer-sixty") === 'true');

  const [settings, setSettings] = useState(false);

  localStorage.getItem('dark-mode');

  if (localStorage.getItem('dark-mode') == 'true'){
    document.body.classList.add("dark-mode");
  }

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
    heading.innerHTML = "มาทายคำกันเถอะ";
    howToPlay.style.display = "block";
    selectLists.style.display = "none";
    changeLangBtn.style.animation = "mainAnimOut 900ms forwards";
  }

  const goBack = () => {
    let headApp = document.querySelector(".app-head");
    let mainApp = document.querySelector(".app-main");
    let footApp = document.querySelector(".app-foot");
    let goBackBtn = document.getElementById("goBackBtn");
    let rightBtns = document.getElementById("right-btns-sec");
    let preventBlock = document.getElementById("prevent");
    headApp.style.animation = "headAnim 900ms forwards";
    mainApp.style.animation = "mainAnim 900ms forwards";
    footApp.style.animation = "footAnim 900ms forwards";
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
    closeSearch();
  }

  const playNow = () => {
    let headApp = document.querySelector(".app-head");
    let mainApp = document.querySelector(".app-main");
    let footApp = document.querySelector(".app-foot");
    let heading = document.getElementById("heading");
    let howToPlay = document.getElementById("how-to-play");
    let selectLists = document.getElementById("select-list");
    let goBackBtn = document.getElementById("goBackBtn");
    let rightBtns = document.getElementById("right-btns-sec");
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
      rightBtns.style.animation = "mainAnimOut 900ms forwards";
      heading.innerHTML = "เลือกหมวดหมู่";
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
    let rightBtns = document.getElementById("right-btns-sec");
    let preventBlock = document.getElementById("prevent");
    headApp.style.animation = "headAnim 900ms forwards";
    mainApp.style.animation = "mainAnim 900ms forwards";
    footApp.style.animation = "footAnim 900ms forwards";
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
      (hiddenText.value.includes("@"))
    ){
      if (hiddenText.value.includes("@")){
        warning.innerHTML = "*ไม่อนุญาตให้ใช้ @ ในพื้นที่ข้อความนี้";
      } else {
        warning.innerHTML = "*โปรดหลีกเลี่ยงการใช้คำที่ไม่สุภาพ หรือคำที่อ่อนไหว";
      }
      hiddenText.classList.add("warning");
      localStorage.setItem("text-hidden-th", "");
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
      localStorage.setItem("point", 0);
      hiddenText.value = localStorage.setItem("text-hidden-th", "");
    }
    hiddenText.value = localStorage.getItem("text-hidden-th");
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

  const typeHiddenTextTh = () => {
    let hiddenText = document.getElementById("hidden-text").value;
    localStorage.setItem("text-hidden-th", hiddenText);
  }
  const changeLang = () => {
    localStorage.setItem("lang", "");
    window.location.replace("/");
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

  const cateLists = {
    eatingTh: [
      {
        category: "เครื่องดื่ม",
        link: "/th/drinks"
      },
      {
        category: "ขนมหวาน",
        link: "/th/desserts"
      },
      {
        category: "ขนมไทย",
        link: "/th/thai-desserts"
      },
      {
        category: "อาหาร",
        link: "/th/foods"
      }
    ],
    geographyTh: [
      {
        category: "จังหวัดในประเทศไทย",
        link: "/th/provinces-in-thailand"
      },
      {
        category: "ประเทศในโลก",
        link: "/th/countries-in-the-world"
      },
      {
        category: "สถานที่ท่องเที่ยวในกรุงเทพ",
        link: "/th/places-in-bangkok"
      }
    ],
    musicTh: [
      {
        category: "เพลงวง Tattoo Colour",
        link: "/th/tattoo-colour"
      },
      {
        "category": "เครื่องดนตรี",
        "link": "/th/musical-instruments"
      },
      {
        "category": "นักร้องไทย",
        "link": "/th/thai-singers"
      }
    ],
    gamesTh: [
      {
        category: "ตัวละครในเกม ROV",
        link: "/th/characters-in-rov"
      }
    ],
    otherTh: [
      {
        category: "สัตว์ต่างๆ",
        link: "/th/animals"
      }
    ]
  }

  const openSearch = () => {
    let searchBtn = document.getElementById("searchBtn");
    let closeBtn = document.getElementById("searchCloseBtn");
    let searchInput = document.getElementById("search-input");

    searchBtn.style.animation = "mainAnim 100ms forwards";
    searchInput.style.width = "300px";
    searchInput.style.visibility = "visible";
    searchInput.style.transition = "all 400ms";
    setTimeout(() => {
      searchInput.classList.add("place");
      closeBtn.style.animation = "mainAnimOut 300ms forwards"
    },300)
  }

  const closeSearch = () => {
    let searchBtn = document.getElementById("searchBtn");
    let closeBtn = document.getElementById("searchCloseBtn");
    let searchInput = document.getElementById("search-input");
    searchInput.value = "";
    searchInput.classList.remove("place");

    closeBtn.style.animation = "mainAnim 100ms forwards";
    searchInput.style.width = "55.2px";
    searchInput.style.transition = "width 400ms";
    setTimeout(() => 
      searchBtn.style.animation = "mainAnimOut 200ms forwards"
    ,300);
    setTimeout(() => {
      searchInput.style.visibility = "hidden";
    },300)

    let selectList = document.getElementById("select-list");
    let cards = selectList.querySelectorAll(".card");

    for (let k = 0; k < cards.length; k++){
      cards[k].style.display = "block";
    }
  }

  const searchCate = () => {
    let searchInput = document.getElementById("search-input");
    let searchValue = searchInput.value.toUpperCase();
    let selectList = document.getElementById("select-list");
    let cards = selectList.querySelectorAll(".card");

    for (let k = 0; k < cards.length; k++){
      let cardHead = cards[k].getElementsByTagName("h2")[0];
      let cardText = cardHead.innerText;
      console.log(cardText);
      if (cardText.toUpperCase().indexOf(searchValue) > -1){
        cards[k].style.display = "block";
      } else {
        cards[k].style.display = "none";
      }
    }
  }

  return (
    <div className="App">
      <div id="prevent" className="invisible-block"></div>
      <div id="lets-start">
      <button onClick={goBack} id="goBackBtn" className="btn">
        <FontAwesomeIcon icon={faChevronLeft} className="back-arrow"/>
        กลับ
      </button>
        <header className="app-head">
          <h1 id="heading">มาทายคำกันเถอะ</h1>
        </header>
          <div id="right-btns-sec">
            <button id="settingsBtn" className="btn small-btn" onClick={openSettings}>
              <FontAwesomeIcon icon={faGear}/>
            </button>
            <button id="searchBtn" className="btn small-btn" onClick={openSearch}>
              <FontAwesomeIcon icon={faSearch}/>
            </button>
            <button id="searchCloseBtn" className="btn small-btn" onClick={closeSearch}>
              <FontAwesomeIcon icon={faClose}/>
            </button>
            <input type="text" id="search-input" onInput={searchCate} className="text-input" placeholder="ค้นหาหมวดหมู่"/>
          </div>
        <button onClick={changeLang} id="changeLangBtn" className="btn">Eng</button>
        <main className="app-main">
          <div id="how-to-play">
            <h2>วิธีเล่น:</h2>
            <ol>
              <li>ผู้บอกใบ้สามารถที่จะเห็นคำตอบได้เท่านั้น และให้ใบ้คำตอบเพื่อที่ผู้เล่นจะสามารถเดาคำตอบที่ปรากฏบนจอได้</li>
              <li>ผู้บอกใบ้สามารถซ่อนคำตอบโดยกดปุ่ม "ซ่อนคำตอบ" ตรงมุมขวาบนของจอ</li>
              <li>ถ้าผู้เล่นทายถูก ให้กดปุ่ม "<FontAwesomeIcon icon={faCheck}/>" เพื่อไปยังคำต่อไป</li>
              <li>ถ้าผู้เล่นทายผิด หรือไม่รู้คำตอบ ให้กดปุ่ม "<FontAwesomeIcon icon={faXmark}/>" เพื่อข้ามคำตอบ</li>
              <li>คุณมีเวลา 60 หรือ 120 วินาที (ขึ้นอยู่กับการตั้งค่าของคุณ) ในการทายคำตอบ</li>
            </ol>
          </div>
          <div id="select-list">
            <h2 className={`list-titles ${cateLists.eatingTh.length > 0 ? "" : "no-cate"}`}>อาหาร</h2>
            <div className="select-lists">
              {
                cateLists.eatingTh.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>

            <h2 className={`list-titles ${cateLists.geographyTh.length > 0 ? "" : "no-cate"}`}>ภูมิศาสตร์</h2>
            <div className="select-lists">
              {
                cateLists.geographyTh.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>

            <h2 className={`list-titles ${cateLists.musicTh.length > 0 ? "" : "no-cate"}`}>ดนตรี</h2>
            <div className="select-lists">
              {
                cateLists.musicTh.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>

            <h2 className={`list-titles ${cateLists.gamesTh.length > 0 ? "" : "no-cate"}`}>เกม</h2>
            <div className="select-lists">
              {
                cateLists.gamesTh.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>

            <h2 className={`list-titles ${cateLists.otherTh.length > 0 ? "" : "no-cate"}`}>อื่นๆ</h2>
            <div className="select-lists">
              {
                cateLists.otherTh.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>
          </div>
          <div id="loading">
            <div className="loading-icon">
                <div className="inner-icon"></div>
            </div>
            <h2>กำลังโหลด...</h2>
          </div>
        </main>
        <footer className="app-foot">
          <h2>พร้อมหรือยัง?</h2>
          <button onClick={playNow} className="btn">เล่นเลย</button>
        </footer>

        <div id="settings-drawer-mask" onClick={closeSettings}></div>
        <div id="settings-drawer-anim">
          <div id="circle"></div>
          <FontAwesomeIcon icon={faClose} id="close-settings-btn" onClick={closeSettings}/>
        </div>
        <div id="settings-drawer">
          <h1>การตั้งค่า</h1>
          <p style={{marginBottom:0}}><strong>หมายเหตุ: </strong> การตั้งค่าของคุณจะถูกบันทึกโดยอัตโนมัติเมื่อคุณปิดแถบด้านข้างนี้</p>
          <div className="setting-sec">
            <h2>ตัวจับเวลา</h2>
            <label className="switch" htmlFor="switch-timer">
              <input type="checkbox" id="switch-timer" checked={timerSwitch} onChange={toggleTimer}/>
              <span className="switch-toggle"></span>
              <div className="setting-text">
                <p className="second-th">60 วินาที</p>
                <p className="second-th">120 วินาที</p>
              </div>
            </label>
            <div id="block" className={`${timerSwitch ? "active" : ""}`}></div>
            <p>ตัวจับเวลาจะถูกแสดงด้านบนของจอเมื่อเล่นเกม</p>
          </div>
          <div className="setting-sec">
            <h2>โหมดหน้าจอ</h2>
            <button className="appear light-btn" onClick={lightMode}>
            <FontAwesomeIcon icon={faSun} style={{marginRight:"8px"}}/> โหมดสีสว่าง
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
            <FontAwesomeIcon icon={faMoon} style={{marginRight:"8px"}}/> โหมดสีเข้ม
            </button>
          </div>
          <div className="setting-sec">
            <h2>ข้อความเมื่อซ่อนคำตอบ</h2>
            <input type="text" id="hidden-text" className="text-input" placeholder="คำตอบถูกซ่อนไว้" onInput={checkHiddenText} onChange={typeHiddenTextTh} autoComplete="off"/>
            <p>ข้อความจะถูกแสดงเมื่อผู้บอกใบ้กดปุ่ม "ซ่อนคำตอบ"<br/> ข้อความเริ่มต้นคือ "คำตอบถูกซ่อนไว้"</p>
            <p id="warning-hidden-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}