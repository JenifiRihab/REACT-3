import { useEffect, useState } from "react";
import Header from "../component/Header";

const RandomCocktailPage = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  const fetchRandomCocktail = async () => {
    const randomCocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const randomCocktailJs = await randomCocktailResponse.json();

    setRandomCocktail(randomCocktailJs.drinks[0]);
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  return (
    <>
      <Header />
      <div>
      <h1> <strong> RANDOM COCKTAIL 🍹🍸: </strong></h1>

        {randomCocktail === null && <p>Loading...</p>}

        {randomCocktail !== null && (
          <div>
            <p>{randomCocktail.strDrink}</p>
            <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
          </div>
        )}
       
       
       <br /><br />
            <button className = "btn" onClick = { fetchRandomCocktail }> Changer le cocktail</button>
<br /><br />

      </div>
    </>
  );
};

export default RandomCocktailPage;