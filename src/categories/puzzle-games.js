import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function PuzzleGames(){
  const words = ["Bejeweled","Mahjong","2048","Sudoku","Cut the Rope","Solitaire","Minesweeper","Candy Crush Saga","Jigsaw","Labyrinth","Wordle","Maze","Bubble Shooter","Find the Difference","Tetris","Pac-Man","Breakout","Threes","Monument Valley","Crossword","Fishdom","Word Search","Portal","The Witness","Railbound","Nonogram","Unblock Me"];
  return (<Questions answers={words} category="Puzzle Games" redirect="/puzzle-games"/>)
}