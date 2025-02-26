import { Background } from "../types/main-page";

const useChangeMode = () => {
  const checkIfDarkMode = localStorage.mode === "dark"
  const changeMode = (mode: string) => {
    document.body.classList.toggle("dark-mode", mode === "dark");
    document.body.style.backgroundColor = mode === "dark" ? Background.PinkDark : Background.Pink;
    document.body.style.transition = "all 300ms";
    localStorage.setItem('mode', mode);
  }
  return { checkIfDarkMode, changeMode }
}

export default useChangeMode