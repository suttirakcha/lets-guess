import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function FashionBrands(){
  const words = ["UNIQLO","Gucci","Pomelo","Kloset","Milin","Miu Miu","Rotsaniyom","Soda","Tube Gallery","iCONiC","NIKE","Off-White","Balenciaga","PRADA","Versace","Vetements","FENDI","VALENTINO","Yves Saint Laurent","Louis Vuitton","Mitr","Adidas","Givenchy","SHEIN","ZARA","Vatanika","POEM","DISAYA","BOYY","Celine","Hermès","Chanel","Victoria's Secret","Under Armour","H&M","Rolex","PUMA","Ralph Lauren","Cartier","Tiffany & Co.","Swarovski","Levi's","Dior","Aldo","Patagonia","TAG Heuer","LACOSTE","ESCADA","Elie Tahari","Zalando","Burberry","Chow Tai Fook","Omega","Giorgio Armani","Lululemon","The North Face","ASOS","Nordstrom","C&A","Macy's","Ray Ban","FOREVER 21","Calvin Klein","Longchamp"];
  return (<Questions answers={words} category="Fashion Brands" redirect="/fashion-brands"/>)
}