import React from "react";
import "../../App.scss";
import QuestionsDe from "../components/questions";

export default function AnimalsLao(){
  const words = ["ໝາ","ແມວ","ນົກ","ກົບ","ງູ","ເສືອ","ສິງໂຕ","ຍຸງ","ເສືອດຳ","ແມງມຸມ","ປາ","ງົວ","ໝູ","ໄກ່","ແກະ","ແພະ","ກວາງ","ຊ້າງ","ລິງ","ໜູ","ມ້າ","ມ້າລາຍ","ແມງໄມ້","ເຜິ້ງ","ນົກອິນຊີ","ກະຕ່າຍ","ກະຮອກ","ປາດາວ","ສະຫຼາມ","ນົກຍູງ","ເປັດ","ປາມຶກ"];
  return (<QuestionsDe answers={words} category="Tiere" redirect="/de/animals"/>)
}