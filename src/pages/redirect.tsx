import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Redirect = () => {
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    setLink(localStorage.getItem("lang") !== null ? `${localStorage.getItem("lang")}` : '/en')
  }, [link, localStorage])

  return (
    <Navigate to={link}/>
  )
}

export default Redirect