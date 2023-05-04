import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function LatinUsedLanguages(){
  const words = ["อังกฤษ","เยอรมัน","สเปน","ฝรั่งเศส","ดัตช์","โปรตุเกส","โครเอเชีย","มาเลย์","อินโดนีเซีย","เวียดนาม","ตุรกี","อิตาลี","ฮังการี","สวีเดน","เดนมาร์ก","ฟินแลนด์","โปแลนด์","ละติน","นอร์เวย์","สโลวัก","สวาฮีลี","อุซเบก","ตากาล็อก","ฟิลิปิโน","มอนเตเนโกร","แอลเบเนีย","บอสเนีย","เซอร์เบีย","อาฟรีกานส์","บาสก์"];
  return (<QuestionsTh answers={words} category="ภาษาที่ใช้อักษรละติน" redirect="/th/latin-used-languages"/>)
}