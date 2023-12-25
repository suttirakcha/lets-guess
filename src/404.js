import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function NotFound(){
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode") == "true");
  const clickToGoBack = () => {
    window.location.replace("/");
  }

  const [heading, setHeading] = useState("This page is not found")
  const [para, setPara] = useState(<>It seems that the page you are accessing is not found. <br/>Please click 'Go back' to go to the homepage.</>)
  const [btn, setBtn] = useState("Go back")

  const changeLang = (lang) => {
    if (lang === 'th'){
      setHeading("ไม่พบหน้านี้");
      setPara(<>ดูเหมือนว่าจะไม่พบหน้าที่คุณจะเข้าถึง <br/>โปรดกดปุ่ม 'กลับ' เพื่อไปยังหน้าแรก</>);
      setBtn("กลับ")
    } else {
      setHeading("This page is not found");
      setPara(<>It seems that the page you are accessing is not found. <br/>Please click 'Go back' to go to the homepage.</>);
      setBtn("Go back");
    }
  }

  useEffect(() => {
    if (darkMode){
      document.body.classList.add("dark-mode");
    }
  }, [])

  return (
    <>
      <div style={{padding:"20px",position:"absolute",width:"100%",top:0,display:"flex",gap:"8px"}}>
        <button className="btn" onClick={() => changeLang('en')}>Eng</button>
        <button className="btn" onClick={() => changeLang('th')}>ไทย</button>
      </div>
      <div id="not-found">
        <FontAwesomeIcon icon={faFaceFrownOpen} style={{fontSize:"60px",marginBottom:"20px"}}/>
        <h1 id="not-found-heading">{heading}</h1>
        <p id="not-found-para" style={{marginBottom:"30px"}}>{para}</p>
        <button className="btn" onClick={clickToGoBack} id="not-found-btn">{btn}</button>
      </div>
    </>
  )
}