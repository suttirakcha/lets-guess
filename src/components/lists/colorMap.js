export default function setColorMap(currentSec){
  const colorMapList = {
    0: localStorage.mode === 'light' ? "#D4FFA8" : "#313c26",
    1: localStorage.mode === 'light' ? "#FFE0FD" : "#3f1b3c",
    2: localStorage.mode === 'light' ? "#E0E4FF" : "#272d60",
  };
  
  if (colorMapList[currentSec]) {
    document.body.style.backgroundColor = colorMapList[currentSec];
    document.body.style.transition = "all 300ms";
  }
}