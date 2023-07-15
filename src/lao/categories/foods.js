import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function FoodsLao(){
  const words = ["ສະຫຼັດ","ເຂົ້າ","ໄຂ່ຂົ້ວ","ຕຳໝາກຫຸ່ງ","ລາບ","ເອາະຫຼາມ","ປາແດກ","ແຈ່ວບອງ","ໄຄແຜ່ນ","ເຝີ","ເຂົ້າປຸ້ນ"];
  return (<QuestionsLao answers={words} category="ອາຫານ" redirect="/lo/foods"/>)
}