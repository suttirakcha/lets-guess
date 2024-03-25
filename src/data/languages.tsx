import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export const englishText = {
  title: "Let's Guess",
  select_category: "Select category",
  loading: "Loading...",
  select_language: "Select language",
  how_to_play_title: "How to play",
  how_to_play_desc: (
    <ol>
      <li>The hint giver can only see the answer on the screen, and try to hint the answer so that the players can guess what the answer is.</li>
      <li>The hint giver can hide the answer by clicking 'Hide answer' button at the top right of the screen.</li>
      <li>If the players guess correctly, press <FontAwesomeIcon icon={faCheck}/> button to go to the next word.</li>
      <li>If the players guess incorrectly or don't know the answer, press <FontAwesomeIcon icon={faXmark}/> button to skip the word.</li>
      <li>You have 60 or 120 seconds, depending on your setting, to hint the answers.</li>
    </ol>
  ),
  ready: "Are you ready?",
  play_now: "Play now",
  search_category: "Search category",
  settings: "Settings",
  settings_note: <p style={{ marginBottom: 0 }}><strong>Note: </strong> Your settings will be automatically saved when you close this sidebar.</p>,
  timer: "Timer",
  timer_note: "The timer is displayed at the top of the screen when playing the game.",
  go_back: "Go back",
  no_results: "No search results",
  try_another_keyword: "Please try another keyword."
}

export const thaiText = {
  title: "มาทายคำกันเถอะ",
  select_category: "เลือกหมวดหมู่",
  loading: "กำลังโหลด...",
  select_language: "เลือกภาษา",
  how_to_play_title: "วิธีเล่น:",
  how_to_play_desc: (
    <ol>
      <li>ผู้บอกใบ้สามารถที่จะเห็นคำตอบได้เท่านั้น และให้ใบ้คำตอบเพื่อที่ผู้เล่นจะสามารถเดาคำตอบที่ปรากฏบนจอได้</li>
      <li>ผู้บอกใบ้สามารถซ่อนคำตอบโดยกดปุ่ม 'ซ่อนคำตอบ' ตรงมุมขวาบนของจอ</li>
      <li>ถ้าผู้เล่นทายถูก ให้กดปุ่ม <FontAwesomeIcon icon={faCheck}/> เพื่อไปยังคำต่อไป</li>
      <li>ถ้าผู้เล่นทายผิด หรือไม่รู้คำตอบ ให้กดปุ่ม <FontAwesomeIcon icon={faXmark}/> เพื่อข้ามคำตอบ</li>
      <li>คุณมีเวลา 60 หรือ 120 วินาที (ขึ้นอยู่กับการตั้งค่าของคุณ) ในการทายคำตอบ</li>
    </ol>
  ),
  ready: "พร้อมหรือยัง?",
  play_now: "เล่นเลย",
  search_category: "ค้นหาหมวดหมู่",
  settings: "การตั้งค่า",
  settings_note: <p style={{ marginBottom: 0 }}><strong>หมายเหตุ: </strong> การตั้งค่าของคุณจะถูกบันทึกโดยอัตโนมัติเมื่อคุณปิดแถบด้านข้างนี้</p>,
  timer: "ตัวจับเวลา",
  timer_note: "ตัวจับเวลาจะถูกแสดงด้านบนของจอเมื่อเล่นเกม",
  go_back: "กลับ",
  no_results: "ไม่พบผลลัพธ์",
  try_another_keyword: "กรุณาลองคีย์เวิร์ดอื่น"
}