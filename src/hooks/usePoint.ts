import { useState } from "react"
import { CountType } from "../types/main-page"

const usePoint = () => {
  const pointStart = localStorage.getItem("point")
  const [point, setPoint] = useState<CountType>(pointStart !== null ? parseInt(pointStart) : 0)

  const countPoint = () => {
    setPoint(point! + 1)
    localStorage.setItem("point", String(point! + 1))
  }

  return { point, countPoint, pointStart }
}

export default usePoint