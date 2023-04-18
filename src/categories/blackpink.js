import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function BlackPink(){
    const words = ["Jisoo", "Jennie", "Lisa", "Rosé", "The Album", "Born Pink", "Whistle", "Boombayah", "Playing with Fire", "Pink Venom", "Stay", "As If It's Your Last", "Shut Down", "Ready for Love", "Kill This Love", "Ddu-Du Ddu-Du", "How You Like That", "Ice Cream", "Lovesick Girls", "Sour Candy", "Chromatica", "Kiss and Make Up", "Blackpink House", "Blackpink in Your Area", "Square Up", "Forever Young", "Really", "See U Later", "Square Two", "Square One", "Blackpink Arena Tour 2018", "In Your Area World Tour", "Don't Know What to Do", "Gone", "Solo", "Love To Hate Me", "YG Entertainment", "Teddy Park", "Bekuh Boom", "Blackpink Diaries", "Blackpink X Star Road", "24/365 with Blackpink", "Blackpink: Light Up the Sky", "Blackpink: The Movie", "Born Pink Memories"];
    return (<Questions answers={words} category="Blackpink" redirect="/blackpink"/>)
}