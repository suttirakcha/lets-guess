import React from "react";
import "../../App.scss";
import QuestionsZh from "../components/questions";

export default function ChineseFoodZh(){
  const words = ["炸酱面","北京烤鸭","小笼包","辣子鸡","火锅","宫保鸡丁","面条","包子","麻婆豆腐","麻辣"];
  return (<QuestionsZh answers={words} category="中餐" redirect="/zh/chinese-food"/>)
}