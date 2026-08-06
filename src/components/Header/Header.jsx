import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header( {onLoginClick} ) {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo" to="/">
          NewsExplorer
        </Link>
        <Navigation onLoginClick={onLoginClick} />
      </div>
    </header>
  );
}

export default Header;