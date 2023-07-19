import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function LaosProvinces(){
  const words = ["ວຽງຈັນ","ນະຄອນຫຼວງວຽງຈັນ","ຫຼວງພະບາງ","ໄຊສົມບູນ","ຄຳມ່ວນ","ຈຳປາສັກ","ສາລະວັນ","ສະຫວັນນະເຂດ","ຊຽງຂວາງ","ໄຊຍະບູລີ","ເຊກອງ","ບໍລິຄຳໄຊ","ບໍ່ແກ້ວ","ຜົ້ງສາລີ","ຫຼວງນ້ຳທາ","ອັດຕະປື","ອຸດົມໄຊ","ຫົວພັນ"];
  return (<QuestionsLao answers={words} category="ແຂວງໃນປະເທດລາວ" redirect="/lo/laos-provinces"/>)
}