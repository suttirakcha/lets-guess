import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function InformationTechnology(){
  const words = ["Computer","Telephone","System","Communication","Data","Database","Internet","Network","Operation","Artificial Intelligence","Operation System","Cybersecurity","Trojan","Malware","Adapter","Hardware","Software","Augmented Reality","Virtual Reality","Game","Server","File","Information","Browser","Cookie","Programme","Uniform Resource Location (URL)","Processor","Error","Multitasking","Memory","RAM","Download","Upload","Upgrade","Wi-Fi","Broadband","Media","Bug","Input","Output","Process","Username","Password","User","World Wide Web (WWW)","Online","Universal Serial Bus (USB)","Transmission","Chatbot","Machine Learning","Analytics","HTML","JavaScript","Monitor","Install","Uninstall","Backup"];
  return (<Questions answers={words} category="Information Technology" redirect="/information-technology"/>)
}