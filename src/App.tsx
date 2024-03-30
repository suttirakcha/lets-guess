import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"
import MainPage from "./main/main";
import ThemeProvider from "./providers/theme-provider";
import GamePage from "./main/game-page";
import NotFound from "./main/404";
import Redirect from "./main/redirect";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Redirect />}/>
          <Route path="/:lang" element={<MainPage />}/>
          <Route path="/:lang/:cate" element={<GamePage />}/>
          <Route path="/404" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;