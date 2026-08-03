import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Inicio
      </NavLink>
      <button className="navigation__button" type="button">
        Iniciar sesión
      </button>
    </nav>
  );
}

export default Navigation;