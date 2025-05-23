import { useState } from "react";
import { ChangeEvent } from "react";

const useTimer = () => {
  const timerStart = localStorage.getItem("timer") || String(60)
  const checkIfTimer = localStorage.getItem("timer-continue")
  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer") == "120" ? true : false)
  const [timerContinue, setTimerContinue] = useState<number>(parseInt(checkIfTimer!))
  const [isTimeUp, setIsTimeUp] = useState(false)

  const toggleTimer = (e: ChangeEvent<HTMLInputElement>) => {
    setTimerSwitch(e.target.checked);
    localStorage.setItem("timer", String(!timerSwitch ? 120 : 60))
    localStorage.setItem("timer-continue", String(!timerSwitch ? 120 : 60))
  }

  return { timerSwitch, toggleTimer, isTimeUp, timerContinue, setIsTimeUp, setTimerContinue, timerStart }
}

export default useTimer