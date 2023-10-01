import React from "react";
import "../../App.scss";
import QuestionsLao from "../components/questions";

export default function PlacesLao(){
  const words = ["ໂຮງຮຽນ","ໂຮງໝໍ","ໂຮງແຮມ","ຮ້ານອາຫານ","ເຮືອນ","ຕະຫຼາດ","ສະໜາມບິນ","ຫ້າງສັບພະສິນຄ້າ","ສວນສັດ","ວັດ","ໂຮງພັກ","ສະໜາມກີລາ","ໂຮງລະຄອນ","ໂຮງໜັງ","ພິພິທະພັນ","ສຳນັກງານ","ມະຫາວິທະຍາໄລ","ວິທະຍາໄລ","ສວນສາທາລະນະ","ຮ້ານກາເຟ","ນ້ຳຕົກຕາດ","ປ່າ","ຖ້ຳ"];
  return (<QuestionsLao answers={words} category="ສະຖານທີ່" redirect="/lo/places"/>)
}