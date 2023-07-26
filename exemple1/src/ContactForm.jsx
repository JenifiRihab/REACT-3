import { useState } from "react";

    const ContactForm = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        setContactData({
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        });
    };

    return (

        <div>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">écrivez votre Nom</label>
                <br />
                <input id="name" type="text" />
                <br /><br />

                <label htmlFor="email">écrivez votre Email</label>
                <br />
                <input id="email" type="email" />
                <br /><br />

                <label htmlFor="message">écrivez votre Message</label>
                <br />
                <textarea id="message" rows="5" />
                <br /><br />

                <button type="submit">Envoyer</button>
                <br />

            </form>

            <div>
                <p className="prg" >Merci d'avoir envoyé le message, le service publique vous répondra à ces heures d'ouvertures, du lundi au vendredi  de 09h00 à 18h00. Vos infos :{" "}</p>

                <p>{contactData.name} : {contactData.message}</p>
            </div>

        </div>
  );
};

export default ContactForm