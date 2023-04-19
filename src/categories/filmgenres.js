import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function FilmGenres(){
    const words = ["Action", "Adventure", "Crime", "Comedy", "Drama", "Melodrama", "Fantasy", "Horror", "Mystery", "Musical", "Romance", "Science Fiction", "Thriller", "Western", "Neo-noir", "Animation", "Romantic Comedy", "Live Action", "Dark Fantasy", "Splatter", "Tragedy", "Tragicomedy", "Black Comedy", "Dramedy", "Independent", "War", "Historical", "Martial Arts", "Psychological Thriller", "Supernatural", "Superhero", "Slapstick", "Satire", "Screwball", "Disaster", "Documentary", "Slice of Life", "Coming-of-age", "Sport", "Food", "Narrative", "Biography", "Road", "Military Fiction", "Spy", "Parody", "Heist", "Found Footage", "Dystopia", "Utopia", "Cyberpunk", "Steampunk", "Space Opera", "Monster", "Vampire", "Zombie", "Political", "Medical", "Urban Fantasy", "Wuxia", "Tokusatsu", "Gothic Fiction", "Kaiju", "Xianxia"];
    return (<Questions answers={words} category="Film Genres" redirect="/film-genres"/>)
}