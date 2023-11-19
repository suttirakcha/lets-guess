import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./main";
import NotFound from "./404";
import Questions from "./components/questions";

import MainPageTh from "./th/main-new"
import QuestionsTh from "./th/components/questions";

import MainPageLao from "./lao/main";
import QuestionsLao from "./lao/components/questions";

import MainPageZh from "./zh/main";
import QuestionsZh from "./zh/components/questions";

import MainPageDe from "./de/main";
import QuestionsDe from "./de/components/questions";
import "./App-new.scss"

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

        <Route path="/zh" element={<MainPageZh />} />
        <Route path="/zh/:id" element={<QuestionsZh />}/>

        {/* German*/}
        {/* <Route path="/de" element={<MainPageDe />}/> 
        <Route path="/de/:id" element={<QuestionsDe />}/> */}
      </Routes>
    </Router>
  )
}