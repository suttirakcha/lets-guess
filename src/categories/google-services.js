import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function GoogleServices(){
  const words = ["Google Chrome","Google Map","Gmail","Google Drive","Google Docs","Google Sheets","YouTube","Google Earth","Google Play","Google Translate","Google Domain","Google Classroom","Google Workspace","Google Meet","Google Fonts","Google One","Play Protect","Google Wallet","Google Classroom","Gboard","Google Assistant","Android TV","Android","Waze","Pixel","Google Lens","Google Shopping","Chromebook","Chromecast"];
  return (<Questions answers={words} category="Google Services" redirect="/google-services"/>)
}