import { useEffect, useState } from "react";

    const RandomCocktail = () => {
        const [randomCocktail, setRandomCocktail] = useState(null);

        const fetchRandomCocktail = async () => {
            const randomCocktailsResponse = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/random.php` );
            const allRandomCocktailJs = await randomCocktailsResponse.json();

            setRandomCocktail(allRandomCocktailJs.drinks[0]);
        };


    // Utilisation du useEffect :
    // => pour permetera de charger qu'un nombre de fois limité du composant 
    // => pour effectuer une requête au chargement du composant 
    // => mettra à jour l'état "categories".
    // => useEffect donnera les nouvelles données.


        useEffect(() => {
            fetchRandomCocktail();
        }, []);

        return (
     // => On rentre des differents liens qui vient de l'api
            <div>
            <h1> <strong> RANDOM COCKTAIL 🍸: </strong></h1>

            {randomCocktail && (
                <div>
                    <p>{randomCocktail.strDrink}</p> 
                    <img src = {randomCocktail.strDrinkThumb} alt = {randomCocktail.strDrink} />
                </div>
            )}

{/* Le bouton à pour instruction via onClick de changer de cocktail aléatoirement à chaque fois qu'on clique.  */}

<br /><br />
            <button className = "btn" onClick = { fetchRandomCocktail }> Changer le cocktail</button>
<br /><br />
            </div>
        );
    };

export default RandomCocktail;