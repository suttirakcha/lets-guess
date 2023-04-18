import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function BlackPink(){
    const words = ["Jisoo", "Jennie", "Lisa", "Rosé", "The Album", "Born Pink", "Whistle", "Boombayah", "Playing with Fire", "Pink Venom", "Stay", "As If It's Your Last", "Shut Down", "Ready for Love", "Kill This Love", "Ddu-Du Ddu-Du", "How You Like That", "Ice Cream", "Lovesick Girls", "Sour Candy", "Chromatica", "Kiss and Make Up", "Blackpink House"];
    return (<Questions answers={words} category="Blackpink In Your Area" redirect="/blackpink-in-your-area"/>)
}