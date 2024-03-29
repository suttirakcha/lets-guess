import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Background } from "../types/main-page"
import useChangeMode from "../hooks/useChangeMode"
import useLanguage from "../hooks/useLanguage"
import { Button } from "../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons"
import useTimer from "../hooks/useTimer"

const GamePage = () => {

  const { lang, cate } = useParams()
  const { checkIfDarkMode } = useChangeMode()
  const { mainLang } = useLanguage(lang)
  const { timerStart, setTimerStart, setIsTimeUp, isTimeUp } = useTimer()

  document.body.style.backgroundColor = checkIfDarkMode ? Background.BlueDark : Background.Blue

  const hook = mainLang.sortedCate.find(item => item.link == `/${lang}/${cate}`)
  const words = hook?.words
  const category = hook?.category
  const randomWord = words?.[Math.floor(Math.random() * words.length)]

  const [clearGame, setClearGame] = useState(false)
  const [startPage, setStartPage] = useState(true)
  const [word, setWord] = useState(randomWord)
  const [skipWord, setSkipWord] = useState({
    anim: '',
    correction: ''
  })

  const changeWord = (correction: string) => {
    const [...guessWord]: any = words
    const nextWord = words && guessWord[Math.floor(Math.random() * words.length)]

    setSkipWord(prev => ({...prev, anim: 'out'}))

    correction === 'wrong' ? 
      setSkipWord(prev => ({...prev, correction: 'wrong'})) :
    correction === 'correct' ?
      setSkipWord(prev => ({...prev, correction: 'correct'})) :
      setSkipWord(prev => ({...prev, correction: ''}))

    setTimeout(() => {
      setWord(nextWord)
      setSkipWord({correction:'', anim: 'in'})
    }, 600)

    setTimeout(() => [
      setSkipWord({correction:'', anim: ''})
    ], 1200)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerStart !== null){
        if (timerStart > 0){
          setTimerStart(timerStart - 1)
          localStorage.setItem("timer-continue", String(timerStart))
        }
      }
      if (timerStart == 0){
        setIsTimeUp(true)
        setTimeout(() => {
          setIsTimeUp(false)
          clearInterval(timer)
        }, 2000)
      }
    }, 1000)

    return () => { clearInterval(timer) }
  }, [timerStart])

  const afterGameTexts = ['Having fun?','Better luck next time','Wanna play again?','Hope you have enjoyed the game']
  const [afterGameText, setAfterGameText] = useState(afterGameTexts[Math.floor(Math.random() * afterGameTexts.length)])

  return (
    <div className="App">
      <header className={`head-game${clearGame ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
        <div className="sec-left">
          <h1 id="category">Category: {category}</h1>
          <h1 id="get-point" className={`${skipWord.correction === 'correct' ? 'animate' : ''}`}>Point +1</h1>
        </div>
        <h1 id="timer">{timerStart}</h1>
        <div className="checks-btns">
          <Button size='medium' onClick={() => {}}>Hide Answer</Button>
          <Button size='medium' onClick={() => {}}>Back to Homepage</Button>
        </div>
      </header>
      <main className={`app-main words-in-screen${clearGame ? ' active' : ' inactive'}${startPage ? ' start' : ''}`}>
        <h1 id="words" className={`${skipWord.correction === 'wrong' ? 'wrong-word ' : ''}${skipWord.correction === 'correct' ? 'correct-word ' : ''}${skipWord.anim}`}>{word}</h1>
        <footer className="checks-btns with-top-space">
          <Button className="incorrect" onClick={() => changeWord('wrong')} disabled={skipWord.correction !== '' ? true : false}>
            <FontAwesomeIcon icon={faXmark}/>
          </Button>
          <Button className="correct" onClick={() => changeWord('correct')} disabled={skipWord.correction !== '' ? true : false}>
            <FontAwesomeIcon icon={faCheck}/>
          </Button>
        </footer>
      </main>
    </div>
  )
}

export default GamePage