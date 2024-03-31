import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"
import MainPage from "./mainPages/main";
import ThemeProvider from "./providers/theme-provider";
import GamePage from "./mainPages/game-page";
import NotFound from "./mainPages/404";
import Redirect from "./mainPages/redirect";

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