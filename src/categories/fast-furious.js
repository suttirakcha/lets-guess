import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function FastFurious(){
  const words = ["Dominic Toretto","Brian O'Conner","Letty Ortiz","Mia Toretto","Roman Pearce","Tej Parker","Sean Boswell","Han Lue","Gisele Yashar","Luke Hobbs","Deckard Shaw","Owen Shaw","Ramsey","Louis Kiet","Jakob Toretto","Vince","Leon","Jesse","Hector","Jack Toretto","Harry","Suki","Jimmy","Slap Jack","Orange Julius","Twinkle","Neela Ezar","Earl","Mr. Nobody","Reiko","Cara Martha","Rico Santos","Tego Leo","Safar","Mando","Magdalene Shaw","Margarita / Madam M","Professor Andreiko","Jonah Hobbs","Sefina Hobbs","Elle","Leysa Martha","Johnny Tran","Lance Nguyen","Sgt. Tanner","Kenny Linder","Carter Verone","Enrique","Roberto","Takashi","Morimoto","Kamata","Clay","Arturo Braga","Fenix Calderon","Ramon Campos","Hernan Reyes","Zizi","Agent Riley Hicks","Vegh","Klaus","Jah","Denlinger","Adolfson","Oakes","Ivory","Firuz","Mose Jakande","Kara","Cipher","Conner Rhodes","Brixton Lore","Otto","Hattie Shaw","Agent Sheppard","Mateo Hobbs","Elena Neves","Korpi","David Park","Agent Penning","Agent Sophie Trinh","Agent Michael Stasiak","Monica Fuentes","Agent Markham","Fusco"];
  return (<Questions answers={words} category="Fast and Furious Characters" redirect="/fast-and-furious-characters"/>)
}