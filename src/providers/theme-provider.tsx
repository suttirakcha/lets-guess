import { createContext, ReactNode, useState } from "react"

const ThemeProvider = ({ children } : { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.mode === 'dark' ? 'dark' : 'light')

  if (theme === 'dark'){
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const ThemeContext = createContext(theme)

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider