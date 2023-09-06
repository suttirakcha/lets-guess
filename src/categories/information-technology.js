import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function InformationTechnology(){
  const words = ["Computer","Telephone","System","Communication","Data","Database","Internet","Network","Operation","Artificial Intelligence","Operation System","Cybersecurity","Trojan","Malware","Adapter","Hardware","Software","Augmented Reality","Virtual Reality","Game","Server","File","Information","Browser","Cookie","Programme","Uniform Resource Location (URL)","Processor","Error","Multitasking","Memory","RAM","Download","Upload","Upgrade","Wi-Fi","Broadband","Media","Bug","Input","Output","Process","Username","Password","User","World Wide Web (WWW)","Online","Universal Serial Bus (USB)","Transmission","Chatbot","Machine Learning","Analytics","Hypertext Markup Language (HTML)","JavaScript","Monitor","Install","Uninstall","Backup","Cybercrime","DevOps","Shut down","Restart","Computer virus","IP Address","Cryptocurrency","Metaverse","Avatar","Blockchain","Hypertext Transfer Protocol (HTTP)","Storage","Central Processing Unit (CPU)","Folder","Keyboard","Mouse","Cursor","Domain","Website","Application","Verification","Authentication","Authorisation","Risk","Security","Performance","Vulnerability","Validation"];
  return (<Questions answers={words} category="Information Technology" redirect="/information-technology"/>)
}