import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export const englishText = {
  title: "Let's Guess",
  category: 'Category',
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
  settings_note: <p style={{ margin: 0 }}><strong>Note: </strong> Your settings will be automatically saved when you close this sidebar.</p>,
  timer: "Timer",
  timer_note: "The timer is displayed at the top of the screen when playing the game.",
  sixty_seconds: "60 seconds",
  hundred_twenty_seconds: "120 seconds",
  go_back: "Go back",
  no_results: "No search results",
  try_another_keyword: "Please try another keyword.",
  screen_appearance: "Screen appearance",
  light_mode: "Light mode",
  dark_mode: "Dark mode",
  warning_text: "*Please avoid using impolite or sensitive words.",
  atsign_not_allowed: "*@ is not allowed in this text field.",
  hidden_answer_text_title: "Hidden answer text",
  hidden_answer_text_desc: (<p>This text will be shown when the hint giver presses the 'Hide answer' button, the default text is 'The answer is hidden'.</p>),
  the_answer_is_hidden: "The answer is hidden",
  reset_settings: "Reset settings",
  reset_settings_note: "Your settings will be reset and cannot be undone. If you found any issues, resetting settings could fix it.",
  confirm_reset: "Confirm resetting settings?",
  resetting: "Resetting...",
  english: "English",
  thai: "Thai",
  chinese: "Chinese",
  german: "German",
  hide_answer: "Hide Answer",
  show_answer: "Show Answer",
  times_up: "Time's up!",
  get_point: "Point + 1",
  back_to_homepage: "Back to Homepage",
  score: "Score",
  result: "Result",
  play_again: "Play again",
  go_back_title: "Are you sure you want to go back to the homepage?",
  yes: "Yes",
  no: "No",
  after_game_text_1: "Have fun?",
  after_game_text_2: "Better luck next time",
  after_game_text_3: "Wanna play again?",
  after_game_text_4: "Hope you have enjoyed the game"
}

export const thaiText = {
  title: "มาทายคำกันเถอะ",
  category: 'หมวดหมู่',
  select_category: "เลือกหมวดหมู่",
  loading: "กำลังโหลด...",
  select_language: "เลือกภาษา",
  how_to_play_title: "วิธีเล่น:",
  how_to_play_desc: (
    <ol>
      <li>ผู้ใบ้คำตอบสามารถที่จะเห็นคำตอบได้เท่านั้น และให้ใบ้คำตอบเพื่อที่ผู้เล่นจะสามารถเดาคำตอบที่ปรากฏบนจอได้</li>
      <li>ผู้ใบ้คำตอบสามารถซ่อนคำตอบโดยกดปุ่ม 'ซ่อนคำตอบ' ตรงมุมขวาบนของจอ</li>
      <li>ถ้าผู้เล่นทายถูก ให้กดปุ่ม <FontAwesomeIcon icon={faCheck}/> เพื่อไปยังคำต่อไป</li>
      <li>ถ้าผู้เล่นทายผิด หรือไม่รู้คำตอบ ให้กดปุ่ม <FontAwesomeIcon icon={faXmark}/> เพื่อข้ามคำตอบ</li>
      <li>คุณมีเวลา 60 หรือ 120 วินาที (ขึ้นอยู่กับการตั้งค่าของคุณ) ในการทายคำตอบ</li>
    </ol>
  ),
  ready: "พร้อมหรือยัง?",
  play_now: "เล่นเลย",
  search_category: "ค้นหาหมวดหมู่",
  settings: "การตั้งค่า",
  settings_note: <p style={{ margin: 0 }}><strong>หมายเหตุ: </strong> การตั้งค่าของคุณจะถูกบันทึกโดยอัตโนมัติเมื่อคุณปิดแถบด้านข้างนี้</p>,
  timer: "ตัวจับเวลา",
  timer_note: "ตัวจับเวลาจะถูกแสดงด้านบนของจอเมื่อเล่นเกม",
  sixty_seconds: "60 วินาที",
  hundred_twenty_seconds: "120 วินาที",
  go_back: "กลับ",
  no_results: "ไม่พบผลลัพธ์",
  try_another_keyword: "กรุณาลองคีย์เวิร์ดอื่น",
  screen_appearance: "โหมดหน้าจอ",
  light_mode: "โหมดสว่าง",
  dark_mode: "โหมดมืด",
  warning_text: "*โปรดหลีกเลี่ยงการใช้คำที่ไม่สุภาพ หรือคำที่อ่อนไหว",
  atsign_not_allowed: "*ไม่อนุญาตให้ใช้ @ ในพื้นที่ข้อความนี้",
  hidden_answer_text_title: "ข้อความเมื่อซ่อนคำตอบ",
  hidden_answer_text_desc: (<p>ข้อความจะถูกแสดงเมื่อผู้บอกใบ้กดปุ่ม 'ซ่อนคำตอบ'<br/> ข้อความเริ่มต้นคือ 'คำตอบถูกซ่อนไว้'</p>),
  the_answer_is_hidden: "คำตอบถูกซ่อนไว้",
  reset_settings: "รีเซ็ตการตั้งค่า",
  reset_settings_note: "การตั้งค่าของคุณจะถูกรีเซ็ตและไม่สามารถเลิกทำได้ หากคุณพบปัญหาที่เกิดขึ้น การรีเซ็ตการตั้งค่าจะช่วยแก้ปัญหาได้",
  confirm_reset: "ยืนยันการรีเซ็ตการตั้งค่าหรือไม่",
  resetting: "กำลังรีเซ็ต...",
  english: "อังกฤษ",
  thai: "ไทย",
  chinese: "จีน",
  german: "เยอรมัน",
  hide_answer: "ซ่อนคำตอบ",
  show_answer: "แสดงคำตอบ",
  times_up: "หมดเวลา!",
  get_point: "คะแนน + 1",
  back_to_homepage: "กลับไปหน้าแรก",
  score: "คะแนน",
  result: "ผลลัพธ์",
  play_again: "เล่นอีกครั้ง",
  go_back_title: "คุณต้องการกลับไปที่หน้าแรกหรือไม่",
  yes: "ใช่",
  no: "ไม่",
  after_game_text_1: "สนุกมั้ย?",
  after_game_text_2: "ไม่เป็นไร ครั้งหน้าเอาใหม่",
  after_game_text_3: "อยากเล่นอีกมั้ย?",
  after_game_text_4: "ไว้มาเล่นกันอีกนะ"
}

