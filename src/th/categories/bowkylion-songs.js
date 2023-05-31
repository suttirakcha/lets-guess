import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function BowkylionSongs(){
  const words = ["วาดไว้","ลงใจ","รู้กันแค่นี้","บานปลาย","ชีวิตจริง","ทราบแล้วเปลี่ยน","ยิ้มมา","คิดถึงแต่","ใครอีกคน","ซับ","คงคา","แสนวิเศษ","คืนวันศุกร์","คำว่ารัก","ค.ควาย","แขนซ้าย","คนไข้","ขอโทษที่เป็นแบบนี้","คนเฬว","ย้อมใจ","ก่อนใคร","ลงสนาม","เจ้าป่า","ทิวาสวัสดิ์","ไปหาทำ","รักไปร้องไห้ไป","D/M/Y","ใจร้าย","ถ้าฉันรัก","คืออะไร","รักคืน","ผิดไหม","Can't Connect","Wanna be Free","ขอเนสนึง","เอาเลย"];
  return (<QuestionsTh answers={words} category="เพลงของ BOWKYLION" redirect="/th/bowkylion-songs"/>)
}