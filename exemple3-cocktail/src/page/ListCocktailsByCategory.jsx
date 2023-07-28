import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";

    const ListCocktailsByCategoryPage = () => {
        const { categoryName } = useParams();
        const [cocktails, setCocktails] = useState([]);
        const fetchCocktailsByCategory = async () => {

            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`);
            const data = await response.json();
            setCocktails(data.drinks);
        };

        useEffect(() => {
            fetchCocktailsByCategory();
        }, []);

        return (
            <div className="category">
                <Header />
                <h2> <strong> COCKTAILS POUR LA CATEGORIE </strong>: {categoryName}</h2>
                <div>

                    {cocktails.length === 0 ? (<p>Loading...</p>) : (
                        <div>
                            {cocktails.map((cocktail) => (
                                <div key={cocktail.idDrink}>
                                    <p>{cocktail.strDrink}</p>
                                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

export default ListCocktailsByCategoryPage;