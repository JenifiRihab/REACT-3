import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import jwtDecode from "jwt-decode";

const CoworkingsPublicPage = () => {

  const navigate = useNavigate();

  const [coworkings, setCoworkings] = useState([]);

  const token = Cookies.get("jwt");
  const fetchDisplayCoworkings = async () => {
      const response = await fetch("http://localhost:3010/api/coworkings", {
        method: "GET",
      });

      const responseJs = await response.json();
      setCoworkings(responseJs.data);
  };

  useEffect(() => {

      const jwt = Cookies.get("jwt");
  
      if (!jwt) {
        navigate("/display");
      }
      const user = jwtDecode(jwt);
  
      if (user.data.role === 1) {
        navigate("/");
      } 
   
  
    fetchDisplayCoworkings();

  }, []);

  const handleCreateReview = async (event, coworkingId) => {

    event.preventDefault();

    const content = event.target.content.value;
    const rating = event.target.rating.value;

    const reviewCreateData = {

      content: content,
      rating: parseInt(rating),

    };

    const jwt = Cookies.get("jwt");

    const responseReview = await fetch(`http://localhost:3010/api/reviews/${coworkingId}`, {

      method: "POST",
      headers: {

        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,

      },

      body: JSON.stringify(reviewCreateData),

    });

    const responseReviewJs = await responseReview.json();

    console.log(responseReviewJs);

   
  };

  return (
    <>
     <HeaderAdmin />
      <div>

        <h1> La Liste des coworkings</h1>
        
        {coworkings.map((coworking) => (
          
          <div key={coworking.id}>
            
            <h2>{coworking.name}</h2>
            <p> Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}{coworking.address.city}€</p>

            <form onSubmit={(event) => handleCreateReview(event, coworking.id)}>
<br />
             
              <label htmlFor="rating">   <strong> Votre note :</strong></label>
              <br />
              <input  className="btn"  type="number" name="rating" min="0" max="5" />
<br />
              <label htmlFor="content"> <strong>Votre commentaire : </strong></label>
              <br />
              <textarea name="content" rows="4" cols="50"></textarea>
<br /> <br />
              <button className="btn"  type="submit">Créer la  commentaire 😉 </button>

            </form>

          </div>

        ))}

      </div>

    </>
  );
};

export default CoworkingsPublicPage;