export const chineseText = {
  title: "我们猜吧",
  category: '类别',
  select_category: "选择类别",
  loading: "加载中...",
  select_language: "选择语言",
  how_to_play_title: "玩法:",
  how_to_play_desc: (
    <ol>
      <li>暗示人只可以见答案，也可以暗示答案，所以玩家可以猜在屏幕上的答案。</li>
      <li>暗示人可以在屏幕的右上角按 ”隐藏答案“ 隐藏答案。</li>
      <li>如果玩家猜正确，按 “<FontAwesomeIcon icon={faCheck}/>” 转到下一个的单词。</li>
      <li>如果玩家猜不正确或不知道答案是什么，按 “<FontAwesomeIcon icon={faXmark}/>” 跳过到下一步的单词。</li>
      <li>你有60或120秒（根据你的设置）暗示答案。</li>
    </ol>
  ),
  ready: "准备好了吗？",
  play_now: "玩吧",
  search_category: "搜索类别",
  settings: "设置",
  settings_note: <p style={{ margin:0 }}><strong>注意: </strong>你关此边栏时，你的设置将自动保存。</p>,
  timer: "定时器",
  timer_note: "定时器玩游戏时在屏幕上展示。",
  sixty_seconds: "60 秒",
  hundred_twenty_seconds: "120 秒",
  go_back: "回去",
  no_results: "无结果",
  try_another_keyword: "请试试其他的关键词",
  screen_appearance: "屏幕出现",
  light_mode: "灯光模式",
  dark_mode: "黑暗模式",
  warning_text: "*请避免用不礼貌或敏感的词。",
  atsign_not_allowed: "*此文本字段中不允许用 @。",
  hidden_answer_text_title: "隐藏答案的本文",
  hidden_answer_text_desc: (<p>暗示人按 “隐藏答案” 的时候，<br/>文本会展示。默认文本是 “答案被隐藏”</p>),
  the_answer_is_hidden: "答案被隐藏",
  reset_settings: "重置设置",
  reset_settings_note: "你的设置会被重置且无法撤销，如果你找到问题，重置设置能解决。",
  confirm_reset: "确认重置设置吗？",
  resetting: "重置中...",
  english: "英文",
  thai: "泰文",
  chinese: "中文",
  german: "德文",
  hide_answer: "隐藏答案",
  show_answer: "展示答案",
  times_up: "时间到了!",
  get_point: "评分 + 1",
  back_to_homepage: "返回首页",
  score: "评分",
  result: "结果",
  play_again: "再玩一次",
  go_back_title: "你想要返回首页吗？",
  yes: "是",
  no: "否",
  after_game_text_1: "好玩吗？",
  after_game_text_2: "下次好运",
  after_game_text_3: "想再玩一次吗？",
  after_game_text_4: "希望你喜欢这个游戏吧"
}

