import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Login from "../Login/Login";
import Register from "../Register/Register";
import RegisterSuccess from "../RegisterSuccess/RegisterSuccess";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { login, register, getUserInfo } from "../../utils/MainApi";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;

    getUserInfo(token)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("jwt");
      });
  }, []);

  function handleLoginClick() {
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
    setAuthError("");
    setIsLoginOpen(true);
  }

  function handleRegisterClick() {
    setIsLoginOpen(false);
    setIsSuccessOpen(false);
    setAuthError("");
    setIsRegisterOpen(true);
  }

  function handleClosePopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
  }

  function handleLoginSubmit({ email, password }) {
    return login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return getUserInfo(data.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        handleClosePopups();
      })
      .catch((err) => {
        setAuthError(err.message || "Correo o contraseña incorrectos");
      });
  }

  function handleRegisterSubmit({ email, password, name }) {
    return register({ email, password, name })
      .then(() => {
        setIsRegisterOpen(false);
        setIsSuccessOpen(true);
      })
      .catch((err) => {
        setAuthError(err.message || "Error al registrarse");
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    navigate("/");
  }

  const isLoggedIn = Boolean(currentUser);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  onLoginClick={handleLoginClick}
                  onLogoutClick={handleLogout}
                  isLoggedIn={isLoggedIn}
                  userName={currentUser?.name}
                />
                <Main />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <>
                <Header
                  onLoginClick={handleLoginClick}
                  onLogoutClick={handleLogout}
                  isLoggedIn={isLoggedIn}
                  userName={currentUser?.name}
                />
                <SavedNews />
                <Footer />
              </>
            }
          />
        </Routes>
        <PopupWithForm
          title="Iniciar sesión"
          isOpen={isLoginOpen}
          onClose={handleClosePopups}
        >
          <Login
            onSubmit={handleLoginSubmit}
            onRegisterClick={handleRegisterClick}
            errorMessage={authError}
          />
        </PopupWithForm>
        <PopupWithForm
          title="Inscribirse"
          isOpen={isRegisterOpen}
          onClose={handleClosePopups}
        >
          <Register
            onSubmit={handleRegisterSubmit}
            onLoginClick={handleLoginClick}
            errorMessage={authError}
          />
        </PopupWithForm>
        <PopupWithForm
          title=""
          isOpen={isSuccessOpen}
          onClose={handleClosePopups}
        >
          <RegisterSuccess onLoginClick={handleLoginClick} />
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
