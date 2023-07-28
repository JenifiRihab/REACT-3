import { useEffect, useState } from "react";
import Header from "../component/Header";

const ListCocktailsPage = () => {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const cocktailsJs = await cocktailsResponse.json();

    setCocktails(cocktailsJs.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <Header />

      <div>
      <h1><strong> LIST COCKTAILS 🍹: </strong></h1>

        {cocktails.length === 0 && <p>Loading...</p>}

        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink}>
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListCocktailsPage;