import "./SavedNewsHeader.css";

function formatKeywords(keywords) {
  if (keywords.length === 0) return "";
  if (keywords.length <= 3) return keywords.join(", ");

  const [first, second] = keywords;
  const remaining = keywords.length - 2;
  return `${first}, ${second}, y ${remaining} más`;
}

function SavedNewsHeader({ userName, savedCount, keywords }) {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__breadcrumb">Artículos guardados</p>
      <h1 className="saved-news-header__title">
        {userName}, tienes {savedCount} artículo
        {savedCount !== 1 ? "s" : ""} guardado
        {savedCount !== 1 ? "s" : ""}
      </h1>
      {keywords.length > 0 && (
        <p className="saved-news-header__keywords">
          Por palabras clave: <strong>{formatKeywords(keywords)}</strong>
        </p>
      )}
    </section>
  );
}

export default SavedNewsHeader;