import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo" to="/">
          NewsExplorer
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;