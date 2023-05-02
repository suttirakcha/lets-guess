import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./main";
import Countries from "./categories/countries"
import Foods from "./categories/foods";
import Drinks from "./categories/drinks";
import Desserts from "./categories/desserts";
import FilmGenres from "./categories/filmgenres";
import Landmarks from "./categories/landmarks";
import MarioCharacters from "./categories/mario-characters";
import FastFurious from "./categories/fast-furious";
import CapitalCities from "./categories/capital-cities";
import HarryPotter from "./categories/harry-potter";
import Sauces from "./categories/sauces";
import Marketing from "./categories/marketing-words";
import Animals from "./categories/animals";
import MobileGames from "./categories/mobile-games";
import BlackPink from "./categories/blackpink";
import DisneyFilms2010s from "./categories/disney-films-2010s";
import MusicalInstruments from "./categories/musical-instruments";
import FashionBrands from "./categories/fashion-brands";
import AlbertPosis from "./categories/albert-posis";
import GirlsGeneration from "./categories/girls-generation";
import DespicableMe from "./categories/despicable-me";
import Airline from "./categories/airline-words";
import RestaurantChains from "./categories/restaurant-chains";
import PhoneBrands from "./categories/phone-brands";

import MainPageTh from "./th/main"
import CountriesTh from "./th/categories/countries";
import TattooColour from "./th/categories/tattoocolour";
import FoodsTh from "./th/categories/foods";
import ProvincesTh from "./th/categories/provinces";
import DrinksTh from "./th/categories/drinks";
import RovCharactersTh from "./th/categories/rov-characters";
import AnimalsTh from "./th/categories/animals";
import DessertsTh from "./th/categories/desserts";
import ThaiDessertsTh from "./th/categories/thai-desserts";
import MusicalInstrumentsTh from "./th/categories/musical-instruments";
import ThaiSingersTh from "./th/categories/thai-singers";
import PlacesInBangkok from "./th/categories/bangkok-places";
import ETCSongsTh from "./th/categories/etc-songs";
import KitchenwareTh from "./th/categories/kitchenware";
import BaliSanskritLoanwords from "./th/categories/bali-sanskrit-loanwords";

export default function App(){
  return (
    <Router>
      <Routes>
        {/* English */}
        <Route path="/" element={<MainPage />} />
        <Route path="/countries-in-the-world" element={<Countries />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/sauces" element={<Sauces/>} />
        <Route path="/film-genres" element={<FilmGenres />} />
        <Route path="/landmarks" element={<Landmarks />} />
        <Route path="/characters-in-mario-games" element={<MarioCharacters />} />
        <Route path="/fast-and-furious-characters" element={<FastFurious />} />
        <Route path="/capital-cities" element={<CapitalCities />} />
        <Route path="/harry-potter-characters" element={<HarryPotter />} />
        <Route path="/marketing-words" element={<Marketing />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/mobile-games" element={<MobileGames />} />
        <Route path="/blackpink" element={<BlackPink />} />
        <Route path="/disney-films-2010s" element={<DisneyFilms2010s />} />
        <Route path="/musical-instruments" element={<MusicalInstruments />} />
        <Route path="/fashion-brands" element={<FashionBrands />} />
        <Route path="/albert-posis-songs" element={<AlbertPosis />} />
        <Route path="/girls-generation" element={<GirlsGeneration />} />
        <Route path="/despicable-me" element={<DespicableMe />} />
        <Route path="/airline-words" element={<Airline />} />
        <Route path="/restaurant-chains" element={<RestaurantChains />} />
        <Route path="/phone-brands" element={<PhoneBrands />} />

        {/* Thai */}
        <Route path="/th" element={<MainPageTh />} />
        <Route path="/th/countries-in-the-world" element={<CountriesTh />} />
        <Route path="/th/tattoo-colour" element={<TattooColour />} />
        <Route path="/th/foods" element={<FoodsTh />} />
        <Route path="/th/provinces-in-thailand" element={<ProvincesTh />} />
        <Route path="/th/drinks" element={<DrinksTh />} />
        <Route path="/th/characters-in-rov" element={<RovCharactersTh />} />
        <Route path="/th/animals" element={<AnimalsTh />} />
        <Route path="/th/desserts" element={<DessertsTh />} />
        <Route path="/th/thai-desserts" element={<ThaiDessertsTh />} />
        <Route path="/th/musical-instruments" element={<MusicalInstrumentsTh />} />
        <Route path="/th/thai-singers" element={<ThaiSingersTh />} />
        <Route path="/th/places-in-bangkok" element={<PlacesInBangkok />} />
        <Route path="/th/etc-songs" element={<ETCSongsTh />} />
        <Route path="/th/kitchenware" element={<KitchenwareTh />} />
        <Route path="/th/bali-sanskrit-loanwords" element={<BaliSanskritLoanwords />} />
      </Routes>
    </Router>
  )
}