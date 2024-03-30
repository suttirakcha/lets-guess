import useLanguage from "../../hooks/useLanguage"
import DrawerCircle from "./DrawerCircle"
import { LanguagesEnum } from "../../types/main-page"

interface ChangeLangDrawerProps {
  open: boolean
  onClose: () => void
  lang: string | undefined
  onChange: (link: string) => void
}

interface LangList {
  title: string
  link: string
  isActive: boolean
}

const ChangeLangDrawer = ({ open, onClose, lang, onChange } : ChangeLangDrawerProps) => {

  const { mainLang } = useLanguage(lang)

  const langList: LangList[] = [
    {
      title: `English ${lang !== LanguagesEnum.English ? `(${mainLang.language.english})` : ''}`,
      link: '/en',
      isActive: lang === LanguagesEnum.English
    },
    {
      title: `ไทย ${lang !== LanguagesEnum.Thai ? `(${mainLang.language.thai})` : ''}`,
      link: '/th',
      isActive: lang === LanguagesEnum.Thai
    },
    {
      title: `中文 ${lang !== LanguagesEnum.Chinese ? `(${mainLang.language.chinese})` : ''}`,
      link: '/zh',
      isActive: lang === LanguagesEnum.Chinese
    },
    {
      title: `Deutsch ${lang !== LanguagesEnum.German ? `(${mainLang.language.german})` : ''}`,
      link: '/de',
      isActive: lang === LanguagesEnum.German
    }
  ]

  return (
    <DrawerCircle open={open} onClose={onClose}>
      <h1>{mainLang.language.select_language}</h1>
      <div id='langList'>
        <ul className="langs">
          {langList.map(list => (
            <li className={`${list.isActive ? 'active' : ''}`} onClick={() => !list.isActive && onChange(list.link)}>{list.title}</li>
          ))}
        </ul>
      </div>
    </DrawerCircle>
  )
}

export default ChangeLangDrawer