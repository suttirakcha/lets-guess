import React, { useState, useEffect } from "react";
import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faClose,faSun,faMoon,faSearch,faExclamationCircle,faChevronDown,faLanguage, faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export default function MainPageLao(){
  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer-switch") === 'false');
  const [timerSixty, setTimerSixty] = useState(localStorage.getItem("timer-sixty") === 'true');

  const [clicked, setClicked] = useState(false);

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
    heading.innerHTML = "ມາເດົາຄຳກັນ";
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
    if (clicked){
      closeSearch();
    }
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
      heading.innerHTML = "ເລືອກໝວດໝູ່";
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
    let allCates = document.getElementById("all-cates");
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
        allCates.style.display = "none";
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
      (hiddenText.value.includes("@"))
    ){
      if (hiddenText.value.includes("@")){
        warning.innerHTML = "*ບໍ່ອະນຸຍາດໃຫ້ໃຊ້ @ ໃນພື້ນທີ່ຂໍ້ຄວາມນີ້.";
      } else {
        warning.innerHTML = "*ກະລຸນາຫຼີກເວົ້ນການນຳໃຊ້ຄຳທີ່ບໍ່ສຸພາບ ຫຼືຄຳທີ່ອ່ອນໄຫວ.";
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
      localStorage.setItem("point", 0);
      hiddenText.value = localStorage.setItem("text-hidden-lo", "");
    }
    hiddenText.value = localStorage.getItem("text-hidden-lo");
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

  const typeHiddenTextLo = () => {
    let hiddenText = document.getElementById("hidden-text").value;
    localStorage.setItem("text-hidden-lo", hiddenText);
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

  const cateLists = {
    eatingLo: [
      {
        category: "ເຂົ້າໜົມຫວານ",
        link: "/lo/desserts"
      },
      {
        category: "ເຄື່ອງດື່ມ",
        link: "/lo/drinks"
      },
      {
        category: "ອາຫານ",
        link: "/lo/foods"
      },
    ],
    geographyLo: [
      {
        category: "ແຂວງໃນປະເທດລາວ",
        link: "/lo/laos-provinces"
      }
    ],
    otherLo: [
      {
        category: "ເຄື່ອງຄົວ",
        link: "/lo/kitchenware"
      },
      {
        category: "ສັດຕ່າງໆ",
        link: "/lo/animals"
      },
    ],
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
        <CardCate category="ເຂົ້າໜົມຫວານ" link="/lo/desserts"/>
        <CardCate category="ແຂວງໃນປະເທດລາວ" link="/lo/laos-provinces"/>
        <CardCate category="ເຄື່ອງຄົວ" link="/lo/kitchenware"/>
        <CardCate category="ເຄື່ອງດື່ມ" link="/lo/drinks"/>
        <CardCate category="ສັດຕ່າງໆ" link="/lo/animals"/>
        <CardCate category="ອາຫານ" link="/lo/foods"/>
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
        ກັບ
      </button>
        <header className="app-head">
          <h1 id="heading">ມາເດົາຄຳກັນ</h1>
        </header>
          <div id="right-btns-sec">
            <button id="settingsBtn" className="btn small-btn" onClick={openSettings}>
              <FontAwesomeIcon icon={faGear}/>
            </button>
            <div id="settings-tooltip" className="tooltips">
              <p>ການຕັ້ງຄ່າ</p>
            </div>
            <button id="searchBtn" className="btn small-btn" onClick={openSearch}>
              <FontAwesomeIcon icon={faSearch}/>
            </button>
            <div id="search-tooltip" className="tooltips">
              <p>ຊອກຫາໝວດໝູ່</p>
            </div>
            <button id="searchCloseBtn" className="btn small-btn" onClick={closeSearch}>
              <FontAwesomeIcon icon={faClose}/>
            </button>
            <input type="text" id="search-input" onKeyUp={searchCate} className="text-input" placeholder="ຊອກຫາໝວດໝູ່"/>
          </div>
          <div id="changeLangBtn">
            <button onClick={changeLang} className="btn small-btn">
              <FontAwesomeIcon icon={faLanguage} />
              ເລືອກພາສາ
            </button>
          </div>
          <div id="langList-bg"></div>
          <div id="langList-overlay" onClick={closeChangeLang}></div>
          <div id="langList">
            <h1>ເລືອກພາສາ</h1>
            <FontAwesomeIcon icon={faClose} id="close-changeLang-btn" onClick={closeChangeLang}/>
            <ul className="langs">
              <li className="active">ລາວ</li>
              <li onClick={() => window.location.replace("/")}>English / ອັງກິດ</li>
              <li onClick={() => window.location.replace("/th")}>ไทย / ໄທ</li>
            </ul>
          </div>
        <main className="app-main">
          <div id="how-to-play">
            <h2>ວິທີຫຼິ້ນ:</h2>
            <ol>
              <li>ຄົນໃບ້ຄຳສາມາດເຫັນຄຳຕອບໄດ້ເທົ່ານັ້ນ ແລະໃຫ້ໃບ້ຄຳຕອບເພື່ອໃຫ້ຄົນຫຼິ້ນສາມາດເດົາຄຳຕອບທີ່ປະກົດໃນໜ້າຈໍໄດ້.</li>
              <li>ຄົນໃບ້ຄຳສາມາດເຊື່ອງຄຳຕອບໄດ້ໂດຍກົດປຸ່ມ "ເຊື່ອງຄຳຕອບ" ໃນມຸມຂວາຂອງຈໍ.</li>
              <li>ຖ້າຄົນຫຼິ້ນເດົາຖືກ ໃຫ້ກົດປຸ່ມ"<FontAwesomeIcon icon={faCheck}/>" ເພື່ອໄປຍັງຄຳຕໍ່ໄປ.</li>
              <li>ຖ້າຄົນຫຼິ້ນເດົາຜິດ ຫຼືບໍ່ຮູ້ຄຳຕອບ ໃຫ້ກົດປຸ່ມ"<FontAwesomeIcon icon={faXmark}/>" ເພື່ອຂ້າມຄຳຕອບ.</li>
              <li>ເຈົ້າມີເວລາ 60 ຫຼື 120 ວິນາທີ (ຂຶ້ນຢູ່ກັບການຕັ້ງຄ່າຂອງເຈົ້າ) ໃນການເດົາຄຳຕອບ.</li>
            </ol>
          </div>
          <div id="all-cates">
            <AllCates />
            <div id="no-result">
              <FontAwesomeIcon icon={faExclamationCircle} style={{fontSize:"54px"}}/>
              <h1 style={{marginBottom:0,fontSize:"calc(30px + 0.5vw)"}}>ບໍ່ພົບຜົນໄດ້ຮັບ</h1>
              <p style={{fontSize:"calc(12px + 0.5vw)"}}>ກະລຸນາລອງຄີເວິດອື່ນ</p>
            </div>
          </div>
          <div id="select-list">
            <h2 className="list-titles">ອາຫານ</h2>
            <div className="select-lists">
              {
                cateLists.eatingLo.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>

            <h2 className="list-titles">ພູມສາດ</h2>
            <div className="select-lists">
              {
                cateLists.geographyLo.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>

            <h2 className="list-titles">ອື່ນໆ</h2>
            <div className="select-lists">
              {
                cateLists.otherLo.map((cate) => (
                  <CardCate category={cate.category} link={cate.link}/>
                ))
              }
            </div>
          </div>
          <div id="loading">
            <div className="loading-icon">
                <div className="inner-icon"></div>
            </div>
            <h2>ກຳລັງໂຫຼດ...</h2>
          </div>
        </main>
        <footer className="app-foot">
          <h2>ພ້ອມແລ້ວບໍ່?</h2>
          <button onClick={playNow} className="btn">ຫຼິ້ນເລີຍ</button>
        </footer>

        <div id="settings-drawer-mask" onClick={closeSettings}></div>
        <div id="settings-drawer-anim">
          <div id="circle"></div>
          <FontAwesomeIcon icon={faClose} id="close-settings-btn" onClick={closeSettings}/>
        </div>
        <div id="settings-drawer">
          <h1>ການຕັ້ງຄ່າ</h1>
          <p style={{marginBottom:0}}><strong>ໝາຍເຫດ: </strong> ການຕັ້ງຄ່າຂອງເຈົ້າຈະຖືກບັນທຶກໂດຍອັດຕະໂນມັດເມື່ອເຈົ້າປິດແຖບດ້ານຂ້າງນີ້.</p>
          <div className="setting-sec">
            <h2>ໂມງຈັບເວລາ</h2>
            <label className="switch" htmlFor="switch-timer">
              <input type="checkbox" id="switch-timer" checked={timerSwitch} onChange={toggleTimer}/>
              <span className="switch-toggle"></span>
              <div className="setting-text">
                <p className="second-th">60 ວິນາທີ</p>
                <p className="second-th">120 ວິນາທີ</p>
              </div>
            </label>
            <div id="block" className={`${timerSwitch ? "active" : ""}`}></div>
            <p>ໂມງຈັບເວລາຈະຖືກສະແດງດ້ານເທິງຂອງຈໍເມື່ອຫຼິ້ນເກມ.</p>
          </div>
          <div className="setting-sec">
            <h2>ໂໝດໜ້າຈໍ</h2>
            <button className="appear light-btn" onClick={lightMode}>
            <FontAwesomeIcon icon={faSun} style={{marginRight:"8px"}}/> ໂໝດສີສະຫວ່າງ
            </button>
            <button className="appear dark-btn" onClick={darkMode}>
            <FontAwesomeIcon icon={faMoon} style={{marginRight:"8px"}}/> ໂໝດສີເຂົ້ມ
            </button>
          </div>
          <div className="setting-sec">
            <h2>ຂໍ້ຄວາມເມື່ອເຊື່ອງຄຳຕອບ</h2>
            <input type="text" id="hidden-text" className="text-input" placeholder="ຄຳຕອບຖືກເຊື່ອງໄວ້" onInput={checkHiddenText} onChange={typeHiddenTextLo} autoComplete="off"/>
            <p>ຂໍ້ຄວາມຈະຖືກສະແດງເມື່ອຄົນໃບ້ຄຳກົດປຸ່ມ "ເຊື່ອງຄຳຕອບ". <br/>ຂໍ້ຄວາມເລິ່ມຕົ້ນຄື "ຄຳຕອບຖືກເຊື່ອງໄວ້"</p>
            <p id="warning-hidden-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}