import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header>
          <h2>Mon site de cocktails</h2>
          <nav>
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
            </ul>
          </nav>
      </header>
  );
};

export default Header;