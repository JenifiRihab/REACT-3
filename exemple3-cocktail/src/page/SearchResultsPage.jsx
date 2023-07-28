import { useEffect, useState } from "react";
import Header from "../component/Header";
import { useSearchParams } from "react-router-dom";

    const SearchResultsPage = () => {

        const [cocktails, setSearchCocktails] = useState([]);

        const fetchSearchResults = async () => {

            const allCocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
            const allCocktailsJs = await allCocktailsResponse.json();

            setSearchCocktails(allCocktailsJs.drinks);
        };


        useEffect(() => {
            fetchSearchResults();
        }, []);

        const [searchParams] = useSearchParams();
        const search = searchParams.get("search");

        return (
            <div className="search">
                <Header />

                <h2> <strong> LES RESULTATS 🍹:</strong> </h2>

                <div>
                    {cocktails.length === 0 && <p>Loading...</p>}
                    {cocktails.map((cocktail) => (

                    <div key = {cocktail.idDrink}>
                    <p>{cocktail.strDrink}</p>
                    </div>

                    ))}
                </div>
            </div>
        );
    };

export default SearchResultsPage;