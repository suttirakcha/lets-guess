import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function ClothingTh(){
  const words = ["เสื้อ","กางเกง","กระโปรง","ผ้าพันคอ","รองเท้า","ถุงเท้า","ยกทรง","ถุงมือ","หมวก","แว่นตา","หน้ากาก","สร้อย","ตุ้มหู","กำไลข้อมือ","เน็กไท","ครุย","ชฎา","ส่าหรี","กี่เพ้า","ฮันบก","ฮิญาบ","กางเกงยีนส์","ชุดชั้นใน","เข็มขัด","ชุดนอน","ราชปะแตน","แจ็กเกต","กิโมโน","แหวน","เสื้อกันหนาว","เสื้อกันฝน","ผ้าคลุมหัว","ถุงน่อง","ชุดกระโปรง","ชุดว่ายน้ำ","รองเท้าผ้าใบ"];
  return (<QuestionsTh answers={words} category="เครื่องแต่งกาย" redirect="/th/clothing"/>)
}