import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Weather(){
  const words = ["Sunny","Cloud","Storm","Rain","Strong wind","Hot weather","Snow","Cold weather","Typhoon","Fog","Dust","Thunderstorm","Hailstorm","Haze","Hurricane","Cyclone","Warm weather","Drizzle","Heavy rain","Clear","Sky","Monsoon","Tornado","Flood","Flash flood","Wind","Temperature","Degree Celsius","Degree Fahrenheit","Humid","Precipitation","Season","Depression","Summer","Winter","Autumn","Spring","Rainy season","Dry season","Drought","Air","Climate","Smoke","Partly cloudy","Mostly cloudy","Blizzard","Heat wave","Cold wave","Wildfire"];
  return (<Questions answers={words} category="Weather" redirect="/weather"/>)
}