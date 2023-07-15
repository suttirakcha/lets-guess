import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function DessertsLao(){
  const words = ["ເຄັກ","ກະແລັມ","ມາກາຣອນ","ພາຍ","ຊັອກໂກແລັດ","ເຄັກນົມສົດ","ຂ້າວຈີ່"];
  return (<QuestionsLao answers={words} category="ເຂົ້າໜມຫວານ" redirect="/lo/desserts"/>)
}