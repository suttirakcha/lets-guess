import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function MusicGenres(){
  const words = ["Pop","Rock","Poprock","R&B","Blues","Jazz","Classic","Reggae","Dance","K-Pop","Hip Hop","Latin","Funk","Ragtime","Rock and Roll","Country","Metal","Soul","EDM","New-age","Disco","Hard Rock","Folk","World music","Easy Listening","Bossanova","Swing","Gospel","C-pop","Punk","Neo soul","House music","Ska","Dubstep","Electronica","Alternative music","Indie","Heavy Metal","Techno"];
  return (<Questions answers={words} category="Music Genres" redirect="/music-genres"/>)
}