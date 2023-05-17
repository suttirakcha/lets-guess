import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function AnimalsLao(){
  const words = ["ໝາ","ແມວ","ນົກ","ກົບ","ງູ","ເສືອ","ສິງໂຕ","ຍຸງ","ເສືອດຳ","ແມງມຸມ","ປາ","ງົວ","ໝູ","ໄກ່","ແກະ","ແພະ","ກວາງ","ຊ້າງ","ລິງ","ໜູ","ມ້າ","ມ້າລາຍ"];
  return (<QuestionsLao answers={words} category="ສັດຕ່າງໆ" redirect="/lo/animals"/>)
}