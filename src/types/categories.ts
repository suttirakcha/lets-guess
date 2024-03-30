export type CateTitles = {
  key: string,
  title: string,
  dataKey: string
}

export type CateTitlesEnglish = string[]

export interface CateList {
  category: string
  link: string
  words: string[]
}

export interface Category {
  [category: string]: CateList[]
}