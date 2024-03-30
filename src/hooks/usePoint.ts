import { useState } from "react"

const usePoint = () => {
  const pointStart = localStorage.getItem("point")
  const [point, setPoint] = useState<number>(parseInt(pointStart!))

  const countPoint = () => {
    setPoint(point! + 1)
    localStorage.setItem("point", String(point! + 1))
  }

  return { point, countPoint, pointStart }
}

export default usePoint