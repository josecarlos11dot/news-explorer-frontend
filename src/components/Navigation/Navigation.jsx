import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick, isLoggedIn, userName, onLogoutClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_open" : ""} ${isLoggedIn ? "navigation_theme_light" : ""}`}>
     <button
  className="navigation__burger"
  type="button"
  onClick={toggleMenu}
  aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
>
  {isMenuOpen ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )}
</button>

      <div className="navigation__menu">
        <NavLink className="navigation__link" to="/" onClick={closeMenu}>
          Inicio
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              className="navigation__link"
              to="/saved-news"
              onClick={closeMenu}
            >
              Artículos guardados
            </NavLink>
            <button
              className="navigation__user"
              type="button"
              onClick={onLogoutClick}
              aria-label={`Cerrar sesión de ${userName}`}
            >
              <span>{userName}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </>
        ) : (
          <button
            className="navigation__button"
            type="button"
            onClick={() => {
              closeMenu();
              onLoginClick();
            }}
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;