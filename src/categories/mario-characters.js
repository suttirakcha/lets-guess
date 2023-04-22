import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function MarioCharacters(){
  const words = ["Mario","Luigi","Yoshi","Toad","Bowser","Princess Peach","Princess Daisy","Waluigi","Wario","Bowser Jr.","Goomba","Toadette","Rosalina","Donkey Kong","Kamek","Bob-omb","Hammer Bro","Koopa Troopa","Dry Bones","Boo","Blooper","King Bob-omb","Petey Piranha","Luma","Pauline","Captain Toad","Birdo","Nabbit","Diddy Kong","Lakitu","Madame Broode","Spewart","Topper","Rango","Hariet","The Broodals","King Boo","Professor E. Gadd","Monty Mole","Pokey","Shy Guy","Thwomp","Whomp","Podoboo","Piranha Plant"];
  return (<Questions answers={words} category="Characters in Mario Games" redirect="/characters-in-mario-games"/>)
}