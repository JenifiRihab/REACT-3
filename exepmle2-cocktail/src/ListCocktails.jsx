import { useEffect, useState } from "react";

    const ListCocktails = () => {
        const [allCocktails, setListCocktails] = useState([]);

        const fetchListCocktails = async () => {
            const allCocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ");
            const allCocktailsJs = await allCocktailsResponse.json();

            setListCocktails(allCocktailsJs.drinks);
        };

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