import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import HeroBackground from "./HeroBackground";
import { searchNews } from "../../utils/NewsApi";
import "./Main.css";

function Main() {
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
        const results = data.articles || [];
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
     <HeroBackground />   
  <div className="main__hero-content">
    <h1 className="main__title">¿Qué está pasando en el mundo?</h1>
    <p className="main__subtitle">
      Encuentra las últimas noticias sobre cualquier tema y guárdalas en
      tu cuenta personal
    </p>
    <SearchForm onSearch={handleSearch} />
  </div>
</section>

      {isLoading && <Preloader />}

      {!isLoading && error && <p className="main__error">{error}</p>}

      {!isLoading && !error && hasSearched && articles.length === 0 && (
        <p className="main__not-found">No se ha encontrado nada</p>
      )}

      {!isLoading && !error && articles.length > 0 && (
         <section className="main__results">
         <h2 className="main__results-title">Resultados de la búsqueda</h2>
         <NewsCardList articles={articles} />
        </section>
    )}


    </main>
  );
}

export default Main;