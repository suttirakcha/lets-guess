import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function RestaurantChains(){
  const words = ["McDonald's","Swensen's","KFC","Starbucks","Bonchon Chicken","Pizza Hut","Sizzler","Auntie Anne's","Burger King","Dairy Queen","Domino's Pizza","Dunkin' Donuts","Subway","The Pizza Company","MK Restaurant","A&W Restaurants","Din Tai Fung","Délifrance","Texas Chicken","Krispy Kreme","Jollibee","Hard Rock Cafe","MOS Burger","Olive Garden","LongHorn Steakhouse","The Cheesecake Factory","Taco Bell","IHOP","Arby's","Wendy's","Denny's"];
  return (<Questions answers={words} category="Restaurant Chains" redirect="/restaurant-chains"/>)
}