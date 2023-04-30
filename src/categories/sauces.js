import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Sauces(){
  const words = ["Ketchup","Barbecue Sauce","Hollandaise","Mayonnaise","Soy Sauce","Fish Sauce","Espagnole","Sriracha Sauce","Chilli Sauce","Peanut Sauce","Carbonara","Wasabi","Salsa","Apple Sauce","Béarnaise Sauce","Zabaione","Gremolata","Bolognese Sauce","White Sauce","Cream Cheese","XO Sauce","Oyster Sauce","Peanut Butter","Teriyaki","Gochujang","Gravy","Pesto","Tahini Sauce","Tzatziki","Ajika","Andalouse","Béchamel","Garlic Sauce","Mustard","Thousand Island","Sour Cream","Honey Mustard","Ranch Sauce","Worcestershire Sauce","Chimichurri","Tartar Sauce","Bordelaise Sauce","Gremolata","Romesco","Harissa","Remoulade","Peppercorn Sauce","Aioli","Mornay Sauce","Syrup","Chutney","Tamarind Sauce"];
  return (<Questions answers={words} category="Sauces" redirect="/sauces"/>)
}