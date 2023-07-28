import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const ListCocktailsPage = () => {
  const [allCocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    
    const allCocktailsResponse = await fetch( " https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
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
          <h2><strong> LIST OF COCKTAILS 🍹: </strong></h2>
          <div className="list" >
              {allCocktails.length === 0 && <p>Loading...</p>}
              {allCocktails.map((cocktail) => (
                <div className="category" key = {cocktail.idDrink}>
                  <p>{cocktail.strDrink}</p>
                  <Link 
                    to={"/cocktails/by-category/" + cocktail.strCategory}>
                      <br /> <button className="btn" >CATEGORIE : {cocktail.strCategory}</button>
                  </Link>

                  <Link 
                  to={"/cocktails/show/" + cocktail.idDrink}><br /> <button className="btn">VOIR LE COCKTAIL</button>
                  </Link>
                  
                  <br />
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </div>
                
              ))}
          </div>
        </div>
    </>
  );
};

export default ListCocktailsPage;