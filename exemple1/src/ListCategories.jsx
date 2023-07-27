import { useEffect, useState } from "react";

    const ListCategories = () => {
        const [categories, setCategories] = useState([]);

            const fetchListCategories = async () => {
                const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
                const categoriesJs = await categoriesResponse.json();

                setCategories(categoriesJs.categories);
            };


    // Utilisation du useEffect :
    // => pour permetera de charger qu'un nombre de fois limité du composant 
    // => pour effectuer une requête au chargement du composant 
    // => mettra à jour l'état "categories".
    // => useEffect donnera les nouvelles données.

        useEffect(() => {

            fetchListCategories();
            
        }, []);

    return (
        <div>
            <h3>Categories</h3>

            {categories.map((category) => {

                return (
                    <div key={category.idCategory}>

                        <h3>{category.strCategory}</h3>
                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                        <p>{category.strCategoryDescription}</p>

                    </div>
                );

            })}

        </div>
     );
};

export default ListCategories;