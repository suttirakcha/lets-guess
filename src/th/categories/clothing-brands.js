import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function ClothingBrands(){
  const words = ["Uniqlo","Gucci","Pomelo","Kloset","Milin","Miu Miu","Rotsaniyom","Soda","Tube Gallery","iCONiC","Painkiller","NIKE","Off-White","Balenciaga","PRADA","Versace","Vetements","FENDI","VALENTINO","Yves Saint Laurent","Louis Vuitton","TAYWIN","KIRSH","O!Oi","APIECEOFCAKE","Thisisneverthat","Acmè De La Vie","Mardi Mercredi","87MM Seoul","NERDY","COVERNAT","NOIRNINE","Mitr","Adidas","Givenchy","SHEIN","ZARA","Vatanika","POEM","DISAYA","BOYY"];
  return (<QuestionsTh answers={words} category="แบรนด์เสื้อผ้า" redirect="/th/clothing-brands"/>)
}