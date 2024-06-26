import { useState } from "react"
import useLanguage from "./useLanguage"
import { LangType, SkipWord } from "../types/main-page"
import usePoint from "./usePoint"

const useRandomWord = (lang: LangType, cate: LangType) => {

  const { mainLang } = useLanguage(lang)

  const findCate = mainLang.sortedCate.find(item => item.link == `/${lang}/${cate}`)
  const words = findCate?.words
  const category = findCate?.category
  const randomWord = words?.[Math.floor(Math.random() * words.length)]

  const { countPoint } = usePoint()
  const [word, setWord] = useState(randomWord)
  const [skipWord, setSkipWord] = useState<SkipWord>({
    anim: '',
    correction: ''
  })

  const changeWord = (correction: string) => {
    const [...guessWord]: any = words
    const nextWord = words && guessWord[Math.floor(Math.random() * words.length)]

    setSkipWord(prev => ({...prev, anim: 'out'}))

    if (correction === 'wrong'){ 
      setSkipWord(prev => ({...prev, correction: 'wrong'}))
    } else if (correction === 'correct'){
      setSkipWord(prev => ({...prev, correction: 'correct'}))
      countPoint()
    } else {
      setSkipWord(prev => ({...prev, correction: ''}))
    }

    setTimeout(() => {
      setWord(nextWord)
      setSkipWord({correction:'', anim: 'in'})
    }, 600)

    setTimeout(() => [
      setSkipWord({correction:'', anim: ''})
    ], 1200)
  }

  return { word, changeWord, skipWord, category }
}

export default useRandomWord