import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function MobileGames(){
  const words = ["Candy Crush Saga","Plants vs. Zombies","Plants vs. Zombies 2","ROV (Arena of Valor)","Among Us","Pokémon GO","PUBG Mobile", "LOL (League of Legends)","Call of Duty: Mobile","Clash of Clans", "Lords Mobile", "Homescapes","Township","Angry Birds","Angry Birds 2","Fishdom","Genshin Impact", "Monument Valley","Hero Wars","FIFA Mobile","Clash Royale","Candy Crush Soda Saga","Candy Crush Friends Saga","Candy Crush Jelly Saga","League of Legends: Wild Rift","Raid: Shadow Legends","Subway Surfers","Assassin's Creed","Super Mario Run","Fortnite","Mobile Legends: Bang Bang","Legends of Runeterra","Shadow Fight","Smash Hit","Shadow Fight 2","Shadow Fight 3","AFK Arena","Brawl Stars","Empires & Puzzles: Match-3 RPG","Gemstone Legends: RPG games","Lily's Garden","Woodoku","Golf Rival","Fruit Ninja","Fruit Ninja 2","Piano Tiles","Piano Tiles 2","Minion Rush","Crossy Road","Temple Run","Temple Run 2","UNO","Hill Climb Racing"];
  return (<Questions answers={words} category="Mobile Games" redirect="/mobile-games"/>)
}