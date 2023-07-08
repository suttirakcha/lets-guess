import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Sports(){
  const words = ["Football","Handball","Volleyball","Baseball","Basketball","Rugby","Jogging","Skiing","Skating","Ice skating","E-Sport","Tennis","Badminton","Cricket","Boxing","Golf","Archery","Racquetball","Gymnastics","Judo","Shooting","Cycling","Climbing","Bowling","Scootering","Skateboarding","Surfing","Jujitsu","Sumo","Karate","Vovinam","Ice hockey","Marathon","Sailing","Yachting","Kayaking","Cheerleading","Diving","Snooker","Taekwondo","Weightlifting","Racing","Water Polo","Triathlon","Softball"];
  return (<Questions answers={words} category="Sports" redirect="/sports"/>)
}