export const germanText = {
  title: "Lass uns erraten",
  category: 'Kategorie',
  select_category: "Kategorie auswählen",
  loading: "Wird geladen...",
  select_language: "Sprache auswählen",
  how_to_play_title: "Spielanleitung:",
  how_to_play_desc: (
    <ol>
      <li>Die Hint-Spieler(innen) können nur die Antwort sehen und anzudeuten, damit die Spieler(innen) die Antwort auf dem Bildschirm erraten können.</li>
      <li>Die Hint-Spieler(innen) können die Antwort verbergen, indem sie die „Antwort verbergen“-Schaltfläche drücken.</li>
      <li>Wenn Spieler(innen) richtig erraten, drücken Sie <FontAwesomeIcon icon={faCheck}/>-Schaltfläche um mit der nächsten Antwort fortzusetzen.</li>
      <li>Wenn Spieler(innen) unrichtig erraten, oder die Antwort nicht kennen, drücken Sie <FontAwesomeIcon icon={faXmark}/>-Schaltfläche, um mit der nächsten Antwort zu springen.</li>
      <li>Sie haben 60 oder 120 Sekunden, abhängig von Ihrer Einstellung, um Frage zu erraten.</li>
    </ol>
  ),
  ready: "Sind Sie bereit?",
  play_now: "Jetzt spielen",
  search_category: "Kategorie suchen",
  settings: "Einstellungen",
  settings_note: <p style={{ margin: 0 }}><strong>Hinweis: </strong> Ihre Einstellungen werden automatisch gespeichert, wenn Sie diese Seitenleiste schließen.</p>,
  timer: "Schaltuhr",
  timer_note: "Die Schaltuhr wird oben auf dem Bildschirm angezeigt, wenn Sie spielen.",
  sixty_seconds: "60 Sekunden",
  hundred_twenty_seconds: "120 Sekunden",
  go_back: "Zurückgehen",
  no_results: "Keine Ergebnisse gefunden",
  try_another_keyword: "Bitte versuchen Sie mit einem anderen Stichwort.",
  screen_appearance: "Bildschirmdarstellung",
  light_mode: "Heller Modus",
  dark_mode: "Dunkler Modue",
  warning_text: "*Bitte vermeiden Sie unhöfliche oder empfindliche Wörter.",
  atsign_not_allowed: "*@ ist in diesem Textfeld nicht erlaubt.",
  hidden_answer_text_title: "Verborgener Antworttext",
  hidden_answer_text_desc: (<p>Dieser Text wird angezeigt, wenn der/die Hint-Spieler(in) auf der „Antwort verbergen“-Schaltfläche drückt. Der Standardtext ist „Die Antwort ist verborgen“.</p>),
  the_answer_is_hidden: "Die Antwort ist verborgen",
  reset_settings: "Einstellungen zurücksetzen",
  reset_settings_note: "Ihre Einstellungen werden zurückgesetzt und können nicht gemacht werden, Wenn Sie Probleme feststellen, können Sie diese durch Zurücksetzen der Einstellungen beheben.",
  confirm_reset: "Bestätigen Sie das Zurücksetzen der Einstellungen?",
  resetting: "Wird zurücksetzen...",
  english: "Englisch",
  thai: "Thailändisch",
  chinese: "Chinesisch",
  german: "Deutsch",
  hide_answer: "Antwort verbergen",
  show_answer: "Antwort anzeigen",
  times_up: "Die Zeit ist um!",
  get_point: "Punkt + 1",
  back_to_homepage: "Zur Startseite zurückgehen",
  score: "Punkte",
  result: "Ergebnis",
  play_again: "Wiederspielen",
  go_back_title: "Sind Sie sicher, dass Sie um Startseite zurückzugehen wollen?",
  yes: "Ja",
  no: "Nein",
  after_game_text_1: "Macht das Ihnen Spaß?",
  after_game_text_2: "Viel Glück beim nächsten Mal",
  after_game_text_3: "Wollen Sie wiederspielen?",
  after_game_text_4: "Ich hoffe, Ihnen hat das Spiel gefallen"
}