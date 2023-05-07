import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function ActionFilmActors(){
  const words = ["Jason Statham","Daniel Craig","Jet Li","Nicolas Cage","Jackie Chan","Sylvester Stallone","Liam Neeson","Chuck Norris","Tom Cruise","Bruce Willis","Arnold Schwarzenegger","Dwayne Johnson","Harrison Ford","Vin Diesel","Michelle Yeoh","Angelina Jolie","Charlize Theron","Samuel L. Jackson","Donnie Yen","Will Smith","Chow Yun-Fat","Keanu Leeves","Idris Elba","Chris Hemsworth","Scarlett Johansson","Jean-Claude Van Damme","Tony Jaa","Kurt Russell","Michael Jai White","Mel Gibson","Willem Dafoe","Matt Damon","Tyrese Gibson"];
  return (<Questions answers={words} category="Action Film Actors" redirect="/action-films-actors"/>)
}