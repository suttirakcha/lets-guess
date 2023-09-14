import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function KPopBands(){
  const words = ["EXO","Girls' Generation","Twice","Apink","BTS","BTOB","CNBLUE","AOA","Blackpink","GOT7","Red Velvet","Brown Eyed Girls","(G)I-DLE","Big Bang","NCT","asepa","ALICE","Oh My Girl","Newjeans","ITZY","FIFTY FIFTY","EXID","iKON","JYJ","Seventeen","SHINee","Super Junior","TVXQ","TXT","VIXX","Brown Eyed Soul","B.I.G","Nmixx","Le Sserafim","Mamamoo","F.T. Island","2AM","2PM","MBLAQ","Beast","B1A4","B.A.P","Sistar","NU'EST","Monsta X","Wanna One","Ateez","SS501","Infinite","Teen Top","Block B","Wonder Girls","Kara","2NE1","T-ara","f(x)","Secret","After School","4Minute","Miss A","Girl's Day","GFriend","I.O.I","STAYC","Kep1er","Xikers","Enhypen","Treasure","Stray Kids","The Boyz","Astro","Winner","Shinhwa","Momoland","Ive"];
  return (<Questions answers={words} category="K-Pop Bands" redirect="/kpop-bands"/>)
}