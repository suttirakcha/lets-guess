import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function PhoneBrands(){
  const words = ["Nokia","Huawei","Oppo","Samsung","Apple","Sony","Honor","Xiaomi","Acer","Asus","BlackBerry","Google","LG","Motorola","Lenovo","Vivo","Realme","Fujitsu","Panasonic","I-Mobile","Microsoft","HTC","Infinix","HP","NEC","Casio","ZTE","Hitachi","Sharp","AIS","DTAC","TRUE","Wellcom","Alcatel Mobile","Bittium","Smartisan","OnePlus","Meizu","Haier","Cherry Mobile","Brondi","Wiko","SHIFT","MobiWire","Kyocera"];
  return (<Questions answers={words} category="Phone Brands" redirect="/phone-brands"/>)
}