
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("jwt");

    navigate("/login");
  };

  const jwt = Cookies.get("jwt");
  const userData = jwtDecode(jwt);

  return (
      <header>
        <section className="header">
          
          <nav className="menu">
            <ul>

              <li>
                <Link to={"/admin"}>Accueil</Link>
              </li>

              <li>
                <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
              </li>

              <li>
                <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
              </li>

              <li>
                <Link to={"/admin/coworkings/display"}>Afficher les coworkings </Link>
              </li>

              <li>
                <p>Connecté en tant que {userData.data.username}</p>
              </li>

              <li>
                <a href="#" onClick={handleLogout}> Se déconnecter </a>
              </li>

            </ul>
          </nav>

        </section>
      </header>
    );
  };

export default HeaderAdmin;


