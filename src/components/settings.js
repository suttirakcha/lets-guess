import DrawerCircle from "./drawers/drawerCircle";
import ToggleSelect from "./toggleSelect";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faClose,faSun,faMoon,faSearch,faExclamationCircle,faChevronDown,faLanguage, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { sensitiveWords } from "./lists/sensitiveWords";
import TextInput from "./textinput";

export default function Settings({open, onClose, setIsDarkMode}){
  const [timerSwitch, setTimerSwitch] = useState(localStorage.getItem("timer-switch") === 'false');
  const [timerSixty, setTimerSixty] = useState(localStorage.getItem("timer-sixty") === 'true');
  const [warningText, setWarningText] = useState('')
  const [typeHiddenText, setTypeHiddenText] = useState('');

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
  }

  const darkMode = () => {
    document.body.classList.add("dark-mode");
    document.body.style.backgroundColor = "#3f1b3c";
    document.body.style.transition = "all 300ms";
    setIsDarkMode(localStorage.setItem('dark-mode', 'true'))
  }

  const lightMode = () => {
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = "#FFE0FD";
    document.body.style.transition = "all 300ms";
    setIsDarkMode(localStorage.setItem('dark-mode', 'false'))
  }

  const checkHiddenText = () => {
    if (sensitiveWords.some(word => typeHiddenText.toUpperCase().includes(word.toUpperCase()))){
      setWarningText('*Please avoid using impolite or sensitive words.')
    } else if (typeHiddenText.includes('@')){
      setWarningText('*@ is not allowed in this text field.')
    } else {
      setWarningText('')
    }
  }

  return (
    <DrawerCircle open={open} onClose={onClose}>
      <h1>Settings</h1>
      <p style={{marginBottom:0}}><strong>Note: </strong> Your settings will be automatically saved when you close this sidebar.</p>
      <div className="setting-sec">
        <h2>Timer</h2>

        <ToggleSelect id='switch-timer' checked={timerSwitch} onChange={toggleTimer} valueOne="60 seconds" valueTwo="120 seconds"/>
        <p>The timer is displayed at the top of the screen when playing the game.</p>
      </div>
      <div className="setting-sec">
        <h2>Screen appearance</h2>
        <div className="screen-appearance">
          <button className="appear light-btn" onClick={lightMode}>
            <FontAwesomeIcon icon={faSun} /> Light Mode
          </button>
          <button className="appear dark-btn" onClick={darkMode}>
            <FontAwesomeIcon icon={faMoon} /> Dark Mode
          </button>
        </div>
      </div>
      <div className="setting-sec">
        <h2>Hidden answer text</h2>
        <TextInput placeholder="The answer is hidden" value={typeHiddenText} onInput={checkHiddenText} onChange={e => setTypeHiddenText(e.target.value)}autoComplete="off"/>
        <p>This text will be shown when the hint giver presses 'Hide answer' button, the default text is 'The answer is hidden'.</p>
        <p id="warning-hidden-text">{warningText}</p>
      </div>
    </DrawerCircle>
  )
}