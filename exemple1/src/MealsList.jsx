import { useEffect, useState } from "react";

const MealsList = () => {
    const [meals, setMeals] = useState([]);
    const [detailMeal, setDetailMeal] = useState(null);

    const fetchMeals = async () => {
        const responseApi = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const responseJson = await responseApi.json();

        setMeals(responseJson.meals);
    };

     const handleDetailsClick = async (idMeal) => {
        const responseApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const responseJson = await responseApi.json();

        setDetailMeal(responseJson.meals[0]);
    };

        useEffect(() => {
            fetchMeals();
        }, []);

    return (
        <div className=" meals">
            <h1>MEALS LIST</h1>

            {detailMeal && (
                <div>
                <h2>Détails de la recette</h2>
                <p>{detailMeal.strInstructions}</p>
                </div>
            )}

            <div>
                {meals.map((meal) => (
                <div key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                    <button className="btn1" onClick={() => handleDetailsClick(meal.idMeal)}>Afficher le détail</button>
                </div>
                ))}
            </div>
        </div>
    ) ;
};

export default MealsList;