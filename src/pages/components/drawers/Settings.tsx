import useLanguage from "../../../hooks/useLanguage"
import DrawerCircle from "./DrawerCircle"
import useTimer from "../../../hooks/useTimer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ToggleSelect from "../ToggleSwitch"
import useChangeMode from "../../../hooks/useChangeMode"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import useAnswerIsHidden from "../../../hooks/useAnswerIsHidden"
import { TextInput } from "../TextInput"
import { Button } from "../Button"
import Modal from "../Modal"
import { useState } from "react"
import { startStorages } from "../../../data/initial-storages"
import ThreeDots from "../ThreeDots"

interface SettingsProps {
  lang: string | undefined
  open: boolean
  onClose: () => void
}

const Settings = ({ open, onClose, lang } : SettingsProps) => {
  const { mainLang } = useLanguage(lang)
  const { timerSwitch, toggleTimer } = useTimer()
  const { changeMode } = useChangeMode()
  const { hasSensitiveWords, warningText, text, setText } = useAnswerIsHidden(lang)
  const [confirmReset, setConfirmReset] = useState(false)
  const [resetting, setResetting] = useState(false)

  const handleReset = () => {
    setResetting(true)
    setTimeout(() => {
      window.location.replace(`/${lang}`)
      startStorages()
    }, 3000)
  }

  const handleOnClose = () => {
    if (!hasSensitiveWords){
      onClose();
    }
  }

  return (
    <>
      <DrawerCircle open={open} onClose={handleOnClose} title={mainLang.language.settings}>
        {mainLang.language.settings_note}
        <div className="setting-sec">
          <h2>{mainLang.language.timer}</h2>
          <ToggleSelect id='switch-timer' checked={timerSwitch} onChange={toggleTimer} valueOne={mainLang.language.sixty_seconds} valueTwo={mainLang.language.hundred_twenty_seconds}/>
          <p>{mainLang.language.timer_note}</p>
        </div>
        <div className="setting-sec">
          <h2>{mainLang.language.screen_appearance}</h2>
          <div className="screen-appearance">
            <button className="appear light-btn" onClick={() => changeMode('light')}>
              <FontAwesomeIcon icon={faSun} /> {mainLang.language.light_mode}
            </button>
            <button className="appear dark-btn" onClick={() => changeMode('dark')}>
              <FontAwesomeIcon icon={faMoon} /> {mainLang.language.dark_mode}
            </button>
          </div>
        </div>
      
        <div className="setting-sec">
          <h2>{mainLang.language.hidden_answer_text_title}</h2>
          <TextInput className={`${hasSensitiveWords ? 'warning' : ''}`} placeholder={mainLang.language.the_answer_is_hidden} id="hidden-answer-text" value={text} onChange={e => setText(e.target.value)} autoComplete="off"/>
          {mainLang.language.hidden_answer_text_desc}
          <p id="warning-hidden-text" className={`${hasSensitiveWords ? 'active' : 'inactive'}`}>{warningText}</p>
        </div>

        <div className="setting-sec">
          <h2>{mainLang.language.reset_settings}</h2>
          <p>{mainLang.language.reset_settings_note}</p>
          <Button className="incorrect" size="small" onClick={() => setConfirmReset(true)}>
            {mainLang.language.reset_settings}
          </Button>
        </div>
      </DrawerCircle>

      <Modal open={confirmReset} onClose={() => !resetting && setConfirmReset(false)}>
        {resetting ? (
          <h1 className="modal-question">
            {mainLang.language.resetting}<ThreeDots/>
          </h1>
        ) : (
          <>
            <h1 className="modal-question">{mainLang.language.confirm_reset}</h1>
            <div className="checks-btns with-top-space">
              <Button onClick={handleReset}>{mainLang.language.yes}</Button>
              <Button onClick={() => setConfirmReset(false)}>{mainLang.language.no}</Button>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}

export default Settings