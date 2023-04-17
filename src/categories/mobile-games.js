import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function MobileGames(){
    const words = ["Candy Crush Saga", "Plants vs. Zombies", "Plants vs. Zombies 2" ,"ROV (Arena of Valor)", "Among Us", "Pokémon GO", "PUBG Mobile", "LOL (League of Legends)", "Call of Duty: Mobile", "Clash of Clans", "Lords Mobile", "Homescapes", "Township", "Angry Birds", "Angry Birds 2", "Fishdom", "Genshin Impact", "Monument Valley", "Hero Wars", "FIFA Mobile", "Clash Royale", "Candy Crush Soda Saga", "Candy Crush Friends Saga", "Candy Crush Jelly Saga", "League of Legends: Wild Rift", "Raid: Shadow Legends", "Subway Surfers", "Assassin's Creed", "Super Mario Run", "Fortnite", "Mobile Legends: Bang Bang", "Legends of Runeterra"];
    return (<Questions answers={words} category="Mobile Games" redirect="/mobile-games"/>)
}