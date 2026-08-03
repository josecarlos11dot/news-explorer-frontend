import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setKeyword(e.target.value);
    if (error) setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword.trim()) {
      setError("Por favor, introduzca una palabra clave");
      return;
    }
    onSearch(keyword.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        className="search-form__input"
        type="text"
        placeholder="Introduce un tema"
        value={keyword}
        onChange={handleChange}
      />
      <button className="search-form__button" type="submit">
        Buscar
      </button>
      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;