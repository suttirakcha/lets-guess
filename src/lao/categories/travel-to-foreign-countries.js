import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function TravelToForeignCountries(){
  const words = ["ขึ้นเครื่อง","จองตั๋วเครื่องบิน","ซื้อตั๋วเครื่องบิน","ไปสนามบิน","เที่ยวบิน","จองโรงแรม","จองที่พัก","ค้างคืน","ของฝาก","ถ่ายรูป","แลนด์มาร์ค","ชมวิว","ปีนเขา","เล่นสกี","เล่นสเกต","ภาษาอังกฤษ","นักท่องเที่ยว","เครื่องบิน","หนังสือเดินทาง","วีซ่า","กงสุล","สถานทูต","กระเป๋าเดินทาง","เช่ารถ","โหลดกระเป๋า","เรียนต่อ","ไปเที่ยว","กางเต็นท์","ทัวร์","ไกด์","เรียนภาษา","อาบแดด","ชายหาด","แพ็กของ"];
  return (<QuestionsTh answers={words} category="ไปต่างประเทศ" redirect="/th/travel-to-foreign-countries"/>)
}