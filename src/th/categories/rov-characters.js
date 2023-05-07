import React from "react";
import "../../App.scss";
import QuestionsTh from "../components/questions";

export default function RovCharactersTh(){
  const words = ["Zanis","Valhein","Tel'Annas","Yorn","Laville","Elsu","Aya","Annette","Nakroth","Yan","Violet","Capheny","Quillen","WuKong","Natalya","Veera","Diao Chan","Ata","Thorne","Volkath","Veres","Krixi","Butterfly","Astrid","Cresht","Florentino","Zephys","Murad","Mina","Gildur","Aleister","Wisp","Mortos","Lorion","Tulen","Lauriel","Arduin","TeeMee","Y'bneth","Rourke","Skud","Thane","Mganga","Raz","Helen","Lu Bu","Enzo","Lindis","Taara","Jinna","Arum","Superman","Wonder Woman","Airi","Slimz","Yena","Preyta","Batman","Kil'Groth","Eland'orr","Ryoma","Fennik","Toro","Moren","Omega","Celica","Amily","Zill","Xeniel","Maloch","Errol","Marja","Kriknak","Lumburr","Alice","Max","Ilumia","Riktor","Hayate","Kahlii","Grakk","The Joker","Zip","Azzen'Ka","Ormarr","Ignis","Chaugnar","Wiro","Paine","Krizzix","Rouie","Roxie","Zuka","Baldum","Omen","The Flash","Liliana","Zata","D'Arcy","Ishar","Sephera","Qi","Dirak","Keera","Dextra","Sinestrea","Aoi","Allain","Iggy","Bright","Bonnie","Tachi","Yue","Teeri","Bijan"];
  return (<QuestionsTh answers={words} category="ตัวละครในเกม ROV" redirect="/th/characters-in-rov"/>)
}