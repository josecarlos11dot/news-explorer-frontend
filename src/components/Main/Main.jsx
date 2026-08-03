import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { searchNews } from "../../utils/NewsApi";
import "./Main.css";

function Main() {
  const [searchedKeyword, setSearchedKeyword] = useState("");

  function handleSearch(keyword) {
    setSearchedKeyword(keyword);
    searchNews(keyword)
      .then((data) => {
        console.log("Respuesta de News API:", data);
      })
      .catch((err) => {
        console.error("Error al buscar noticias:", err);
      });
  }

  return (
    <main className="main">
      <section className="main__hero">
        <h1 className="main__title">Lo que pasa en el mundo</h1>
        <p className="main__subtitle">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en
          tu cuenta personal
        </p>
        <SearchForm onSearch={handleSearch} />
      </section>
      {searchedKeyword && (
        <p className="main__debug">
          (Debug) Última búsqueda: {searchedKeyword}
        </p>
      )}
    </main>
  );
}

export default Main;