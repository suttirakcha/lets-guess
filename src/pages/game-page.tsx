import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Background } from "../types/main-page"
import useChangeMode from "../hooks/useChangeMode"
import useLanguage from "../hooks/useLanguage"

const GamePage = () => {

  const { lang, cate } = useParams()
  const { checkIfDarkMode } = useChangeMode()
  const { mainLang } = useLanguage(lang)

  document.body.style.backgroundColor = checkIfDarkMode ? Background.BlueDark : Background.Blue

  const words = mainLang.sortedCate.find(item => item.link == `/${cate}`)?.words
  const randomWord = words && words[Math.floor(Math.random() * words.length)]

  const [word, setWord] = useState(randomWord)

  const gameData = {
    timer: localStorage.getItem("timer-continue"),
    point: localStorage.getItem("point"),
    count: localStorage.getItem("timer")
  }

  const afterGameTexts = ['Having fun?','Better luck next time','Wanna play again?','Hope you have enjoyed the game']
  const [afterGameText, setAfterGameText] = useState(afterGameTexts[Math.floor(Math.random() * afterGameTexts.length)])

  return (
    <div>

    </div>
  )
}

export default GamePage