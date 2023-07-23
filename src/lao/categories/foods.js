import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function FoodsLao(){
  const words = ["ສະຫຼັດ","ເຂົ້າ","ໄຂ່ຂົ້ວ","ຕຳໝາກຫຸ່ງ","ລາບ","ເອາະຫຼາມ","ປາແດກ","ແຈ່ວບອງ","ໄຄແຜ່ນ","ເຝີ","ເຂົ້າປຸ້ນ","ເຂົ້າປຽກ","ກິມຈິ","ສະເຕັກ","ໄຂ່ດາວ","ໄຂ່ຕົ້ມ","ເຂົ້າຜັດ","ແກງ","ແກງໜໍ່ໄມ້","ປີ້ງໄກ່","ຈືນໄກ່","ປາເຜົາ"];
  return (<QuestionsLao answers={words} category="ອາຫານ" redirect="/lo/foods"/>)
}