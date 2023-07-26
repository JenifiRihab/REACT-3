import {useState} from "react";

    const MealsList =() => {
       const [meals,setMeals] = useState([]);

       const fetchMeals = async () => {

        const responsApi = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const responsJson = await responsApi.json ();

        setMeals (responsJson.meals);

       } 

       if (meals.length === 0) {
        fetchMeals();
       }
        return(

            <div>
                <h1>MEALS LIST</h1>

                <div>
                    {meals.map((meal) => (

                    <div key={meal.idMeal}>

                        <h2>{meal.strMeal}</h2>

                    </div>

                    ))}
                </div>

            </div>

        );
};
export default MealsList;