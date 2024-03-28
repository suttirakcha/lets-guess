import { cateLists, cateTitles, sortedCategories } from "../data/categories-en";
import { cateListsThai, cateTitlesThai, sortedCategoriesThai } from "../data/categories-th";
import { LanguagesEnum } from "../types/main-page";
import { thaiText, englishText } from "../data/languages";
import { cateListsChinese, cateTitlesChinese, sortedCategoriesChinese } from "../data/categories-zh";

const useLanguage = (lang: string | undefined) => {
  const checkLang = lang === LanguagesEnum.English || 
    lang === LanguagesEnum.Thai || 
    lang === LanguagesEnum.Chinese || 
    lang === LanguagesEnum.German

  const mainLang = lang === LanguagesEnum.Thai ? {
    language: thaiText,
    categories: cateTitlesThai,
    cateList: cateListsThai,
    sortedCate: sortedCategoriesThai
  } : lang === LanguagesEnum.Chinese ? {
    language: englishText,
    categories: cateTitlesChinese,
    cateList: cateListsChinese,
    sortedCate: sortedCategoriesChinese
  } : {
    language: englishText,
    categories: cateTitles,
    cateList: cateLists,
    sortedCate: sortedCategories
  }

  return { mainLang, checkLang }
}

export default useLanguage