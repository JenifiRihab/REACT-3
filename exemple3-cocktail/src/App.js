import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./page/HomePage";
import ListCocktailsPage from "./page/ListCocktailsPage";
import RandomCocktailPage from "./page/RandomCocktailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<ListCocktailsPage />} />
        <Route path="/cocktails/random" element={<RandomCocktailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;