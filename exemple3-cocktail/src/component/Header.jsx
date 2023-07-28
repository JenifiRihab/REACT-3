import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const search = event.target.search.value;

    navigate(`/search-results?search=${search}`);
  };
  return (
    <header className="App-Header">
        <section className="header">

          <nav className="menu" >  
              <img className="logo" src="https://www.diabetevaud.ch/wp-content/uploads/2018/03/recette-logo-1024x1024.png" alt="" />
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/cocktails">Liste des cocktails</Link>
              </li>
              <li>
                <Link to="/cocktails/random">Cocktail aléatoire</Link>
              </li>

              <li>

                <form onSubmit={handleSubmit}>
                  <Link to="/cocktails/random">Rechercher un cocktail</Link>
                  <br />
                  <input type="text" name="search" placeholder="Rechercher" />
                  <button  className="btn" type="submit">SEARCH 😉</button>
                </form>

              </li>

            </ul>
          </nav>

          <div> 
              <span>
                  <h1 className="title"> Welcome to TheMealDB 🍉🍒 . </h1>
              </span>
          </div>

        </section>
    </header>
  );
};

export default Header;