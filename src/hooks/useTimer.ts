import { useCallback, useState } from "react";
import { ChangeEvent } from "react";

type Timer = number | null

const useTimer = () => {
  const timerStart = localStorage.getItem("timer")
  const checkIfTimer = localStorage.getItem("timer-continue")
  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer") == "120" ? true : false)
  const [timerContinue, setTimerContinue] = useState<Timer>(checkIfTimer !== null ? parseInt(checkIfTimer) : null)

  const [isTimeUp, setIsTimeUp] = useState(false)

  const toggleTimer = (e: ChangeEvent<HTMLInputElement>) => {
    setTimerSwitch(e.target.checked);

    if (!timerSwitch){
      localStorage.setItem("timer", String(120));
      localStorage.setItem("timer-continue", String(120));
    } else {
      localStorage.setItem("timer", String(60));
      localStorage.setItem("timer-continue", String(60));
    }
  }

  return { timerSwitch, toggleTimer, isTimeUp, timerContinue, setIsTimeUp, setTimerContinue, timerStart }
}

export default useTimer