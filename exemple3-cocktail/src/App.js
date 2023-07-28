import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./page/HomePage";
import ListCocktailsPage from "./page/ListCocktailsPage";
import RandomCocktailPage from "./page/RandomCocktailPage";

import "./App.css";
import SearchResultsPage from "./page/SearchResultsPage";
import ShowCocktailPage from "./page/ShowCocktailPage";
import ListCocktailsByCategory from "./page/ListCocktailsByCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<ListCocktailsPage />} />
        <Route path="/cocktails/show/:id" element={<ShowCocktailPage />} />
        <Route path="/cocktails/random" element={<RandomCocktailPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/cocktails/by-category/:categoryName" element={<ListCocktailsByCategory/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;