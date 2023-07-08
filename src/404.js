import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./App.scss";

export default function NotFound(){
  const [changeLang, setChangeLang] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode") == "true");
  const clickToGoBack = () => {
    window.location.replace("/");
  }

  const Language = () => {
    const heading = document.getElementById("not-found-heading");
    const para = document.getElementsByTagName("not-found-para");
    const btn = document.getElementById("not-found-btn");

    if (changeLang){
      heading.innerHTML = "ไม่พบหน้านี้";
      para.innerHTML = "ดูเหมือนว่าจะไม่พบหน้าที่คุณจะเข้าถึง โปรดกดปุ่ม \"กลับ\" เพื่อไปยังหน้าแรก";
      btn.innerHTML = "กลับ";
    } else {
      heading.innerHTML = "This page is not found";
      para.innerHTML = "It seems that the page you are accessing is not found. <br/>Please click \"Go back\" to go to the homepage.";
      btn.innerHTML = "Go back";
    }

    return (<button class="btn" id="lang-btn">ไทย</button>)
  }

  useEffect(() => {
    if (darkMode){
      document.body.classList.add("dark-mode");
    }
  })

  return (
    <div id="javascript-disabled">
      <FontAwesomeIcon icon={faFaceFrownOpen} style={{fontSize:"60px",marginBottom:"20px"}}/>
      <h1 id="not-found-heading">This page is not found</h1>
      <p id="not-found-para" style={{marginBottom:"30px"}}>It seems that the page you are accessing is not found. <br/>Please click "Go back" to go to the homepage.</p>
      <button class="btn" onClick={clickToGoBack} id="not-found-btn">Go back</button>
    </div>
  )
}