import React from "react";
import "../../App.scss";
import QuestionsTh from "../th/components/questions";

export default function LatinUsedLanguagesTh(){
  const words = ["อังกฤษ","เยอรมัน","สเปน","ฝรั่งเศส","ดัตช์","โปรตุเกส","โครเอเชีย","มาเลย์","อินโดนีเซีย","เวียดนาม","ตุรกี","อิตาลี","ฮังการี","สวีเดน","เดนมาร์ก","ฟินแลนด์","โปแลนด์","ละติน","นอร์เวย์","สโลวัก","สวาฮีลี","อุซเบก","ตากาล็อก","ฟิลิปิโน","มอนเตเนโกร","แอลเบเนีย","บอสเนีย","เซอร์เบีย","อาฟรีกานส์","บาสก์","เช็ก","เวลส์","ไอร์แลนด์","ไอซ์แลนด์","ชวา","โซมาลี","เชบู"];
  return (<QuestionsTh answers={words} category="ภาษาที่ใช้อักษรละติน" redirect="/th/latin-used-languages"/>)
}