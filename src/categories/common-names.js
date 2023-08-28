import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function CommonNames(){
  const words = ["Jonathan","Jennifer","Henry","Anna","Emma","Michael","Mark","Peter","Alexander","Susan","Jessica","Chloé","James","Robert","David","William","Thomas","Mary","John","Lisa","Sarah","Tommy","Andrew","Christopher","Matthew","Daniel","Nancy","Nicolas","Ashley","Michelle","George","Kevin","Rebecca","Paul","Laura","Amy","Cynthia","Christine","Larry","Janet","Olivia","Benjamin","Samuel","Eric","Dennis","Ruth","Hannah","Arthur","Dylan","Billy","Bruce","Isabella","Grace","Julia","Abigail","Gloria","Teresa","Sean","Terry","Jerry","Austin","Vincent","Natalie","Russell","Philip","Gabriel","Joe","Kathryn","Megan","Jacqueline","Martha","Adam","Nathan","Jack","Frank","Patrick","Patricia","Stephen","Edward","Jacob","Margaret","Joseph","Richard","Barbara","Elizabeth","Karen","Helen","Brian","Steven","Albert","Juan","Alice","Evelyn","Kyle","Oliver","Nicole","Raymond","Diana","Diane","Joyce","Ethan","Walter","Andrea","Lauren","Kelly","Harold","Sophia","Emily","Douglas","Roger","Ann","Amber","Grace","Eugene","Ralph"];
  return (<Questions answers={words} category="Common Names" redirect="/common-names"/>)
}