// import { useEffect, useState } from "react";

//     const ListCategories = () => {
//         const [categories, setCategories] = useState([]);

//             const fetchListCategories = async () => {
//                 const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
//                 const categoriesJs = await categoriesResponse.json();

//                 setCategories(categoriesJs.categories);
//             };


//     // Utilisation du useEffect :
//     // => pour permetera de charger qu'un nombre de fois limité du composant 
//     // => pour effectuer une requête au chargement du composant 
//     // => mettra à jour l'état "categories".
//     // => useEffect donnera les nouvelles données.

//         useEffect(() => {

//             fetchListCategories();
            
//         }, []);

//     return (
//         <div className="list">
//             <h1>Categories</h1>

//             {categories.map((category) => {

//                 return (
//                     <div key={category.idCategory}>

//                         <h2>{category.strCategory}</h2>
//                         <img src={category.strCategoryThumb} alt={category.strCategory} />
//                         <p>{category.strCategoryDescription}</p>

//                     </div>
//                 );

//             })}

//         </div>
//      );
// };

// export default ListCategories;


import { useEffect, useState } from "react";
import MealsByCategories from "./MealsByCategory ";

    const ListCategories = () => {

        const [categories, setListCategories] = useState([]);
        const [mealsByCategory, setMealsByListCategory] = useState([]);

        const fetchListCategories = async () => {

            const listCategoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const categoriesJs = await listCategoriesResponse.json();

            setListCategories(categoriesJs.categories);
        };
        
        
        useEffect(() => {
            fetchListCategories();
        }, []);

        const handleCategoryClick = async (categoryName) => {

            console.log(categoryName)

            const responseMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
            const mealsByCategory = await responseMeals.json();

            setMealsByListCategory(mealsByCategory.meals);
        };

    return (
        <div>
            <h2> <strong>Les listes des Categories :</strong></h2>

            <div>

             <h3> <strong> Toutes les recettes:</strong></h3>   

                {mealsByCategory.map((meal) => {

                    return (
                    
                        <div key={meal.idMeal}>

                            <h3>{meal.strMeal}</h3>

                        </div>
                    );

                })}

            </div>

            {categories.map((category) => {

                return (

                    <div key={category.idCategory}>
                        <h3>{category.strCategory}</h3>
                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                        <p>{category.strCategoryDescription}</p>
                        <button className="btn1" onClick={() => handleCategoryClick(category.strCategory)}> <strong>toutes les recettes </strong></button>

                    </div>
                );
            })}

        </div>
    );
    };

export default ListCategories;