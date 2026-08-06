import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Login from "../Login/Login";
import Register from "../Register/Register";
import RegisterSuccess from "../RegisterSuccess/RegisterSuccess";
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function handleLoginClick() {
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
    setIsLoginOpen(true);
  }

  function handleRegisterClick() {
    setIsLoginOpen(false);
    setIsSuccessOpen(false);
    setIsRegisterOpen(true);
  }

  function handleClosePopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
  }

  function handleLoginSubmit(data) {
    console.log("Login submit:", data);
  }

  function handleRegisterSubmit(data) {
    console.log("Register submit:", data);
    setIsRegisterOpen(false);
    setIsSuccessOpen(true);
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onLoginClick={handleLoginClick} />
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
              <Header onLoginClick={handleLoginClick} />
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
  );
}

export default App;