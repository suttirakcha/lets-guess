import { cateLists, cateTitles, sortedCategories } from "../data/categories-en";
import { cateListsThai, cateTitlesThai, sortedCategoriesThai } from "../data/categories-th";
import { cateListsChinese, cateTitlesChinese, sortedCategoriesChinese } from "../data/categories-zh";
import { cateListsGerman, cateTitlesGerman, sortedCategoriesGerman } from "../data/categories-de";

import { LangType, LanguagesEnum } from "../types/main-page";
import { thaiText, englishText, chineseText, germanText } from "../data/languages";

const useLanguage = (lang: LangType) => {
  const checkLang = lang === LanguagesEnum.English || 
    lang === LanguagesEnum.Thai || 
    lang === LanguagesEnum.Chinese || 
    lang === LanguagesEnum.German

  const mainLang = lang === LanguagesEnum.Thai ? {
    language: thaiText,
    categories: cateTitlesThai,
    cateList: cateListsThai,
    sortedCate: sortedCategoriesThai
  } 
  : lang === LanguagesEnum.Chinese ? {
    language: chineseText,
    categories: cateTitlesChinese,
    cateList: cateListsChinese,
    sortedCate: sortedCategoriesChinese
  } 
  : lang === LanguagesEnum.German ? {
    language: germanText,
    categories: cateTitlesGerman,
    cateList: cateListsGerman,
    sortedCate: sortedCategoriesGerman
  }
  : {
    language: englishText,
    categories: cateTitles,
    cateList: cateLists,
    sortedCate: sortedCategories
  }

  return { mainLang, checkLang }
}

export default useLanguage