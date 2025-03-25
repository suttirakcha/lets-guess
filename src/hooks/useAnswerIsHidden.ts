import { useEffect, useState } from "react"
import { LangType, LanguagesEnum } from "../types/main-page"
import { sensitiveWords } from "../data/sensitive-words"
import useLanguage from "./useLanguage"

const useAnswerIsHidden = (lang: LangType) => {
  const { mainLang } = useLanguage(lang)
  const defaultText: string = 
    localStorage.length > 1 && (lang === LanguagesEnum.Thai ? 
    localStorage.getItem("text-hidden-th") :
  lang === LanguagesEnum.Chinese ?
    localStorage.getItem("text-hidden-zh") :
  lang === LanguagesEnum.German ?
    localStorage.getItem("text-hidden-de") :
    localStorage.getItem("text-hidden")) || ""

  const [text, setText] = useState(defaultText);
  const [warningText, setWarningText] = useState("");
  const [hasSensitiveWords, setHasSensitiveWords] = useState(false);

  const handleMessage = (message: string) => {
    localStorage.length > 1 && (lang === LanguagesEnum.Thai ?
    localStorage.setItem("text-hidden-th", message) :
  lang === LanguagesEnum.Chinese ?
    localStorage.setItem("text-hidden-zh", message) :
  lang === LanguagesEnum.German ?
    localStorage.setItem("text-hidden-de", message) :
    localStorage.setItem("text-hidden", message))
  }

  useEffect(() => {
    const checkIfSensitive = sensitiveWords.some(word => text.toUpperCase().includes(word.toUpperCase()))
    const checkIfHasAtSign = text.includes("@");

    if (checkIfSensitive) setWarningText(mainLang.language.warning_text);
    if (checkIfHasAtSign) setWarningText(mainLang.language.atsign_not_allowed);

    setHasSensitiveWords(checkIfSensitive || checkIfHasAtSign ? true : false);
    handleMessage(checkIfSensitive || checkIfHasAtSign ? "" : text);
  }, [hasSensitiveWords, text])

  return { hasSensitiveWords, text, warningText, setText, defaultText }
}

export default useAnswerIsHidden