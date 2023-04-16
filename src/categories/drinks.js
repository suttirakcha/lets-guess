import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Drinks(){
    const words = ["Water", "Tea", "Coffee", "Bubble Tea", "Cappuchino", "Americano", "Milk", "Milkshake", "Soda", "Apfelschorle", "Beer", "Wine", "White Beer", "Thai Tea", "Mocha", "Espresso", "Frappuchino", "Mojito", "Orange Juice", "Juice", "Apple Juice", "Martini", "Whiskey", "Cocktail", "Spritz", "Smoothie", "Kombucha", "Punch", "Margarita", "Tequila", "Lemonade", "Oolong Tea", "Diabolo", "Almond Milk", "Soju", "Baekseju", "Sbiten", "Coconut Milk", "Soy Milk", "Brisk", "Hemp Milk", "Kopi", "Aojiru", "Malted Milk", "Milk Tea", "Latte", "Champagne"];
    return (<Questions answers={words} category="Drinks" redirect="/drinks"/>)
}