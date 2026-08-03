import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Inicio
      </Link>
      <button className="navigation__button" type="button">
        Iniciar sesión
      </button>
    </nav>
  );
}

export default Navigation;