import { useEffect, useState } from "react";

    const ListCocktails = () => {
        const [allCocktails, setListCocktails] = useState([]);

        const fetchListCocktails = async () => {
            const allCocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ");
            const allCocktailsJs = await allCocktailsResponse.json();

            setListCocktails(allCocktailsJs.drinks);
        };


    // Utilisation du useEffect :
    // => pour permetera de charger qu'un nombre de fois limité du composant 
    // => pour effectuer une requête au chargement du composant 
    // => mettra à jour l'état "categories".
    // => useEffect donnera les nouvelles données.

        useEffect(() => {
            fetchListCocktails();
        }, []);

        return (
            <div>
                <h1><strong> LIST COCKTAILS 🍹: </strong></h1>

                <div className="list" >

                    {allCocktails.map((cocktail) => (
                        <div key = {cocktail.idDrink}>
                            <p>{cocktail.strDrink}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        );
    };

    export default ListCocktails;