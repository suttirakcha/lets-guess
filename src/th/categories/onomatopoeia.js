import React from "react";
import "../../App.scss";
import Questions from "../components/questions";

export default function Onomatopoeia(){
  const words = ["ปัง","ตูม","เปรี้ยง","โป๊ะ","โครม","ครืน","โฮ่ง ๆ","แป๊ะ","ผัวะ","เหมียว ๆ","กรุ๊งกริ๊ง","กรี๊ด","กรี๊ดกราด","จ๊อก","ซู่","จ๋อม","ตุ้บ","เปรี๊ยะ","เปรี้ยงปร้าง","แน่ะ","บึ้ม","เพี้ยะ","เป๊าะ","ฮ่า","เอี๊ยด","เอี๊ยดอ๊าด","ฮัดเช่ย","ครอกฟี้","ก๊อก","ก๊อกแก๊ก","เฮ","บรื๋อ","จี๊ด ๆ","จิ๊บ ๆ","ฟิ้ว","อู๊ด ๆ"];
  return (<Questions answers={words} category="คำเลียนเสียงธรรมชาติ" redirect="/th/onomatopoeia"/>)
}