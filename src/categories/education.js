import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Education(){
  const words = ["Faculty","Architecture","Engineering","Business Administration","Science","Master's Degree","Bachelor's Degree","Course","School","High school","University","Kindergarten","Primary school","Student","Pupil","Subject","Secondary school","Scholarship","Examination","Quiz","Test","Term","Reception","Class","Classroom","Module","Teacher","Instructor","Communication Arts","Mathematics","Physics","Biology","Chemistry","Physical Education","Economics","Languages","Liberal Arts","Psychology","Methodology","College","Information Technology","Politics","Law","Alumni","Accounting","Marketing","Management"];
  return (<Questions answers={words} category="Education" redirect="/education"/>)
}