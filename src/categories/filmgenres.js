import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function FilmGenres(){
  const words = ["Action","Adventure","Crime","Comedy","Drama","Melodrama","Fantasy","Horror","Mystery","Musical","Romance","Science fiction","Thriller","Western","Neo-noir","Animation","Romantic comedy","Live action","Dark fantasy","Splatter","Tragedy","Tragicomedy","Black comedy","Dramedy","Independent","War","Historical","Martial arts","Psychological thriller","Supernatural","Superhero","Slapstick","Satire","Screwball","Disaster","Documentary","Slice of life","Coming-of-age","Sport","Food","Narrative","Biography","Road","Military fiction","Spy","Parody","Heist","Found footage","Dystopia","Utopia","Cyberpunk","Steampunk","Space opera","Monster","Vampire","Zombie","Political","Medical","Urban fantasy","Wuxia","Tokusatsu","Gothic fiction","Kaiju","Xianxia","Buddy cop","Slasher","Vigilante","Swashbuckler","Police procedural"];
  return (<Questions answers={words} category="Film Genres" redirect="/film-genres"/>)
}