import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function MusicalInstruments(){
  const words = ["Piano","Guitar","Drums","Electric Drums","Ukulele","Violin","Cello","Keyboard","Electone","Bass","Viola","Double Bass","Harp","Banjo","Mandolin","Lute","Lyre","Drum Set","Timpani Drum","Bass Drum","Snare Drum","Tambourine","Cymbal","Bell Lyra","Saxophone","Xylophone","Vibraphone","Line Bell","Triangle","Castanet","Maracas","Cabasa","Marimba","Cowbell","Bell","Chimes","Organ","Melodion","Accordion","Harpsichord","Clavichord","Mouth Organ","Flute","Oboe","Clarinet","Bassoon","Recorder","Piccolo","Trombone","Trumpet","Tuba","Flugelhorn","French Horn","Cornet","Sousaphone","Euphonium"];
  return (<Questions answers={words} category="Musical Instruments" redirect="/musical-instruments"/>)
}