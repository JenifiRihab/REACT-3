import { useEffect, useState } from "react";
import Header from "../component/Header";

const ListCocktailsPage = () => {
  const [allCocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    
    const allCocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const allCocktailsJs = await allCocktailsResponse.json();

    setCocktails(allCocktailsJs.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <Header />

      <div>
        <h2><strong> LIST COCKTAILS 🍹: </strong></h2>
        <div className="list" >

            {allCocktails.length === 0 && <p>Loading...</p>}
            {allCocktails.map((cocktail) => (

              <div key = {cocktail.idDrink}>
                <p>{cocktail.strDrink}</p>
              </div>
              
            ))}
        </div>
      </div>
    </>
  );
};

export default ListCocktailsPage;