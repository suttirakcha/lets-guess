import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function DrinksLao(){
  const words = ["ນ້ຳດື່ມ","ຊາ","ກາເຟ","ຄາປູຊິໂນ","ອະເມລິກາໂນ","ນົມ","ນ້ຳປັ່ນ","ໂຊດາ","ເບຍ","ເຫຼົ້າແວງ","ເອສເປຣສໂຊ","ນ້ຳໝາກກ້ຽງ","ນ້ຳໝາກໄມ້","ນ້ຳໝາກໂປມ","ນ້ຳໝາກນາວ","ໂຊຈູ","ນ້ຳໝາກພ້າວ","ນົມຖົ່ວເຫຼືອງ","ຊານົມ","ຊາໝາກນາວ","ລາເຕ້","ນົມສົ້ມ","ໂກໂກ້","ແຊມເປນ","ເຫຼົ້າ","ຊາຂຽວ","ຊາດຳ","ຊາຂາວ","ກາເຟດຳ","ນ້ຳຂິງ","ເຫຼົ້າຂາວ","ນ້ຳໝາກໜອດ"];
  return (<QuestionsLao answers={words} category="ເຄື່ອງດື່ມ" redirect="/lo/drinks"/>)
}