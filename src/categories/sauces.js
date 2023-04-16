import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Sauces(){
    const words = ["Ketchup", "Barbecue Sauce", "Hollandaise", "Mayonnaise", "Soy Sauce", "Fish Sauce", "Espagnole", "Sriracha Sauce", "Chilli Sauce", "Peanut Sauce", "Carbonara", "Wasabi", "Salsa", "Apple Sauce", "Béarnaise Sauce", "Zabaione", "Gremolata", "Bolognese Sauce", "White Sauce", "Cream Cheese", "XO Sauce", "Oyster Sauce", "Peanut Butter", "Teriyaki", "Gochujang", "Gravy", "Pesto", "Tahini Sauce"];
    return (<Questions answers={words} category="Sauces" redirect="/sauces"/>)
}