import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function AlbertPosis(){
  const words = ["Everlasting","Maybe We Could Be A Thing","Rest Assured","Serendipity","Higher","Everyday Feels Like Sunday","Been You","For All Time","Truth","Unaware","Back to You","When We Were Us","Hold On Tight","One Chance","You Ain't Gotta","It's You","Strawberry Soju","Drive","Good Woman","New Beginning","Different","Enough","For You","Cruel","The Promise","Queen for the Night","Stoplight","Sprung","The Author","Stupid Lies","Overthinking","Valentine","Lost in Love","Home","Ricochet","Isn't It Enough"];
  return (<Questions answers={words} category="Albert Posis's Songs" redirect="/albert-posis-songs"/>)
}