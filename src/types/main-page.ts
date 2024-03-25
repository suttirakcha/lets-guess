export interface SearchSec {
  isOpen: boolean
  isSwitching: boolean
  isSwitched: boolean
  result: string
}
  
export interface PageSec {
  current: number
  isChanging: boolean
  isLoaded: boolean
  headerFading: boolean
}

export enum LanguagesEnum {
  English = "",
  Thai = "th",
  Chinese = "zh",
  German = "de"
}
  
export enum BackgroundChange {
  GreenToPink = "green_to_pink 900ms forwards",
  GreenToPinkDark = "green_to_pink_dark 900ms forwards",
  PinkToGreen = "pink_to_green 900ms forwards",
  PinkToGreenDark = "pink_to_green_dark 900ms forwards",
  PinkToBlue = "pink_to_blue 900ms forwards",
  PinkToBlueDark = "pink_to_blue_dark 900ms forwards"
}