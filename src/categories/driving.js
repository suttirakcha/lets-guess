import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Driving(){
  const words = ["Motorway","Road","Street","Car","Bus","Lorry","Truck","Traffic","Traffic jam","Traffic lights","Bus stop","Van","Driving licence","Speed","Patrol","Patrol station","Insurance","Accident","Fuel","Hill","Tyre","Engine","Tollway","Bridge"];
  return (<Questions answers={words} category="Driving" redirect="/driving"/>)
}