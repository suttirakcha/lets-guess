import { useState } from "react";
import { ChangeEvent } from "react";

const useTimer = () => {
  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer") == "120" ? true : false)

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

  return { timerSwitch, toggleTimer }
}

export default useTimer