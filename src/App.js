import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./main";
import NotFound from "./404";
import Questions from "./components/questions";

import MainPageTh from "./th/main"
import QuestionsTh from "./th/components/questions";

import MainPageLao from "./lao/main";
import QuestionsLao from "./lao/components/questions";

import MainPageZh from "./zh/main";
import AnimalsZh from "./zh/categories/animals";
import FoodsZh from "./zh/categories/foods";
import DrinksZh from "./zh/categories/drinks";
import CountriesZh from "./zh/categories/countries";

import MainPageDe from "./de/main";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<Questions />}/>

        <Route path="/th" element={<MainPageTh />} />
        <Route path="/th/:id" element={<QuestionsTh />}/>

        <Route path="/lo" element={<MainPageLao />} />
        <Route path="/lo/:id" element={<QuestionsLao />}/>

        {/* Chinese */}
        <Route path="/zh" element={<MainPageZh />} />
        <Route path="/zh/animals" element={<AnimalsZh />} />
        <Route path="/zh/foods" element={<FoodsZh />} />
        <Route path="/zh/drinks" element={<DrinksZh />} />
        <Route path="/zh/countries-in-the-world" element={<CountriesZh />}/>

        {/* German
        <Route path="/de" element={<MainPageDe />}/> */}
      </Routes>
    </Router>
  )
}