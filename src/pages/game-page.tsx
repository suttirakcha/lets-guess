import { useParams } from "react-router-dom"
import { useState } from "react"

const GamePage = () => {

  const { lang, cate } = useParams()

  const startedGame = {
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