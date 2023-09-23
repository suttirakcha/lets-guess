import React, { useState, useEffect, useRef } from "react";
import "../../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark } from "@fortawesome/free-solid-svg-icons";

export default function QuestionsZh(props){
  if (localStorage.getItem("dark-mode") === 'true'){
    document.body.style.backgroundColor = "#272d60";
    document.body.classList.add("dark-mode");
  } else {
    document.body.style.backgroundColor = "#E0E4FF";
  }

  const headApp = useRef(null);
  const mainApp = useRef(null);

  var words = props.answers;
  var randomWord = words[Math.floor(Math.random() * words.length)];

  let textAnswerHidden = localStorage.getItem("text-hidden-zh");

  const [word, setWord] = useState(randomWord);

  const randomizeWords = () => {
    var [...countriesWord] = words;
    var randomWord = countriesWord[Math.floor(Math.random() * words.length)];
    let wordTxt = document.getElementById("words");
    wordTxt.style.color = "#E00000";
    wordTxt.style.animation = "randomWordsOut 600ms forwards";

    const newWord = () => {
      wordTxt.style.animation = "randomWordsIn 600ms forwards";
      if (localStorage.getItem("dark-mode") === 'true'){
        wordTxt.style.color = "white";
      } else {
        wordTxt.style.color = "black";
      }
      setWord(randomWord);
    }
    setTimeout(newWord, 600);
  }

  const getTimer = localStorage.getItem("timer-continue");
  const numPoint = localStorage.getItem("point");

  const countStart = localStorage.getItem("timer");
  var count = parseInt(getTimer).toFixed();

  const countTime = () => {
    let timer = document.getElementById("timer");
    let timesUp = document.getElementById("times-up");
    let timesUpBg = document.getElementById("times-up-bg");

    setInterval(function(){  
      count -= 1;
      localStorage.setItem("timer-continue", count);
      if (count < 20){
        timer.style.color = "#E63737";
        timer.style.transition = "color 20s";
      }
      if (count == 0){
        timesUp.style.display = "flex";
      }
      if (count < 0) {
        clearInterval(countTime);
        timesUp.style.animation = "openModal 400ms forwards";
        timesUpBg.style.visibility = "visible";

        const moveTimesUp = () => {
          timesUp.style.animation = "closeModal 400ms forwards";
          setTimeout(() => timesUp.style.display = "none", 500);
          showScoreResult();
        }
        setTimeout(moveTimesUp, 2000)
        return;
      }
      timer.innerHTML = count;
    }, 1000)
  }
  const [num, setNum] = useState(parseInt(localStorage.getItem("point")));

  const countPoint = () => {
    var [...countriesWord] = words;
    var randomWord = countriesWord[Math.floor(Math.random() * words.length)];
    let wordTxt = document.getElementById("words");
    wordTxt.style.color = "#00D604";
    wordTxt.style.animation = "randomWordsOut 600ms forwards";
    let getPoint = document.getElementById("get-point");

    const newWord = () => {
      wordTxt.style.animation = "randomWordsIn 600ms forwards";
      if (localStorage.getItem("dark-mode") === 'true'){
        wordTxt.style.color = "white";
      } else {
        wordTxt.style.color = "black";
      }
      setWord(randomWord);
    }

    const plusOne = () => {
      setNum(num + 1);
      localStorage.setItem("point", num + 1);
    }

    setTimeout(() => getPoint.classList.add("animate"),300)

    setTimeout(newWord, 600);
    setTimeout(() => plusOne(), 500)
    setTimeout(() => getPoint.classList.remove("animate"),1100);
  }

  const clickToHideAnswer = () => {
    let answerBtn = document.getElementById("toggle-hide-show");
    let answerHidden = document.getElementById("answer-hidden");
    if (answerBtn.innerText == "隐藏答案"){
      answerHidden.style.display = "flex";
      answerHidden.style.animation = "openModal 400ms forwards";
      answerBtn.innerText = "展示答案";
      answerBtn.disabled = true;
      setTimeout(() => answerBtn.disabled = false, 500);
    } else {
      answerBtn.disabled = true;
      setTimeout(() => answerBtn.disabled = false, 500);
      answerBtn.innerText = "隐藏答案";
      answerHidden.style.animation = "closeModal 500ms forwards";
      setTimeout(() => answerHidden.style.display = "none", 500);
    }
  }

  const clickToGoBack = () => {
    let modal = document.getElementById("want-to-quit-modal");
    let mask = document.getElementById("want-to-quit");

    modal.style.display = "block";

    modal.style.animation = "openModal 400ms forwards";
    mask.style.animation = "mainAnimOut 400ms forwards";
  }

  const answerNo = () => {
    let modal = document.getElementById("want-to-quit-modal");
    let mask = document.getElementById("want-to-quit");

    modal.style.animation = "closeModal 400ms forwards";
    mask.style.animation = "mainAnim 400ms forwards";

    setTimeout(() => modal.style.display = "none", 400)
  }

  const answerYes = () => {
    let modal = document.getElementById("want-to-quit-modal");
    let mask = document.getElementById("want-to-quit");
    let timesUpBg = document.getElementById("times-up-bg");

    modal.style.animation = "closeModal 400ms forwards";
    mask.style.backgroundColor = "#00000000";
    mask.style.transition = "all 400ms";
    timesUpBg.style.visibility = "visible";

    document.querySelector(".App").style.animation = "mainAnim 2s forwards";
    if (document.body.classList.contains("dark-mode")){
      document.body.style.animation = "changeBgToFrontDarkMode 2s forwards";
    } else {
      document.body.style.animation = "changeBgToFront 2s forwards";
    }
    localStorage.setItem("point", 0);

    setTimeout(() => {
      window.location.replace("/zh");
      localStorage.setItem("timer-continue", countStart);
    }, 3000)
  }

  const showScoreResult = () => {
    headApp.current.style.animation = "headAnim 900ms forwards";
    mainApp.current.style.animation = "mainAnim 1.5s forwards";
    let answerHidden = document.getElementById("answer-hidden");
    answerHidden.style.animation = "mainAnim 1.5s forwards";
    let scoreResult = document.getElementById("score-result");
    scoreResult.style.animation = "scoreResultIn 1.5s forwards";
    scoreResult.style.animationDelay = "1000ms";
    localStorage.setItem("timer-continue", countStart);
    localStorage.setItem("point", 0);
  }

  const scoreResultUp = () => {
    let scoreResult = document.getElementById("score-result");
    setTimeout(() => scoreResult.style.display = "none", 1510);
    scoreResult.style.animation = "scoreResultOut 1.5s forwards";
  }

  const scoreResultBackToHomepage = () => {
    scoreResultUp();
    if (document.body.classList.contains("dark-mode")){
      document.body.style.animation = "changeBgToFrontDarkMode 1s forwards";
    } else {
      document.body.style.animation = "changeBgToFront 1s forwards";
    }
    setTimeout(() => {
      window.location.replace("/zh");
      localStorage.setItem("point", 0);
    }, 2000);
  }

  const scoreResultPlayAgain = () => {
    scoreResultUp();
    localStorage.setItem("point", 0);
    setTimeout(() => window.location.replace(props.redirect), 2000);
  }

  const loadPage = () => {
    let headApp = document.querySelector(".app-head");
    headApp.style.animation = "headAnimOut 900ms forwards";
    if(localStorage.length == 0){
      localStorage.setItem("timer",60);
      localStorage.setItem("timer-continue",60);
      localStorage.setItem("text-hidden", "")
      localStorage.setItem("text-hidden-th", "")
      localStorage.setItem("point", 0);
    }
    countTime();
  }

  useEffect(()=> {loadPage()},[])

  const afterGameText = ['好玩吗？','想再玩一次吗？','希望你喜欢这个游戏吧','下次好运']

  return (
    <div className="App">
      <header className="app-head head-game" ref={headApp}>
        <div className="sec-left">
          <h1 id="category">类别: {props.category}</h1>
          <h1 id="get-point">评分 +1</h1>
        </div>
        <div className="sec-middle">
          <h1 id="timer">{getTimer}</h1>
        </div>
        <div className="sec-right">
          <button className="btn" id="toggle-hide-show" onClick={clickToHideAnswer}>隐藏答案</button>
          <button className="btn" onClick={clickToGoBack}>返回首页</button>
        </div>
      </header>
      <main className="app-main words-in-screen" ref={mainApp}>
        <h1 id="words">{word}</h1>
        <footer className="foot-main btns-check">
          <button className="btn incorrect" onClick={randomizeWords}><FontAwesomeIcon icon={faXmark}/></button>
          <button className="btn correct" onClick={countPoint}><FontAwesomeIcon icon={faCheck}/></button>
        </footer>
      </main>

      <div id="answer-hidden" className="block-space">
        <h1>{localStorage.getItem("text-hidden-zh") === "" ? "答案被隐藏" : textAnswerHidden}</h1>
      </div>

      <div id="want-to-quit" onClick={answerNo}></div>

      <div className="center">
        <div id="want-to-quit-modal">
          <h1>你想要返回首页吗？</h1>
          <div className="btns-check">
            <button className="btn" onClick={answerYes}>是</button>
            <button className="btn" onClick={answerNo}>否</button>
          </div>
        </div>
      </div>

      <div id="times-up-bg"></div>
      <div id="times-up" className="block-space">
        <h1 className="times-up-text">时间到了！</h1>
      </div>

      <div className="center">
        <div id="score-result">
          <h1 style={{fontSize:"60px",marginTop:0}}>结果</h1>
          <h1 style={{fontSize:"48px"}}>评分: {numPoint}</h1>
          <h2>{afterGameText[Math.floor(Math.random() * afterGameText.length)]}</h2>
          <div className="btns-check">
            <button className="btn" onClick={scoreResultBackToHomepage}>回去</button>
            <button className="btn" onClick={scoreResultPlayAgain}>再玩一次</button>
          </div>
        </div>
      </div>
    </div>
  )
}