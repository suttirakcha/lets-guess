import { createContext } from "react"
import { useState } from "react"

const mode = {
  light: '',
  dark: 'dark-mode'
}

const ThemeContext = createContext(mode.light)

function ThemeProvider({children}){
  return (
    <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext}