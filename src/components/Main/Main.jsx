import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main() {
  const [searchedKeyword, setSearchedKeyword] = useState("");

  function handleSearch(keyword) {
    setSearchedKeyword(keyword);
    console.log("Buscando:", keyword);
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