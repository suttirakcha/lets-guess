import { Background } from "../types/main-page";

const useChangeMode = () => {
  const checkIfDarkMode = localStorage.mode === "dark"

  const changeMode = (mode: string) => {
    if (mode == "dark"){  
      document.body.classList.add("dark-mode");
      document.body.style.backgroundColor = Background.PinkDark;
    } else {
      document.body.classList.remove("dark-mode");
      document.body.style.backgroundColor = Background.Pink;
    }
    document.body.style.transition = "all 300ms";
    localStorage.setItem('mode', mode)
  }

  return { checkIfDarkMode, changeMode }
}

export default useChangeMode