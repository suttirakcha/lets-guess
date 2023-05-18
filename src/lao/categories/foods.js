import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function FoodsTh(){
  const words = ["ສະຫຼັດ","ເຂົ້າ","ໄຂ່ຂົ້ວ","ຕຳໝາກຫຸ່ງ","ລາບ","ເອາະຫຼາມ","ປາແດກ","ແຈ່ວບອງ","ໄຄແຜ່ນ"];
  return (<QuestionsTh answers={words} category="ອາຫານ" redirect="/lo/foods"/>)
}