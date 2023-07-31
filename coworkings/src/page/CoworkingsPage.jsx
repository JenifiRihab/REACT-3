import React, { useEffect, useState } from "react";

  const CoworkingsPage = () => {
    const [coworkings, setCoworkings] = useState([]);
    const [deleteCoworkingMessage, setDeleteCoworkingMessage] = useState(null);

    const fetchCoworkings = async () => {
      const response = await fetch("http://localhost:3010/api/coworkings", {
        method: "GET",
      });
      const responseJs = await response.json();

      setCoworkings(responseJs.data);
    };

  
    useEffect(() => {
      fetchCoworkings();
    }, [deleteCoworkingMessage]);

    const handleDeleteCoworking = async (coworkingId) => {
      const responseDelete = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}`, {
        method: "DELETE",
      });

      const responseDeleteJs = await responseDelete.json();

      setDeleteCoworkingMessage(responseDeleteJs.message);
    };

    return (
      <div className="coworking">
        <h1> <strong> Liste des coworkings </strong></h1>
        {deleteCoworkingMessage && <p>{deleteCoworkingMessage}</p>}
        {coworkings.map((coworking) => (
          <div key={coworking.id}>
              <h2>{coworking.name}</h2>
              <p>
                Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
                {coworking.address.city}
              </p>
              <button className="btn" onClick={() => handleDeleteCoworking(coworking.id)}>Supprimer le coworking</button>
          </div>
        ))}
      </div>
    );
  };

export default CoworkingsPage;