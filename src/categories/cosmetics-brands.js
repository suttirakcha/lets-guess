import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function CosmeticsBrands(){
  const words = ["Maybelline","Shiseido","L'Oréal","Estée Lauder","Lancôme","NYX Professional Makeup","MAC Cosmetics","Clinique","Unilever","Procter & Gamble (P&G)","LVMH","Natura & Co","Chanel","Beiersdorf","COTY","KMA Cosmetic","Srichand","Cute Press","Mistine","Yves Rocher","Innisfree","OLAY","Clarins","AVON","Bobbi Brown","Fenty Beauty","Sephora","Nivea"];
  return (<Questions answers={words} category="Cosmetics Brands" redirect="/cosmetics-brands"/>)
}