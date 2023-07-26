import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function DessertsLao(){
  const words = ["ເຄັກ","ກະແລັມ","ມາກາຣອນ","ພາຍ","ຊັອກໂກແລັດ","ເຄັກນົມສົດ","ເຂົ້າຈີ່","ພາຍໝາກນັດ","ເຄັກໝາກກ້ຽມ","ຄຸກກີ","ເຂົ້າໜົມອຶ່ງ","ເຄບ"];
  return (<QuestionsLao answers={words} category="ເຂົ້າໜມຫວານ" redirect="/lo/desserts"/>)
}