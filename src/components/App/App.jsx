import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Login from "../Login/Login";
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  function handleLoginClick() {
    setIsLoginOpen(true);
  }

  function handleClosePopups() {
    setIsLoginOpen(false);
  }

  function handleLoginSubmit(data) {
    console.log("Login submit:", data);
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
        <Login onSubmit={handleLoginSubmit} onRegisterClick={() => {}} />
      </PopupWithForm>
    </div>
  );
}

export default App;