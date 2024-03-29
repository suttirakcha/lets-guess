import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Redirect = () => {

  const [link, setLink] = useState("/")

  useEffect(() => {
    if (localStorage.getItem("lang") !== null){
      setLink(`${localStorage.getItem("lang")}`)
    } else {
      setLink('/en')
    }
  }, [link])

  return (
    <Navigate to={link}/>
  )
}

export default Redirect