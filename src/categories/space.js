import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Space(){
  const words = ["Sun","Moon","Star","Planet","Solar system","Black hole","Universe","Mercury","Venus","Mars","Jupiter","Saturn","Neptune","Uranus","Pluto","Magnetic Field","Solar Storm","Meteor","Comet","Astronaut","Space junk","Spaceship","Rocket","Satellite","Space shuttle","Big Bang","Earth","Telescope","Asteroid","Milky Way","Lunar eclipse","Solar eclipse","Orbet","Radar","Space station","UFO","Alien","Shooting star"];
  return (<Questions answers={words} category="Space" redirect="/space"/>)
}