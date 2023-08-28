import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function EnglishActors(){
  const words = ["Daniel Craig","Jason Statham","Idris Elba","Daniel Radcliffe","Tom Felton","Matthew Lewis","Rowan Atkinson","Rupert Grint","Ralph Fiennes","Tom Hiddleston","Michael Caine","Ian McKellen","Patrick Stewart","James McAvoy","Roger Moore","Kate Winslet","Alice Eve","Tim Curry","Nicholas Hoult","Tom Holland","Emma Watson","Lily James","Helena Bonham Carter","Emily Brunt","Bonnie Wright","Alan Rickman","Louis Partridge","Freddie Highmore","Sean Bean","Tom Hardy","Rachel Weisz","Emilia Clarke","Emma Thompson","Sam Hazeldine","Colin Firth","Ben Kingsley","Christian Bale","John Cleese","Maggie Smith","Daisy Ridley","Jonah Hauer-King","Alfred Molina","Gemma Arterton","Kaya Scodelario","Aml Ameen","Thomas Brodie-Sangster","Will Poulter","Terence Stamp","Florence Pugh","Sophie Turner","Rebecca Hall","Rosamund Pike","Aaron Johnson","Kristin Scott Thomas","Kit Harington","Jennifer Ellison"];
  return (<Questions answers={words} category="English Actors" redirect="/english-actors"/>)
}