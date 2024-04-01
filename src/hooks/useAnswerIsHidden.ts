import { useEffect, useState } from "react"
import { LangType, LanguagesEnum } from "../types/main-page"
import { sensitiveWords } from "../data/sensitive-words"
import useLanguage from "./useLanguage"

const useAnswerIsHidden = (lang: LangType) => {

  const { mainLang } = useLanguage(lang)

  const defaultText: string = 
    localStorage.length > 1 && localStorage.getItem(
      lang === LanguagesEnum.Thai ? "text-hidden-th" : 
      lang === LanguagesEnum.Chinese ? "text-hidden-zh" :
      lang === LanguagesEnum.German ? "text-hidden-de" :
      "text-hidden"
    ) || ""

  const [text, setText] = useState<string>(defaultText)
  const [warningText, setWarningText] = useState<string>("")
  const [hasSensitiveWords, setHasSensitiveWords] = useState(false)

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
    if (sensitiveWords.some(word => text.toUpperCase().includes(word.toUpperCase()))){
      setHasSensitiveWords(true)
      setWarningText(mainLang.language.warning_text)
      handleMessage("")
    } else if (text.includes("@")){
      setHasSensitiveWords(true)
      setWarningText(mainLang.language.atsign_not_allowed)
      handleMessage("")
    } else {
      setHasSensitiveWords(false)
      handleMessage(text)
    }
  }, [hasSensitiveWords, text])

  return { hasSensitiveWords, text, warningText, setText, defaultText }
}

export default useAnswerIsHidden