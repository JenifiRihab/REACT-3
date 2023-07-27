import { useEffect, useState } from "react";

    const RandomCocktail = () => {
        const [randomCocktail, setRandomCocktail] = useState(null);

        const fetchRandomCocktail = async () => {
            const randomCocktailsResponse = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/random.php` );
            const allRandomCocktailJs = await randomCocktailsResponse.json();

            setRandomCocktail(allRandomCocktailJs.drinks[0]);
        };

        useEffect(() => {
            fetchRandomCocktail();
        }, []);

        return (
            <div>
            <h1> <strong> RANDOM COCKTAIL 🍸: </strong></h1>

            {randomCocktail && (
                <div>
                    <p>{randomCocktail.strDrink}</p> 
                    <img src = {randomCocktail.strDrinkThumb} alt = {randomCocktail.strDrink} />
                </div>
            )}
<br /><br />
            <button className = "btn" onClick = { fetchRandomCocktail }> Changer le cocktail</button>
<br /><br />
            </div>
        );
    };

export default RandomCocktail;