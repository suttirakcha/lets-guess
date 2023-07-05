import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function GraphicDesignWords(){
  const words = ["Art","Colour","Saturation","Hue","Brightness","Contrast","Logo","Artwork","Typography","Drawing","Shape","Line","Script","Font","Hierarchy","Opacity","Kerning","Tracking","Alignment","Space","Resolution","Dot","Shade","Monochrome","Gradient","Serif","Ascender","Descender","Margin","Padding","Border","Radius","Bold","Calligraphy","Brush","Pen","Pencil","Ellipsis","Greyscale","Italic","Letterpress","Uppercase","Lowercase","Palette","Pattern","Pixel","Placeholder","Scale","Stroke","Shadow","Texture","Thumbnail","Vector","White Space","Skeuomorphism","Readability","Inch","Size"];
  return (<Questions answers={words} category="Words in Graphic Design" redirect="/words-in-graphic-design"/>)
}