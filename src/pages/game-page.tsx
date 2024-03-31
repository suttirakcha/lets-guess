import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Background, BackgroundChange } from "../types/main-page"
import useChangeMode from "../hooks/useChangeMode"
import useLanguage from "../hooks/useLanguage"
import { Button } from "./components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons"
import useTimer from "../hooks/useTimer"
import { BlockSpace } from "./components/BlockSpace"
import useAnswerIsHidden from "../hooks/useAnswerIsHidden"
import useRandomWord from "../hooks/useRandomWord"
import InvisibleOverlay from "./components/drawers/InvisibleOverlay"
import usePoint from "../hooks/usePoint"
import Modal from "./components/Modal"

const GamePage = () => {

  const { checkIfDarkMode } = useChangeMode()
  document.body.style.backgroundColor = checkIfDarkMode ? Background.BlueDark : Background.Blue

  const { lang, cate } = useParams()
  const { mainLang } = useLanguage(lang)
  const { timerContinue, setTimerContinue, setIsTimeUp, isTimeUp, timerStart } = useTimer()
  const { defaultText } = useAnswerIsHidden(lang)
  const { word, category, changeWord, skipWord } = useRandomWord(lang, cate)
  const { pointStart } = usePoint()

  const [clearGame, setClearGame] = useState(false)
  const [startPage, setStartPage] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGoingBack, setIsGoingBack] = useState(false)
  const [isAnswerHidden, setIsAnswerHidden] = useState(false)
  const [scoreResult, setScoreResult] = useState(false)

  const resetStorage = () => {
    setTimeout(() => {
      setScoreResult(false)
      localStorage.setItem("point", String(0))
      localStorage.setItem("timer-continue", timerStart!)
    }, 500)
  }

  const goBackToHomePage = () => {
    setScoreResult(false)
    setIsModalOpen(false)
    setIsGoingBack(true)
    resetStorage()
    document.body.style.animation = checkIfDarkMode ? BackgroundChange.GameToMainSlowDark : BackgroundChange.GameToMainSlow
    setTimeout(() => {
      localStorage.setItem("timer-continue", timerStart!)
      window.location.replace(`/${lang}`)
    }, 3000)
  }

  const goBack = () => {
    setScoreResult(false)
    document.body.style.animation = checkIfDarkMode ? BackgroundChange.GameToMainDark : BackgroundChange.GameToMain
    resetStorage()
    setTimeout(() => {
      localStorage.setItem("timer-continue", timerStart!)
      window.location.replace(`/${lang}`)
    }, 3000)
  }

  const playAgain = () => {
    setScoreResult(false)
    resetStorage()
    setTimeout(() => window.location.replace(`/${lang}/${cate}`), 2000)
  }

  useEffect(() => {
    setTimeout(() => {
      setStartPage(false)
    }, 900)

    document.title = `${category} - ${mainLang.language.title}`

    const timer = setInterval(() => {
      if (timerContinue !== null){
        if (timerContinue > 0){
          setTimerContinue(timerContinue - 1)
          localStorage.setItem("timer-continue", String(timerContinue))
        }
      }
      if (timerContinue == 0){
        setIsTimeUp(true)
        setTimeout(() => {
          setIsTimeUp(false)
          setClearGame(true)
          setIsAnswerHidden(false)
          clearInterval(timer)
        }, 2000)
        setTimeout(() => {
          setScoreResult(true)
        }, 3000)
      }
    }, 1000)

    return () => { clearInterval(timer) }
  }, [timerContinue])

  const afterGameTexts = [
    mainLang.language.after_game_text_1,
    mainLang.language.after_game_text_2,
    mainLang.language.after_game_text_3,
    mainLang.language.after_game_text_4
  ]

  const [afterGameText, setAfterGameText] = useState(afterGameTexts[Math.floor(Math.random() * afterGameTexts.length)])

  return (
    <div className={`App${isGoingBack ? ' fade-out-game' : ''}`}>

      <header className={`head-game${clearGame ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
        <div className="sec-left">
          <h1 id="category">{mainLang.language.category}: {category}</h1>
          <h1 id="get-point" className={`${skipWord.correction === 'correct' ? 'animate' : ''}`}>{mainLang.language.get_point}</h1>
        </div>
        <h1 id="timer">{timerContinue}</h1>
        <div className="checks-btns">
          <Button size='medium' onClick={() => setIsAnswerHidden(!isAnswerHidden)}>
            {isAnswerHidden ? mainLang.language.show_answer : mainLang.language.hide_answer}
          </Button>
          <Button size='medium' onClick={() => setIsModalOpen(true)}>{mainLang.language.back_to_homepage}</Button>
        </div>
      </header>

      <main className={`app-main words-in-screen${clearGame ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
        <h1 id="words" className={`${skipWord.correction === 'wrong' ? 'wrong-word ' : ''}${skipWord.correction === 'correct' ? 'correct-word ' : ''}${skipWord.anim}`}>{word}</h1>
        <footer className="checks-btns with-top-space">
          <Button className="incorrect" onClick={() => changeWord('wrong')} disabled={skipWord.correction === '' ? false : true}>
            <FontAwesomeIcon icon={faXmark}/>
          </Button>
          <Button className="correct" onClick={() => changeWord('correct')} disabled={skipWord.correction === '' ? false : true}>
            <FontAwesomeIcon icon={faCheck}/>
          </Button>
        </footer>
      </main>

      <BlockSpace isActive={isAnswerHidden} text={defaultText !== "" ? defaultText : mainLang.language.the_answer_is_hidden}/>

      {isTimeUp || clearGame || isGoingBack ? <InvisibleOverlay /> : null}
      <BlockSpace isActive={isTimeUp} text={(<span className="time-up-text">{mainLang.language.times_up}</span>)}/>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="modal-question">{mainLang.language.go_back_title}</h1>
        <div className="checks-btns with-top-space">
          <Button onClick={goBackToHomePage}>{mainLang.language.yes}</Button>
          <Button onClick={() => setIsModalOpen(false)}>{mainLang.language.no}</Button>
        </div>
      </Modal>

      <div className="modal-center">
        <div className={`score-result${scoreResult ? ' active' : ''}`}>

          <h1 className='result-title'>{mainLang.language.result}</h1>
          <h1 id='score'>{mainLang.language.score}: {pointStart}</h1>

          <h2 className="after-game-text">{afterGameText}</h2>
          <div className="checks-btns with-top-space">
            <Button size='medium' onClick={goBack}>{mainLang.language.go_back}</Button>
            <Button size='medium' onClick={playAgain}>{mainLang.language.play_again}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage