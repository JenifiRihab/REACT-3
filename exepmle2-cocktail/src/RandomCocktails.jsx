import { useEffect, useState } from "react";

// => un cocktail random, peux simplement faire appel a lui et a l'afficher comme vu pour la liste des cocktails//

    const RandomCocktail = () => {

// => le useState(null) peut aider pour un Loading

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
     // => affiche un cocktail aléatoire au chargement du composant 
            <div>
            <h1> <strong> RANDOM COCKTAIL 🍸: </strong></h1>

            {randomCocktail && (
                <div>
                    <p>{randomCocktail.strDrink}</p> 
                    <img src = {randomCocktail.strDrinkThumb} alt = {randomCocktail.strDrink} />
                </div>
            )}

{/* Le bouton à pour instruction via onClick de changer de cocktail aléatoire affiché à chaque fois qu'on clique.  */}

<br /><br />
            <button className = "btn" onClick = { fetchRandomCocktail }> Changer le cocktail</button>
<br /><br />
            </div>
        );
    };

export default RandomCocktail;