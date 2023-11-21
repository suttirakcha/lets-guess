import React from "react";
import "../../App.scss";
import QuestionsZh from "../components/questions";

export default function DrinksZh(){
  const words = ["饮水","茶","咖啡","珍珠奶茶","卡布奇诺","美式咖啡","牛奶","奶昔","汽水","啤酒","葡萄酒","摩卡","浓缩咖啡","星冰乐","莫吉托","橙汁","果汁","苹果汁","马提尼酒","威士忌酒","鸡尾酒","冰沙","红茶菌","龙舌兰酒","柠檬汁","乌龙茶","烧酒","豆浆","杏仁奶","奶茶","柠檬茶","拿铁","酸奶","可乐","香槟酒","白酒","茉莉花茶","绿茶","伯爵茶","黑茶","白茶","玛奇朵","红茶","普洱茶"];
  return (<QuestionsZh answers={words} category="饮料" redirect="/zh/drinks"/>)
}