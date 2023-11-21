import React from "react";
import "../../App.scss";
import QuestionsZh from "../components/questions";

export default function FoodsZh(){
  const words = ["炸酱面","北京烤鸭","小笼包","辣子鸡","火锅","宫保鸡丁","面条","包子","麻婆豆腐","麻辣","馒头","扬州炒饭","炒饭","肉排","比萨","沙拉","炸鸡","寿司","海南鸡饭","烤鸡","米饭","咖喱","汤","酸辣汤","炒面","意大利面","豆腐"];
  return (<QuestionsZh answers={words} category="食物" redirect="/zh/foods"/>)
}