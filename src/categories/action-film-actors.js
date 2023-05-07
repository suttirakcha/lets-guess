import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function ActionFilmActors(){
  const words = ["Jason Statham","Daniel Craig","Jet Li","Nicolas Cage","Jackie Chan","Sylvester Stallone","Liam Neeson","Chuck Norris","Tom Cruise","Bruce Willis","Arnold Schwarzenegger","Dwayne Johnson","Harrison Ford","Vin Diesel","Michelle Yeoh","Angelina Jolie","Charlize Theron","Samuel L. Jackson","Donnie Yen","Will Smith","Chow Yun-Fat","Keanu Leeves","Idris Elba","Chris Hemsworth","Scarlett Johansson","Jean-Claude Van Damme","Tony Jaa","Kurt Russell","Michael Jai White","Mel Gibson","Willem Dafoe","Matt Damon","Tyrese Gibson","Robert Downey Jr.","Tom Holland","Michelle Rodriguez","Milla Jovovich","Bruce Lee","Dolph Lundgren","Steven Seagal","Mark Wahlberg","John Wayne","Wesley Snipes","Robin Shou","Ben Kingsley","Iko Uwais","Mike Tyson","Paul Walker","Zhang Ziyi","Jamie Foxx","Rick Yune","John Cena","Tommy Lee Jones","Brad Pitt","Maggie Q","Chris Pratt"];
  return (<Questions answers={words} category="Action Film Actors" redirect="/action-film-actors"/>)
}