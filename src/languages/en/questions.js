import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { sortedCategories } from "./categories";
import { Button } from "../../components/button";
import { BlockSpace } from "../../components/blockspace";
import Modal from "../../components/drawers/modal";
import InvisibleOverlay from "../../components/drawers/invisible-overlay";
import { startStorages } from "../../components/lists/storage";

export default function Questions(){
  const { id } = useParams()

  if (localStorage.mode === 'dark'){
    document.body.style.backgroundColor = "#272d60";
    document.body.classList.add("dark-mode");
  } else {
    document.body.style.backgroundColor = "#E0E4FF";
  }

  const getTimer = localStorage.getItem("timer-continue");
  const numPoint = localStorage.getItem("point");

  const countStart = localStorage.getItem("timer");

  const [count, setCount] = useState(parseInt(getTimer).toFixed());
  const [hideAnswer, setHideAnswer] = useState(false);
  const [hideAnswerBtn, setHideAnswerBtn] = useState('Hide answer');
  const [startPage, setStartPage] = useState(true)
  const [savedPoint, setSavedPoint] = useState(parseInt(localStorage.getItem("point")));
  const [timesUp, setTimesUp] = useState(false)
  const [skipWord, setSkipWord] = useState('');
  const [goBackModal, setGoBackModal] = useState(false);
  const [scoreResult, setScoreResult] = useState(false);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [clearGame, setClearGame] = useState(false);

  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  const afterGameTexts = ['Having fun?','Better luck next time','Wanna play again?','Hope you have enjoyed the game']
  const [afterGameText, setAfterGameText] = useState(afterGameTexts[Math.floor(Math.random() * afterGameTexts.length)])

  var hook = sortedCategories.find(item => item.link == `/${id}`)
  var words = hook.words
  var randomWord = words[Math.floor(Math.random() * words.length)];

  let textAnswerHidden = localStorage.getItem("text-hidden");

  const [word, setWord] = useState(randomWord);

  const handleWordChange = () => {
    var [...guessWord] = words;
    var randomWord = guessWord[Math.floor(Math.random() * words.length)];
    setSkipWord('out');

    const newWord = () => {
      setWord(randomWord)
      setSkipWord('in')
    }

    setTimeout(newWord, 600)
    setTimeout(() => setSkipWord(''), 1200)
  }

  const answer = (type) => {
    handleWordChange();
    switch (type){
      case 'correct':
        const plusOne = () => {
          setSavedPoint(savedPoint + 1);
          localStorage.setItem("point", savedPoint + 1);
        }
        setCorrect(true)
        setTimeout(plusOne, 500)
        setTimeout(() => setCorrect(false), 600)
        break;
      case 'wrong':
        setWrong(true)
        setTimeout(() => setWrong(false), 600)
        break
    }
  }

  const handleHideOrShowAnswer = () => {
    if (hideAnswerBtn === 'Hide answer'){
      setHideAnswerBtn('Show answer');
    } else {
      setHideAnswerBtn('Hide answer')
    }
    setHideAnswer(!hideAnswer)
  }

  const answerNo = () => {
    setGoBackModal(false)
  }

  const answerYes = () => {
    localStorage.setItem("point", 0)
    setGoBackModal(false);
    setIsGoingBack(true);
    if (document.body.classList.contains("dark-mode")){
      document.body.style.animation = "blue_to_green_dark 2s forwards";
    } else {
      document.body.style.animation = "blue_to_green 2s forwards";
    }

    setTimeout(() => {
      window.location.replace("/");
      localStorage.setItem("timer-continue", countStart);
    }, 3000)
  }

  const backToHomepage = () => {
    setScoreResult(false);
    if (document.body.classList.contains("dark-mode")){
      document.body.style.animation = "blue_to_green_dark 1s forwards";
    } else {
      document.body.style.animation = "blue_to_green 1s forwards";
    }
    setTimeout(() => {
      localStorage.setItem("point", 0);
      localStorage.setItem("timer-continue", countStart);
      window.location.replace("/");
    }, 2000);
  }

  const playAgain = () => {
    setScoreResult(false);
    setTimeout(() => {
      localStorage.setItem("point", 0);
      localStorage.setItem("timer-continue", countStart);
    }, 500)
    setTimeout(() => window.location.replace(`/${id}`), 2000);
  }

  useEffect(()=> {
    document.title = `${hook.category} - Let's Guess`
    setTimeout(() => {
      setStartPage(false)
    }, 1000)
    if(localStorage.length == 0){
      startStorages()
    }
  },[])

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0){
        setCount(count - 1)
        localStorage.setItem("timer-continue", count - 1)
      }
      if (count == 0){
        setTimesUp(true);
        setTimeout(() => {
          setTimesUp(false)
          setHideAnswer(false);
          setClearGame(true);
          clearInterval(timer)
        }, 2000)
        setTimeout(() => setScoreResult(true), 3000)
      }
    }, 1000)
    return () => {clearInterval(timer)}
  }, [count])

  return (
    <div className={`App${isGoingBack ? ' fade-out-game' : ''}`}>
      <header className={`head-game${clearGame ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
        <div className="sec-left">
          <h1 id="category">Category: {hook.category}</h1>
          <h1 id="get-point" className={`${correct ? 'animate' : ''}`}>Point +1</h1>
        </div>
        <h1 id="timer">{count}</h1>
        <div className="checks-btns">
          <Button size='medium' onClick={handleHideOrShowAnswer}>{hideAnswerBtn}</Button>
          <Button size='medium' onClick={() => setGoBackModal(true)}>Back to Homepage</Button>
        </div>
      </header>
      <main className={`app-main words-in-screen${clearGame ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
        <h1 id="words" className={`${wrong ? 'wrong-word ' : ''}${correct ? 'correct-word ' : ''}${skipWord}`}>{word}</h1>
        <footer className="checks-btns with-top-space">
          <Button className="incorrect" onClick={() => answer('wrong')} disabled={correct || wrong ? true : false}><FontAwesomeIcon icon={faXmark}/></Button>
          <Button className="correct" onClick={() => answer('correct')} disabled={correct || wrong ? true : false}><FontAwesomeIcon icon={faCheck}/></Button>
        </footer>
      </main>

      <BlockSpace isActive={hideAnswer} text={localStorage.getItem("text-hidden") === "" ? "The answer is hidden" : textAnswerHidden}/>

      <Modal open={goBackModal} onClose={answerNo}>
        <h1 className="modal-question">Are you sure you want to go back to the homepage?</h1>
        <div className="checks-btns with-top-space">
          <Button onClick={answerYes}>Yes</Button>
          <Button onClick={answerNo}>No</Button>
        </div>
      </Modal>

      {timesUp || isGoingBack && <InvisibleOverlay />}
      <BlockSpace isActive={timesUp} text={(<span style={{color:"#E63737"}}>Time's up!</span>)}/>

      <div className="modal-center">
        <div className={`score-result${scoreResult ? ' active' : ''}`}>
          <h1 className='result-title'>Result</h1>
          <h1 id='score'>Score: {numPoint}</h1>
          <h2 className="after-game-text">{afterGameText}</h2>
          <div className="checks-btns with-top-space">
            <Button size='medium' onClick={backToHomepage}>Go back</Button>
            <Button size='medium' onClick={playAgain}>Play again</Button>
          </div>
        </div>
      </div>
    </div>
  )
}