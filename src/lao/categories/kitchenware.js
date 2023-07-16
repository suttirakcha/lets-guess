import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function KitchenwareLao(){
  const words = ["ໄມ້ຖູ່","ບ່ວງ","ສ້ອມ","ມີດ","ໝໍ້","ຈານ","ຈອກ","ຕູ້ເຢັນ","ໂຖ","ແຊ່ຂົ້ວ","ເຕົາອົບ","ໝໍ້ຫຸງຂ້າວ","ແກ້ວ"];
  return (<QuestionsLao answers={words} category="ເຄື່ອງຄົວ" redirect="/lo/kitchenware"/>)
}