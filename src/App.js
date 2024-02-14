import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./languages/en/main";
import NotFound from "./404";
import Questions from "./languages/en/questions";

import MainPageTh from "./languages/th/main"
import QuestionsTh from "./languages/th/questions";

import MainPageLao from "./languages/lao/main";
import QuestionsLao from "./languages/lao/questions";

import MainPageZh from "./languages/zh/main";
import QuestionsZh from "./languages/zh/questions";

import MainPageDe from "./languages/de/main";
import QuestionsDe from "./languages/de/questions";
import "./App.scss"

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/404" element={<NotFound />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<Questions />}/>

        <Route path="/th" element={<MainPageTh />} />
        <Route path="/th/:id" element={<QuestionsTh />}/>

        <Route path="/lo" element={<MainPageLao />} />
        <Route path="/lo/:id" element={<QuestionsLao />}/>

        <Route path="/zh" element={<MainPageZh />} />
        <Route path="/zh/:id" element={<QuestionsZh />}/>

        <Route path="/de" element={<MainPageDe />}/> 
        <Route path="/de/:id" element={<QuestionsDe />}/>
      </Routes>
    </Router>
  )
}