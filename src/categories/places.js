import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Places(){
  const words = ["School","House","University","College","Theatre","Cinema","Hospital","Supermarket","Department store","Shop","Airport","Pharmacy","City centre","Museum","Temple","Church","Flat","Apartment","Restaurant","Office","Amusement park","Studio","Clinic","Bank","Police station","Bookstore","Petrol station","Bakery","Car park","Hotel","Fire station","Park","Shopping mall","Stadium","Zoo","Prison","Terminal","Train station","Underground station","Post office","Library","Market","Hall","Café","Jail","Motel","Spa","Pub","Dormitory","Castle","Palace"];
  return (<Questions answers={words} category="Places" redirect="/places"/>)
}