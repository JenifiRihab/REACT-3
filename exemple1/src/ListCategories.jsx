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

//____________________________________________________________



//_________________________________



import { useEffect, useState } from "react";
import MealsByCategory from "./MealsByCategory";

const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  const [mealsByCategory, setMealsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const categoriesJs = await categoriesResponse.json();

    setCategories(categoriesJs.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryTitle) => {
    setIsLoading(true);

    const mealsByCategoryResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryTitle}`
    );
    const mealsByCategoryJs = await mealsByCategoryResponse.json();
    setMealsByCategory(mealsByCategoryJs.meals);

    setIsLoading(false);
  };

  return (
    <div>
      <MealsByCategory isLoading={isLoading} mealsByCategory={mealsByCategory} />
      {categories.map((category) => {
        return (
          <div key={category.idCategory}>
            <h3>{category.strCategory}</h3>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <p>{category.strCategoryDescription}</p>
            <button onClick={() => handleCategoryClick(category.strCategory)}>Afficher les recettes reliées</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListCategories;