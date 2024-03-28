export const startStorages = () => {
  localStorage.setItem("lang", "en")
  localStorage.setItem("timer", String(60));
  localStorage.setItem("timer-continue", String(60));
  localStorage.setItem("text-hidden", "")
  localStorage.setItem("text-hidden-th", "")
  localStorage.setItem("text-hidden-zh", "")
  localStorage.setItem("text-hidden-de", "")
  localStorage.setItem("point", String(0));
  localStorage.setItem("mode", "light")
}

export const getStorages = () => {
  localStorage.getItem("lang")
  localStorage.getItem("timer");
  localStorage.getItem("timer-continue");
  localStorage.getItem("text-hidden")
  localStorage.getItem("text-hidden-th")
  localStorage.getItem("text-hidden-zh")
  localStorage.getItem("text-hidden-de")
  localStorage.getItem("point");
  localStorage.getItem("mode")
}