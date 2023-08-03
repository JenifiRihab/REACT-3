import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Cookies from "js-cookie";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const CreateCoworkingPage = () => {
  const navigate = useNavigate();

            // appelé au submit du formulaire
  const handleCreateCoworking = async (event) => {
    event.preventDefault();

           // on récupère les infos du form
    const name = event.target.name.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;
    const price_hour = event.target.price_hour.value;
    const price_day = event.target.price_day.value;
    const price_month = event.target.price_month.value;
    const address_number = event.target.address_number.value;
    const address_street = event.target.address_street.value;
    const address_postcode = event.target.address_postcode.value;
    const address_city = event.target.address_city.value;

          // on construit l'ojet coworking tel qu'il est attendu par l'api
    const coworkingData = {

      name: name,

      price: {
        hour: parseInt(price_hour),
        day: parseInt(price_day),
        month: parseInt(price_month),
      },

      superficy: parseInt(superficy),

      capacity: parseInt(capacity),

      address: {
        number: parseInt(address_number),
        street: address_street,
        postCode: parseInt(address_postcode),
        city: address_city,
      },

    };

                  // on fait l'appel à l'api
                  // avec une requête POST
                  // en lui passant les données du coworking
                  // en json dans la clé "body"
                  // on précise qu'on envoie un json, via le header

    const token = Cookies.get("jwt");

    const responseCreate = await fetch("http://localhost:3010/api/coworkings", {
      method: "POST",
      body: JSON.stringify(coworkingData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseCreateJs = await responseCreate.json();

          // on redirige vers la liste des coworkings
    navigate("/admin/coworkings");
  };

  useEffect (() => {
    
    const jwt = Cookies.get("jwt");

          // s'il existe pas, ça veut que l'utilisateur n'est pas connecté
          // on le redirige vers la page de login
    if (!jwt) {
      navigate("/login");
    }

          // on décode le jwt
    const user = jwtDecode(jwt);

        // si l'utilisateur a le rôle user
        // on le redirige vers l'accueil public
    if (user.data.role === 1) {
      navigate("/");
    } 
 
    
  }, []);

  return (
    <>
      <HeaderAdmin />

      <form onSubmit={handleCreateCoworking}>
        <div>
          <label htmlFor="name">Name</label>
<br />
          <input type="text" name="name" />
        </div>
<br />
        <div>
          <label htmlFor="superficy">Superficy</label>
          <br />
          <input type="number" name="superficy" />
        </div>
<br />
        <div>
          <label htmlFor="capacity">Capacity</label>
          <br />
          <input type="number" name="capacity" />
        </div>
<br />
        <div>
          <label htmlFor="price_hour">Price by hour</label>
          <br />
          <input type="number" name="price_hour" />
        </div>
<br />
        <div>
          <label htmlFor="price_day">Price by day</label>
          <br />
          <input type="number" name="price_day" />
        </div>
<br />
        <div>
          <label htmlFor="price_month">Price by month</label>
          <br />
          <input type="number" name="price_month" />
        </div>
<br />
        <div>
          <label htmlFor="address_number">Address number</label>
          <br />
          <input type="number" name="address_number" />
        </div>
<br />
        <div>
          <label htmlFor="address_street">Address street</label>
          <br />
          <input type="text" name="address_street" />
        </div>
<br />
        <div>
          <label htmlFor="address_postcode">Address zipcode</label>
          <br />
          <input type="number" name="address_postcode" />
        </div>
<br />
        <div>
          <label htmlFor="address_city">Address city</label>
          <br />
          <input type="text" name="address_city" />
        </div>
<br />
        <input type="submit" />
      </form>
    </>
  );
};

export default CreateCoworkingPage;