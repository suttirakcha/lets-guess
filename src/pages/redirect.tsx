import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Redirect = () => {

  const [link, setLink] = useState<string>('')

  useEffect(() => {
    if (localStorage.getItem("lang") !== null){
      setLink(`${localStorage.getItem("lang")}`)
    } else {
      setLink('/en')
    }
  }, [link, localStorage])

  return (
    <Navigate to={link}/>
  )
}

export default Redirect