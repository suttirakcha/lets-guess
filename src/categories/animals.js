import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Animals(){
  const words = ["Dog","Cat","Bird","Frog","Snake","Tiger","Lion","Mosquito","Ostrich","Panther","Giraffe","Fly","Spider","Scorpion","Jellyfish","Fish","Whale","Dugong","Shark","Python","Pigeon","Sheep","Goat","Cow","Buffalo","Rhinoceros","Water Monitor","Alligator","Crocodile","Swan","Goose","Crow","Toad","Lizard","Mouse","Rat","Gecko","Cockroach","Salamander","Rabbit","Owl","Turtle","Seal","Seahorse","Sea turtle","Seagull","Snapping turtle","Centipede","Bee","Hornet","Wasp","Squirrel","Elephant","Crab","Shrimp","Crayfish","Horse","Donkey","Bull","Field rat","Cricket","Firefly","Bullfrog","Iguana","Jaguar","Cheetah","Fox","Water strider","Kangaroo","Squid","Monkey","Fruit fly","Cicada","Eagle","Butterfly","Beetle","Bear","Polar Bear","Bat","Pig","Chicken","Hen","Oyster","Grasshopper","Deer","Dragonfly","Worm","Ant","Snail","Shell","Penguin","Ladybug","Cobra","Earthworm","Camel","Starfish","Ox","Octopus","Otter","Skunk","Raccoon"];
  return (<Questions answers={words} category="Animals" redirect="/animals"/>)
}