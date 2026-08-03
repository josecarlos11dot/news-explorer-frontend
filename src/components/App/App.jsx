import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
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
              <Header />
              <SavedNews />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;