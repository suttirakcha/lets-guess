import { useState } from "react"
import { LangType, SkipWord } from "../types/main-page"
import useLanguage from "./useLanguage"
import usePoint from "./usePoint"

const useRandomWord = (lang: LangType, cate: LangType) => {
  const { mainLang } = useLanguage(lang);
  const { countPoint } = usePoint();

  const findCate = mainLang.sortedCate.find(item => item.link == `/${lang}/${cate}`);
  const words = findCate?.words;
  const category = findCate?.category;
  const randomWord = words?.[Math.floor(Math.random() * words.length)];

  const [word, setWord] = useState(randomWord);
  const [skipWord, setSkipWord] = useState<SkipWord>({
    anim: '',
    correction: ''
  });

  const changeWord = (corr: string) => {
    const [...guessWord]: any = words
    const nextWord = words && guessWord[Math.floor(Math.random() * words.length)]
    setSkipWord(prev => ({
      ...prev, 
      correction: corr === 'wrong' ? 'wrong' : corr === 'correct' ? 'correct' : '', 
      anim: 'out'
    }))

    if (corr === 'correct') countPoint();

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