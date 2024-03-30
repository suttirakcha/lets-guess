import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function NotFound(){
  const clickToGoBack = () => {
    window.location.replace("/");
  }

  const [heading, setHeading] = useState("This page is not found")
  const [para, setPara] = useState(<>It seems that the page you are accessing is not found. <br/>Please click 'Go back' to go to the homepage.</>)
  const [btn, setBtn] = useState("Go back")

  return (
    <div id="not-found">
      <FontAwesomeIcon icon={faFaceFrownOpen} style={{fontSize:"60px",marginBottom:"20px"}}/>
      <h1 id="not-found-heading">{heading}</h1>
      <p id="not-found-para" style={{marginBottom:"30px"}}>{para}</p>
      <button className="btn" onClick={clickToGoBack} id="not-found-btn">{btn}</button>
    </div>
  )
}