import "./NewsCard.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

function NewsCard({
  article,
  isSavedView,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
  onRegisterRequired,
}) {
  const { source, title, publishedAt, description, urlToImage, keyword, url } =
    article;

  const savedMatch = savedArticles?.find((saved) => saved.url === url);
  const isSaved = Boolean(savedMatch);

  function handleSaveClick() {
    if (!isLoggedIn) {
      onRegisterRequired();
      return;
    }
    if (isSaved) {
      onDeleteArticle(savedMatch._id);
    } else {
      onSaveArticle(article);
    }
  }

  function handleDeleteClick() {
    onDeleteArticle(article._id);
  }

  return (
    <li className="news-card">
      <div className="news-card__image-wrapper">
        <img className="news-card__image" src={urlToImage} alt={title} />
        {isSavedView && keyword && (
          <span className="news-card__keyword-badge">{keyword}</span>
        )}
        {isSavedView ? (
          <button
            className="news-card__delete-button"
            type="button"
            title="Eliminar de guardados"
            aria-label="Eliminar de guardados"
            onClick={handleDeleteClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z"
                fill="currentColor"
              />
            </svg>
          </button>
        ) : (
          <button
            className={`news-card__save-button${
              isSaved ? " news-card__save-button_active" : ""
            }${!isLoggedIn ? " news-card__save-button_tooltip" : ""}`}
            type="button"
            title={
              isLoggedIn
                ? "Guardar artículo"
                : "Inicia sesión para guardar artículos"
            }
            aria-label={
              isLoggedIn
                ? "Guardar artículo"
                : "Inicia sesión para guardar artículos"
            }
            onClick={handleSaveClick}
          >
            {isSaved ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 4C5 3.44771 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V22L12 16.5L5 22V4Z"
                  fill="#2F71E5"
                />
              </svg>
            ) : (
              <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26 12V27.9424L20.6182 23.7139L20 23.2285L19.3818 23.7139L14 27.9424V12H26Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      <p className="news-card__date">{formatDate(publishedAt)}</p>
      <h3 className="news-card__title">{title}</h3>
      <p className="news-card__description">{description}</p>
      <span className="news-card__source">{source?.name}</span>
    </li>
  );
}

export default NewsCard;
