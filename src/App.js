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
import Education from "./categories/education";
import Driving from "./categories/driving";
import ActionFilmActors from "./categories/action-film-actors";
import LatinUsedLanguages from "./categories/latin-used-languages";
import CosmeticsBrands from "./categories/cosmetics-brands";
import SocialMedia from "./categories/social-media";
import Sports from "./categories/sports";
import MusicGenres from "./categories/music-genres";
import PuzzleGames from "./categories/puzzle-games";
import Clothing from "./categories/clothing";
import GoogleServices from "./categories/google-services";
import CommonNames from "./categories/common-names";
import GraphicDesignWords from "./categories/graphic-design-words";
import NotFound from "./404";

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
import LatinUsedLanguagesTh from "./th/categories/latin-used-languages";
import FruitsTh from "./th/categories/fruits";
import EducationTh from "./th/categories/education";
import TravelToForeignCountries from "./th/categories/travel-to-foreign-countries";
import HouseholdItemsTh from "./th/categories/household-items";
import CocktailSongs from "./th/categories/cocktail-songs";
import WeatherTh from "./th/categories/weather";
import SeasoningTh from "./th/categories/seasoning";
import OccupationsTh from "./th/categories/occupations";
import BowkylionSongs from "./th/categories/bowkylion-songs";
import ClothingTh from "./th/categories/clothing";
import HolidaysTh from "./th/categories/holidays";
import EnglishLoanwords from "./th/categories/english-loanwords";
import ThaiComedyFilms from "./th/categories/thai-comedy-films";

// import MainPageZh from "./zh/main";
// import AnimalsZh from "./zh/categories/animals";
export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />}/>
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
        <Route path="/words-in-marketing" element={<Marketing />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/mobile-games" element={<MobileGames />} />
        <Route path="/blackpink" element={<BlackPink />} />
        <Route path="/disney-films-2010s" element={<DisneyFilms2010s />} />
        <Route path="/musical-instruments" element={<MusicalInstruments />} />
        <Route path="/fashion-brands" element={<FashionBrands />} />
        <Route path="/albert-posis-songs" element={<AlbertPosis />} />
        <Route path="/girls-generation" element={<GirlsGeneration />} />
        <Route path="/despicable-me" element={<DespicableMe />} />
        <Route path="/words-in-airline" element={<Airline />} />
        <Route path="/restaurant-chains" element={<RestaurantChains />} />
        <Route path="/phone-brands" element={<PhoneBrands />} />
        <Route path="/education" element={<Education />} />
        <Route path="/driving" element={<Driving />} />
        <Route path="/action-film-actors" element={<ActionFilmActors />} />
        <Route path="/latin-used-languages" element={<LatinUsedLanguages />} />
        <Route path="/cosmetics-brands" element={<CosmeticsBrands />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/music-genres" element={<MusicGenres />} />
        <Route path="/puzzle-games" element={<PuzzleGames />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/google-services" element={<GoogleServices />} />
        <Route path="/common-names" element={<CommonNames />} />
        <Route path="/words-in-graphic-design" element={<GraphicDesignWords />} />

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
        <Route path="/th/latin-used-languages" element={<LatinUsedLanguagesTh />} />
        <Route path="/th/fruits" element={<FruitsTh />} />
        <Route path="/th/education" element={<EducationTh />} />
        <Route path="/th/travel-to-foreign-countries" element={<TravelToForeignCountries />} />
        <Route path="/th/household-items" element={<HouseholdItemsTh />} />
        <Route path="/th/cocktail-songs" element={<CocktailSongs />} />
        <Route path="/th/weather" element={<WeatherTh />} />
        <Route path="/th/seasoning" element={<SeasoningTh />} />
        <Route path="/th/occupations" element={<OccupationsTh />} />
        <Route path="/th/bowkylion-songs" element={<BowkylionSongs />} />
        <Route path="/th/clothing" element={<ClothingTh />} />
        <Route path="/th/holidays" element={<HolidaysTh />} />
        <Route path="/th/english-loanwords" element={<EnglishLoanwords />} />
        <Route path="/th/thai-comedy-films" element={<ThaiComedyFilms />} />

        {/* Chinese */}
        {/* <Route path="/zh" element={<MainPageZh />} />
        <Route path="/zh/animals" element={<AnimalsZh />} /> */}
      </Routes>
    </Router>
  )
}