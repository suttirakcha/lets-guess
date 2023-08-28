import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Clothing(){
  const words = ["Shirt","Trousers","Skirt","Scarf","Shoes","Socks","Bra","Gloves","Hat","Glasses","Mask","Necklace","Earring","Wristband","Neck tie","Gown","Sari","Qi Pao","Hanbok","Hijab","Jeans","Underwear","Belt","Pyjaman","Jacket","Kimono","Ring","Jumper","Raincoat","Headscarf","Tights","Dress","Coat","Trainer Shoes","Swimsuit","Bodysuit"];
  return (<Questions answers={words} category="Clothing" redirect="/clothing"/>)
}