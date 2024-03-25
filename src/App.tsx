import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"
import MainPage from "./pages/main";
import ThemeProvider from "./providers/theme-provider";
import GamePage from "./pages/game-page";
import NotFound from "./pages/404";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/:lang" element={<MainPage />}/>
          <Route path="/:cate" element={<GamePage />}/>
          <Route path="/:lang/:cate" element={<GamePage />}/>
          <Route path="/404" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;