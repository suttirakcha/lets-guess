import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function InformationTechnologyTh(){
  const words = ["คอมพิวเตอร์","โทรศัพท์","ระบบ","การสื่อสาร","ข้อมูล","ฐานข้อมูล","อินเทอร์เน็ต","เครือข่าย","ระบบปฏิบัติการ","ปัญญาประดิษฐ์"];
  return (<QuestionsTh answers={words} category="เทคโนโลยีสารสนเทศ" redirect="/th/information-technology"/>)
}