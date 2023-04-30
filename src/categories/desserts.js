import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Desserts(){
  const words = ["Apple Pie","Croissant","Doughnut","Ice Cream","Chocolate","Apfelstrudel","Cheese","Macaron","Churros","Fondue","Sundae","Mousse","Tiramisu","Cupcake","Mochi","Banoffee","Daifuku","Cake","White Chocolate","Cookies","Pie","Yoghurt","Brownie","Cheesecake","Éclair","Tart","Caramel","Lemon Curd","Meringue","Custard","Lamingtons","Pudding","Crème Brûlée","Waffle","Crepe","Muffin","Fudge","Parfait","Marshmellow","Bingsu","Panna Cotta","Candy","Candy Bar","Toffee","Cookie and Cream","Biscuit","Stollen","Egg Tart","Fruit Salad","Chiffon Cake","Mille-feuille","Madeleine","Tarte Tatin","Soufflé","Chocolate Mousse","Carrot Cake","Banana Split"];
  return (<Questions answers={words} category="Desserts" redirect="/desserts"/>)
}