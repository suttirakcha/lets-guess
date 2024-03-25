import { createContext, ReactNode, useState } from "react"

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children } : ThemeProviderProps) => {
  const [theme, setTheme] = useState('light')

  const ThemeContext = createContext(theme)

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider