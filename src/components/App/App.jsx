import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Login from "../Login/Login";
import Register from "../Register/Register";
import RegisterSuccess from "../RegisterSuccess/RegisterSuccess";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import {
  login,
  register,
  getUserInfo,
  getArticles,
  saveArticle,
  deleteArticle,
} from "../../utils/MainApi";
import { toApiArticle, toDisplayArticle } from "../../utils/articleAdapter";
import "./App.css";

function checkStoredToken() {
  const token = localStorage.getItem("jwt");
  if (!token) {
    return Promise.resolve(null);
  }
  return getUserInfo(token)
    .catch((err) => {
      console.error(err);
      localStorage.removeItem("jwt");
      return null;
    });
}

function fetchSavedArticles(currentUser) {
  const token = localStorage.getItem("jwt");
  if (!currentUser || !token) {
    return Promise.resolve([]);
  }
  return getArticles(token)
    .then((articles) => articles.map(toDisplayArticle))
    .catch((err) => {
      console.error(err);
      return [];
    });
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  const shouldOpenLoginFromRedirect = Boolean(location.state?.openLogin);
  const isLoginPopupOpen = isLoginOpen || shouldOpenLoginFromRedirect;

  useEffect(() => {
    checkStoredToken().then((userData) => {
      if (userData) {
        setCurrentUser(userData);
      }
      setIsCheckingAuth(false);
    });
  }, []);

  useEffect(() => {
    fetchSavedArticles(currentUser).then((articles) => {
      setSavedArticles(articles);
    });
  }, [currentUser]);

  function clearRedirectState() {
    if (shouldOpenLoginFromRedirect) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }

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
    clearRedirectState();
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
    navigate("/", { replace: true, state: {} });
    localStorage.removeItem("jwt");
    setCurrentUser(null);
  }

  function handleSaveArticle(article) {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    saveArticle(toApiArticle(article), token)
      .then((savedArticle) => {
        setSavedArticles((prev) => [
          ...prev,
          toDisplayArticle({ ...savedArticle, source: article.source?.name }),
        ]);
      })
      .catch((err) => console.error(err));
  }

  function handleDeleteArticle(articleId) {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    deleteArticle(articleId, token)
      .then(() => {
        setSavedArticles((prev) =>
          prev.filter((article) => article._id !== articleId)
        );
      })
      .catch((err) => console.error(err));
  }

  const isLoggedIn = Boolean(currentUser);

  if (isCheckingAuth) {
    return null;
  }

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
                />
                <Main
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onSaveArticle={handleSaveArticle}
                  onDeleteArticle={handleDeleteArticle}
                  onRegisterRequired={handleRegisterClick}
                />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Header
                  onLoginClick={handleLoginClick}
                  onLogoutClick={handleLogout}
                  isLoggedIn={isLoggedIn}
                />
                <SavedNews
                  userName={currentUser?.name}
                  savedArticles={savedArticles}
                  onDeleteArticle={handleDeleteArticle}
                />
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
        <PopupWithForm
          title="Iniciar sesión"
          isOpen={isLoginPopupOpen}
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
