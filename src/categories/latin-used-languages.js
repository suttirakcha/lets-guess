import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function LatinUsedLanguages(){
  const words = ["English","German","Spanish","French","Dutch","Portuguese","Croatian","Malay","Indonesian","Vietnamese","Turkish","Italian","Hungarian","Swedish","Danish","Finnish","Polish","Latin","Norwegian","Slovak","Swahili","Uzbek","Tagalog","Filipino","Montenegrin","Albanian","Bosnian","Serbian","Afrikaans","Basque","Czech","Wales","Irish","Icelandic","Javanese","Cebuano","Somali"];
  return (<Questions answers={words} category="Latin-used Languages" redirect="/latin-used-languages"/>)
}