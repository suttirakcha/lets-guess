import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function EducationTh(){
  const words = ["คณะ","สถาปัตยกรรมศาสตร์","วิศวกรรมศาสตร์","บริหารธุรกิจ","วิทยาศาสตร์","ปริญญาโท","ปริญญาตรี","หลักสูตร","โรงเรียน","โรงเรียนมัธยม","มหาวิทยาลัย","โรงเรียนอนุบาล","โรงเรียนประถม","นักศึกษา","นักเรียน","วิชา","ทุนการศึกษา","แบบทดสอบ","ข้อสอบ","ภาคเรียน","ห้องเรียน","ครู","อาจารย์","นิเทศศาสตร์","คณิตศาสตร์","ฟิสิกส์","ชีววิทยา","เคมีวิทยา","พลศึกษา","เศรษฐศาสตร์","ภาษาศาสตร์","ศิลปศาสตร์","อักษรศาสตร์","มนุษยศาสตร์","จิตวิทยา","ระเบียบวิธี","วิทยาลัย","เทคโนโลยีสารสนเทศ","รัฐศาสตร์","นิติศาสตร์","ศิษย์เก่า","การบัญชี","การตลาด","การจัดการ","ห้องวิจัย","วิจัย","ค้นคว้าอิสระ","วิทยานิพนธ์","ปริญญาเอก","ใบประกาศนียบัตรวิชาชีพ","อนุปริญญา","เกรดเฉลี่ย","สถาบัน"];
  return (<QuestionsTh answers={words} category="การศึกษา" redirect="/th/education"/>)
}