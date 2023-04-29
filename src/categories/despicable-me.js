import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function DespicableMe(){
  const words = ["Minions","Kevin","Stuart","Gru","Vector","Dr. Nefario","Miss Hattie","Margo","Mr. Perkins","Scarlet Overkill","Lucy Wilde","Eduardo Pérez / El Macho","Agnes","Floyd Eaglesan","Professor Flux","Balthazar Bratt","Silas Ramsbottom","Mel","Clive the robot","Niko","Elizabeth II","Herb Overkill","Walter Nelson","Madge Nelson","Fabrice","Tina Nelson","Bob","Otto","Wild Knuckles","Lipstick Taser","Master Chow","Belle Bottom","Jorge","Lance","Phil","Norbit","Dave","Tom","Carl","Mark","Jerry","Edith","Banana","Shrink Ray","Home Makeover","Orientation Day","Puppy","Panic in the Mailroom","Training Wheels","Binky Nelson Unpacified","Competition","Cro Minion","Mower Minions","The Secret Life of Kyle","Yellow is the New Black","Santa's Little Helpers","Minion Scouts","Minions & Monsters","Post Modern Minions","Fart Gun","Squid Launcher","Cookie Robots","Agnes's Unicorn","Freeze Ray","Zodiac Stone"];
  return (<Questions answers={words} category="Despicable Me" redirect="/despicable-me"/>)
}