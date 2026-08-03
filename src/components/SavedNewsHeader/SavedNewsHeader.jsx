import "./SavedNewsHeader.css";

function formatKeywords(keywords) {
  if (keywords.length === 0) return "";
  if (keywords.length <= 3) return keywords.join(", ");

  const [first, second] = keywords;
  const remaining = keywords.length - 2;
  return `${first}, ${second} y ${remaining} más`;
}

function SavedNewsHeader({ userName, savedCount, keywords }) {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__greeting">
        Elise, has guardado {savedCount} artículo
        {savedCount !== 1 ? "s" : ""}
      </p>
      {keywords.length > 0 && (
        <p className="saved-news-header__keywords">
          {formatKeywords(keywords)}
        </p>
      )}
    </section>
  );
}

export default SavedNewsHeader;