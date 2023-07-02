import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function CosmeticsBrands(){
  const words = ["Maybelline","Shiseido","L'Oréal","Estée Lauder","Lancôme","NYX Professional Makeup","MAC Cosmetics","Clinique","Unilever","Procter & Gamble (P&G)","LVMH","Natura & Co","Chanel","Beiersdorf","COTY","KMA Cosmetic","Srichand","Cute Press","Mistine","Yves Rocher","Innisfree","OLAY","Clarins","AVON","Bobbi Brown","Fenty Beauty","Sephora","Nivea","Urban Decay","Johnson & Johnson","Bath & Body Works","Amorepacific","Henkel","Mary Kay","Revlon","L'Occitane en Provence","Wella","Pola Orbis Holdings","Nu Skin","Make Up For Ever","Tarte","Eyes Lips Face (e.l.f)","NARS","Garnier","Pantene","Rexona","Schwarzkopf","SK-II"];
  return (<Questions answers={words} category="Cosmetics Brands" redirect="/cosmetics-brands"/>)
}