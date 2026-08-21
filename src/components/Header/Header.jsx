import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onLoginClick, isLoggedIn, onLogoutClick }) {
  return (
    <header className={`header ${isLoggedIn ? "header_theme_light" : ""}`}>
      <div className="header__content">
        <Link className="header__logo" to="/">
          NewsExplorer
        </Link>
        <Navigation
          onLoginClick={onLoginClick}
          isLoggedIn={isLoggedIn}
          onLogoutClick={onLogoutClick}
        />
      </div>
    </header>
  );
}

export default Header;
