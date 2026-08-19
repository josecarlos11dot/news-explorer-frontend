import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import { searchNews } from "../../utils/NewsApi";
import "./Main.css";

function Main({ isLoggedIn, savedArticles, onSaveArticle, onDeleteArticle, onLoginRequired }) {
  const [articles, setArticles] = useState(() => {
    const saved = localStorage.getItem("lastSearchResults");
    return saved ? JSON.parse(saved) : [];
  });
  const [hasSearched, setHasSearched] = useState(() => {
    return localStorage.getItem("lastSearchResults") !== null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSearch(keyword) {
    setHasSearched(true);
    setIsLoading(true);
    setError("");
    setArticles([]);
    searchNews(keyword)
      .then((data) => {
        const results = (data.articles || []).map((article) => ({
          ...article,
          keyword,
        }));
        setArticles(results);
        localStorage.setItem("lastSearchResults", JSON.stringify(results));
      })
      .catch(() => {
        setError(
          "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-content">
          <h1 className="main__title">¿Qué está pasando en el mundo?</h1>
          <p className="main__subtitle">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas
            en tu cuenta personal
          </p>
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>
      {isLoading && <Preloader />}
      {!isLoading && error && (
        <p className="main__error" role="alert">
          {error}
        </p>
      )}
      {!isLoading && !error && hasSearched && articles.length === 0 && (
        <div className="main__not-found">
          <div className="main__not-found-icon">
            <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37" cy="37" r="36.5" stroke="#D1D2D6"/>
              <path d="M63 63L82.5 82.5" stroke="#D1D2D6"/>
              <path d="M52.3283 49.9592C48.6606 45.6981 43.2275 43 37.1642 43C31.1009 43 25.6678 45.6981 22 49.9592" stroke="#D1D2D6"/>
              <circle cx="49.5" cy="27.5" r="1.5" fill="#D1D2D6"/>
              <circle cx="24.5" cy="27.5" r="1.5" fill="#D1D2D6"/>
            </svg>
          </div>
          <h2 className="main__not-found-title">No se ha encontrado nada</h2>
          <p className="main__not-found-text">
            Lo sentimos, pero no hay nada que coincida con tus términos de
            búsqueda.
          </p>
        </div>
      )}
      {!isLoading && !error && articles.length > 0 && (
        <section className="main__results">
          <h2 className="main__results-title">Resultados de la búsqueda</h2>
          <NewsCardList
            articles={articles}
            isLoggedIn={isLoggedIn}
            savedArticles={savedArticles}
            onSaveArticle={onSaveArticle}
            onDeleteArticle={onDeleteArticle}
            onLoginRequired={onLoginRequired}
          />
        </section>
      )}
    </main>
  );
}

export default Main;
