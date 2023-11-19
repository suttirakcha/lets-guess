import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark,faChevronLeft,faGear,faClose,faSun,faMoon,faSearch,faExclamationCircle,faChevronDown,faLanguage, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { cateLists, sortedCategories, cateTitles } from "./components/categories";
import { CardCate, CardCateWithTitle } from "../components/card";
import SearchBar from "./components/searchbar";
import { Button, ButtonWithIcon } from "../components/button";
import Loading from "../components/loading";
import TextInput from "../components/textinput";

export default function MainPageTh(){
  const [title, setTitle] = useState("มาทายคำกันเถอะ")
  const [currentSec, setCurrentSec] = useState(0)
  const [searchCate, setSearchCate] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [loadPage, setLoadPage] = useState()

  const switchSec = (title, index) => {
    setSwitching(true);
    setTimeout(() => {
      setTitle(title);
      setCurrentSec(index);
      setSwitching(false)
    }, 900)
  }

  const selectedCate = () => {
    setSwitching(true);
    setTimeout(() => {
      setCurrentSec(2)
    }, 900)
  }

  return (
    <div className="App">
      <div className={`header-btns ${currentSec === 1 ? 'fade-in' : ''}`}>
        <ButtonWithIcon text="กลับ" icon={faChevronLeft} onClick={() => switchSec("มาทายคำกันเถอะ", 0)}/>
      </div>

      <header className={`app-head ${switching ? 'active' : 'inactive'}`}>
        <h1 id="heading">{title}</h1>
      </header>
      <main className={`app-main ${switching ? 'active' : 'inactive'}`}>
        {currentSec === 1 ? (
          <section id="select-list">
            {cateTitles.map((cate) => (
              <CardCateWithTitle key={cate.key} title={cate.title} data={cateLists[cate.dataKey]} />
            ))}
          </section>
        ) : currentSec === 2 ? (
          <Loading text='Loading...'/>
        ) : (
          <div id="how-to-play">
            <h2>วิธีเล่น:</h2>
            <ol>
              <li>ผู้บอกใบ้สามารถที่จะเห็นคำตอบได้เท่านั้น และให้ใบ้คำตอบเพื่อที่ผู้เล่นจะสามารถเดาคำตอบที่ปรากฏบนจอได้</li>
              <li>ผู้บอกใบ้สามารถซ่อนคำตอบโดยกดปุ่ม 'ซ่อนคำตอบ' ตรงมุมขวาบนของจอ</li>
              <li>ถ้าผู้เล่นทายถูก ให้กดปุ่ม <FontAwesomeIcon icon={faCheck}/> เพื่อไปยังคำต่อไป</li>
              <li>ถ้าผู้เล่นทายผิด หรือไม่รู้คำตอบ ให้กดปุ่ม <FontAwesomeIcon icon={faXmark}/> เพื่อข้ามคำตอบ</li>
              <li>คุณมีเวลา 60 หรือ 120 วินาที (ขึ้นอยู่กับการตั้งค่าของคุณ) ในการทายคำตอบ</li>
            </ol>
          </div>
        )}
      </main>
      <footer className={`app-foot ${switching ? 'active' : currentSec > 0 ? 'hide-footer' : 'inactive'}`}>
        <h2>พร้อมหรือยัง?</h2>
        <Button onClick={() => switchSec('เลือกหมวดหมู่', 1)}>เล่นเลย</Button>
      </footer>
    </div>
  )
}