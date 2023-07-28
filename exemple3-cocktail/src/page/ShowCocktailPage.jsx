// import { useParams } from "react-router-dom";
// import Header from "../component/Header";
// import { useEffect, useState } from "react";

// const ShowCocktailPage = () => {
//     const [cocktail,setCocktails] = useState({});

//     const { id } =useParams();

//     const fetchShowCocktail = async () =>{

//         const showCocktailsResponse = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
//         const showCocktailsJs = await showCocktailsResponse.json();
//         setCocktails(showCocktailsJs.drinks[0]);
//     }

//     useEffect(() => {
//         fetchShowCocktail();
//     }, [id]);

//     return (
//         <div>
//             <Header/>

//             <div className="show">
//             <h2> <strong> LES DETAILS DU COCKTAILS 🍹:</strong> </h2>


//                 <div >
//                     <h2>{cocktail.strDrink}</h2>
//                     <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
//                     <p>{cocktail.strInstructions}</p>
//                 </div>


            
//             </div>
//         </div>
//     );
// };

// export default ShowCocktailPage;



import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { useEffect, useState } from "react";

const ShowCocktailPage = () => {
  // récupérer l'id du cocktail dans l'URL

  // faire un appel fetch vers :
  // https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=ID
  // où ID est l'id du cocktail récupéré dans l'URL

  // afficher les informations du cocktail

  const [cocktail, setCocktail] = useState(null);

  const { id } = useParams();

  const fetchCocktail = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const responseJs = await response.json();

    setCocktail(responseJs.drinks[0]);
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <>
      <Header />
      <h1>Détail du cocktail : </h1>

      {cocktail && (
        <article>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
        </article>
      )}
    </>
  );
};

export default ShowCocktailPage;